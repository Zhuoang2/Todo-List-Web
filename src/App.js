import React, { useState, useMemo, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    useMediaQuery,
  } from "@mui/material";

// Date
import { LocalizationProvider, CalendarPicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';


// const theme = createTheme({
//   typography: {
//     fontFamily: "'Roboto', sans-serif",
//   },
//   palette: {
//     primary: {
//       main: "#1976d2", // Blue
//     },
//     secondary: {
//       main: "#dc004e", // Pink
//     },
//   },
// });

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [darkMode, setDarkMode] = useState(() => {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode !== null ? JSON.parse(savedMode) : prefersDarkMode;
    });
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
              main: darkMode ? "#90caf9" : "#1976d2",
            },
          },
        }),
      [darkMode]
    );
  
    // Initialize tasks from localStorage
    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    });
  
    // Update localStorage whenever tasks change
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = (task) => {
      setTasks([
        ...tasks,
        { id: Date.now(), text: task, completed: false },
      ]);
    };
  
    const toggleComplete = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, completed: !task.completed }
            : task
        )
      );
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter(
        (task) => task.date === format(selectedDate, 'yyyy-MM-dd')
      );
      

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" my={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
            date={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            />
        </LocalizationProvider>
        </Box>

        <Box mt={5}>
        <TodoInput addTask={addTask} />
        <TodoList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

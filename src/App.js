import React, { useState, useMemo } from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { Switch, FormControlLabel } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Pink
    },
  },
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState('light');

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const theme = createTheme({
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
    palette: {
      primary: {
        main: "#1976d2", // Blue
      },
      secondary: {
        main: "#dc004e", // Pink
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="sm">
      <Box mt={5}>
        <Header />
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

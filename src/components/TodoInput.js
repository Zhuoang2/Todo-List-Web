import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" mb={2}>
      <TextField
        label="Enter a new task..."
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;


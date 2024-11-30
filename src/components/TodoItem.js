import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ task, toggleComplete, deleteTask }) => (
  <ListItem divider>
    <Checkbox
      edge="start"
      checked={task.completed}
      onChange={() => toggleComplete(task.id)}
    />
    <ListItemText
      primary={task.text}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
      }}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default TodoItem;

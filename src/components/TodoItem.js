import React, { useEffect, useRef } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import successSound from "../assets/success.wav";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
    // Create a ref for the audio element
    const audioRef = useRef(new Audio(successSound));
  
    // Use useEffect to detect changes in task.completed
    useEffect(() => {
      // If the task is completed, play the sound
      if (task.completed) {
        audioRef.current.volume = 0.75;
        audioRef.current.play();
      }
    }, [task.completed]);
  
    return (
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
  };
  
  export default TodoItem;
  

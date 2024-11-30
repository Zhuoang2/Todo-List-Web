import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemSecondaryAction,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button, // Imported here
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
    setOpen(false);
  };

  return (
    <>
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
          <IconButton edge="end" onClick={() => setOpen(true)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{"Delete Task?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoItem;

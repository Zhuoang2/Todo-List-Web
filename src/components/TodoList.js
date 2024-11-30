import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => (
  <List>
    {tasks.map((task) => (
      <TodoItem
        key={task.id}
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    ))}
  </List>
);

export default TodoList;


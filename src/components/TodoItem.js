import React from "react";

const TodoItem = ({ task, toggleComplete, deleteTask }) => (
  <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
    <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </li>
);

export default TodoItem;

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => (
  <ul>
    {tasks.map((task) => (
      <TodoItem
        key={task.id}
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
);

export default TodoList;

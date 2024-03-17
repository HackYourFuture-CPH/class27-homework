// TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
      <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
      <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
    </div>
  );
}

export default TodoList;

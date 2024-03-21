import React from "react";

function TodoItem({ todo }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{todo.description}</span>
      <button>Delete</button>
    </li>
  );
}

export default TodoItem;

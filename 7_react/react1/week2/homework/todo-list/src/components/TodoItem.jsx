import React from "react";

function TodoItem({ todo, toggleTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.description}
      </span>
    </div>
  );
}

export default TodoItem;

// TodoItem.jsx
import React from "react";

function TodoItem({ description, deadline }) {
  return (
    <div>
      <p>{description}</p>
      <p>{deadline}</p>
    </div>
  );
}

export default TodoItem;

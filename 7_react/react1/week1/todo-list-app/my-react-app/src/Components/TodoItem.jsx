import React from "react";

function TodoItem({ todo }) {
  return (
    <div>
      <p>
        {todo.description}, {todo.deadline}
      </p>
    </div>
  );
}

export default TodoItem;

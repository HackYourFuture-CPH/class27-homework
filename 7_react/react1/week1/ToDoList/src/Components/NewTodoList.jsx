import React from "react";
import NewTodo from "./NewTodo";

function NewTodoList(props) {
  return (
    <div className="defult-todo">
      <h1>Todo Examples</h1>
      <ul >
        {props.newTodo.map((todo) => {
          return <NewTodo name={todo.name} date={todo.date} />;
        })}
      </ul>
    </div>
  );
}

export default NewTodoList;

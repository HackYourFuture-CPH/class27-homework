import React from "react";
import NewTodo from "./NewTodo";

function NewTodoList(props) {
  return (
    <div className="default-todo">
      <h1>Todo Examples</h1>
      <ul >
        {props.newTodo.map((todo) => {
          return <NewTodo name={todo.name} date={todo.date} key={todo.name} />;
        })}
      </ul>
    </div>
  );
}

export default NewTodoList;

import React from "react";
import NewTodo from "./NewTodo";

function NewTodoList(props) {
  return (
    <div className="App">
      <ul>
        <div className="addItem">
        <input type="text" placeholder="Add Item.."></input>
        <button type="submit">Add</button>
        </div>
        {props.newTodo.map((todo) => {
          return <NewTodo name={todo.name} date={todo.date} />;
        })}
      </ul>
    </div>
  );
}

export default NewTodoList;

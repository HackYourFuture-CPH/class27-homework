import React from "react";

function NewTodo(props) {
  return (
    <li>
      <h3>
        {props.name} , Date : {props.date}
      </h3>
    </li>
  );
}

export default NewTodo;

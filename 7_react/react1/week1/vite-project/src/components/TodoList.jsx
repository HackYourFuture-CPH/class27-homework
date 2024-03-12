
import React, { useState } from 'react';

function TodoList({ todos}) {
 



  return (
    <ul className="todo_list_ul">
      {todos.map((todo) => (
        <li className='todo_list_li' key={todo.id}>
       <span>{`${todo.description}, ${todo.deadline}`}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

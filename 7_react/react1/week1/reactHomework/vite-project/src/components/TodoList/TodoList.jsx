import React from "react";
import TodoItem from "../TodoItem/TodoItems.jsx";
import './TodoList.css';

function TodoList({ todos }) {
    return (
        <ul className="todo-List">
            {todos.map((todo) => (
              <TodoItem key={todo.id} description={todo.description} deadline={todo.deadline} />  

            ))}
        </ul>
    );
}

export default TodoList;
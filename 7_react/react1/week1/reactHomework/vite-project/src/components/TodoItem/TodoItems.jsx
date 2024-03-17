import React from "react";
import './TodoItems.css';

function TodoItem({ description, deadline }) {
    return (
        <li className="todo-item">
            <p className="todo-description">{description}</p>
            <p className="todo-deadline">{deadline}</p>
        </li>
    );
}

export default TodoItem;
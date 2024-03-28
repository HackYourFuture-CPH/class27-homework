import { DeleteTodo, Todo } from "../App";
import { useState } from "react";
import "./todoList.css";

function TodoList({
  todos,
  deleteTodo,
}: {
  todos: Todo[];
  deleteTodo: DeleteTodo;
}) {
  const [doneStatus, setDoneStatus] = useState<{ [key: number]: boolean }>({});

  const toggleDoneStatus = (todoId: number) => {
    setDoneStatus((prevStatus) => ({
      ...prevStatus,
      [todoId]: !prevStatus[todoId],
    }));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={doneStatus[todo.id] ? "done" : ""}>
            {todo.description} ({todo.deadline}){" "}
          </span>
          <input
            type="checkbox"
            checked={doneStatus[todo.id] || false}
            onChange={() => toggleDoneStatus(todo.id)}
          />
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

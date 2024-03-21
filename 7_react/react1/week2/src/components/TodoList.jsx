import React, { useState, useEffect } from "react";
import "./TodoList.css";

const initialTodos = [
  {
    id: 1,
    description: "Attend family meeting",
    deadline: "Sun Mar 10 2024",
    done: false,
  },
  {
    id: 2,
    description: "Get some groceries",
    deadline: "Mon Mar 11 2024",
    done: false,
  },
  {
    id: 3,
    description: "Walk my dog",
    deadline: "Tue Mar 12 2024",
    done: false,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [timer, setTimer] = useState(0);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") setDescription(value);
    if (name === "deadline") setDeadline(value);
  };

  const addTodo = () => {
    if (!description || !deadline) return; // Check for empty fields
    const newTodo = {
      id: Date.now(),
      description: description,
      deadline: deadline,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setDescription("");
    setDeadline("");
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>My Todo List</h2>
      <div>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Enter description"
        />
        <input
          type="text"
          name="deadline"
          value={deadline}
          onChange={handleInputChange}
          placeholder="Enter deadline"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {todos.length === 0 ? (
        <p>No items...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />
              <span>{todo.description}</span>
              <span>({todo.deadline})</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <div>Time spent on this website: {timer} seconds</div>
      <p>Copyright © 2024 Angel Designs | All Rights reserved</p>
    </div>
  );
};

export default TodoList;

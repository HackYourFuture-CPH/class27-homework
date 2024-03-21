import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

const BorderComponent = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>{children}</div>
  );
};

BorderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [timer, setTimer] = useState(0);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDeadline, setEditedDeadline] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") setDescription(value);
    if (name === "deadline") setDeadline(value);
    if (name === "editedDescription") setEditedDescription(value);
    if (name === "editedDeadline") setEditedDeadline(value);
  };

  const addTodo = () => {
    if (!description || !deadline || new Date(deadline) < new Date()) return;
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

  const editTodo = (id, description, deadline) => {
    setEditTodoId(id);
    setEditedDescription(description);
    setEditedDeadline(deadline);
  };

  const updateTodo = () => {
    if (
      !editedDescription ||
      !editedDeadline ||
      new Date(editedDeadline) < new Date()
    )
      return;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editTodoId
          ? {
              ...todo,
              description: editedDescription,
              deadline: editedDeadline,
            }
          : todo
      )
    );
    setEditTodoId(null);
    setEditedDescription("");
    setEditedDeadline("");
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
          type="date"
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
            <BorderComponent key={todo.id}>
              <li
                className="todo-item"
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                />
                {editTodoId === todo.id ? (
                  <>
                    <input
                      type="text"
                      name="editedDescription"
                      value={editedDescription}
                      onChange={handleInputChange}
                      placeholder="Enter description"
                    />
                    <input
                      type="date"
                      name="editedDeadline"
                      value={editedDeadline}
                      onChange={handleInputChange}
                      placeholder="Enter deadline"
                    />
                    <button onClick={updateTodo}>Update</button>
                  </>
                ) : (
                  <>
                    <span>{todo.description}</span>
                    <span>({todo.deadline})</span>
                    <button
                      onClick={() =>
                        editTodo(todo.id, todo.description, todo.deadline)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </>
                )}
              </li>
            </BorderComponent>
          ))}
        </ul>
      )}
      <div>Time spent on this website: {timer} seconds</div>
      <p>
        Copyright © {new Date().getFullYear()} Angel Designs | All Rights
        reserved
      </p>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import "../index.css";

function TaskInput() {
  const [toDoList, setToDoList] = useState([]);
  const [todo, setTodo] = useState("");

  console.log(todo);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setToDoList([...toDoList].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    const updateToDoList = [...toDoList].filter((todo) => todo.id !== id);
    setToDoList(updateToDoList);
  }
  function checkTodo(id) {
    const checkToDoList = [...toDoList].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setToDoList(checkToDoList);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Item.."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
      {toDoList.length > 0 ? (
        toDoList.map((todo) => (
          <div key={todo.id} className="newTodo-container">
            <input type="checkbox" onChange={() => checkTodo(todo.id)} />

            <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </div>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No Item, add new item</p>
      )}
    </div>
  );
}

export default TaskInput;

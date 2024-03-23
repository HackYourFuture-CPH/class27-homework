import React from "react";
import TodoList from "./components/todolist";
import { useState } from "react";
import { useEffect } from "react";

const initialTodos = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017",
    done: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
    done: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
    done: false,
  },
];

function App() {
  const [timer, setTimer] = useState(0);
  const [todos, setTodos] = useState(initialTodos);

  const updateTimer = () => {
    setTimer((prevTime) => prevTime + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addTodo = () => {
    const randomTodo = {
      id: Date.now(),
      description: `Random Task`,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, randomTodo]);
  };

  const toggleTodo = (id) => {
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
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Random Todo</button>
      {todos.length === 0 ? (
        <p>No items...</p>
      ) : (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}
      <p>Time spent: {timer} seconds</p>
    </div>
  );
}

export default App;

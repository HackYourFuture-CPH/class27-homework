import React, { useState } from 'react'
import './App.css';
import TodoList from './Components/TodoList/TodoList.jsx';
import AddTodo from './Components/AddTodo/AddTodo.jsx';
import Timer from './Components/Timer';

function App () {
  const [todos, setTodos] = useState([
    {
        id: 1,
        description: "Get out of bed",
    },
    {
        id: 2,
        description: "Brush teeth",
    },
    {
        id: 3,
        description: "Eat breakfast",
    },
   
  ]);

  function addTodo (newTodo) {
    setTodos(prevTodos => [...prevTodos, { id: prevTodos.length + 1, ...newTodo,description: newTodo.description }]);
  };

  function toggleDone (id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <Timer />
      <AddTodo addTodo={addTodo} />
      {todos.length === 0 ? (<p>No items</p>) : (<TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />)}
    </div>
  )
}

export default App;

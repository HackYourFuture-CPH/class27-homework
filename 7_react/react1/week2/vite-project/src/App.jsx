import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Timer from './components/Timer'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Prepare dinner",
      deadline: "12-03-2024",
  
    },
    {
      id: 2,
      description: "Dye my hair",
      deadline: "05-04-2024",
   
    },
    {
      id: 3,
      description: "Finish homework for React1",
      deadline: "15-03-2024",
      
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, { id: prevTodos.length + 1, ...newTodo,deadline: newTodo.deadline }]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  

  return (
    
    <div className="app">
       <Timer />
    <h1 className='app_title'>What I need ToDo? &#129300;</h1>
    <p className='app_description'>Create your own list</p>
   
    {todos.length === 0 ? (
      <p>No items</p>
    ) : (
      <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
    )}
    <AddTodo addTodo={addTodo} />
  </div>
    

  );
};
export default App

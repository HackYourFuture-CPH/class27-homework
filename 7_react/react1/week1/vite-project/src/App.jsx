import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([
    {
      description: "Prepare dinner",
      deadline: "12-03-2024",
    },
    {
      description: "Dye my hair",
      deadline: "05-04-2024",
    },
    {
      description: "Finish homework for React1",
      deadline: "15-03-2024",
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, {...newTodo, id:  todos.length + 1}]);
  };

  return (
    <div className="app">
      <h1 className='app_title'>What I need ToDo? &#129300;</h1>
      <p className='app_description'>Create your own list</p>
      <TodoList todos={todos}/>
      <AddTodo addTodo={addTodo} />
    </div>
  );
};
export default App

import React from 'react'
import TodoList from './components/TodoList/TodoList.jsx'
import './App.css'

function App() {
  const todos = [
    { id: 1, description: 'Get out of bed', deadline: 'Wed Sep 13 2017'},
    { id: 2, description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { id: 3, description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
  ];
  

  return (

      <div className='App'>
        <header className='App-header'>

          <h1>Todo List</h1>
        </header>
        <TodoList todos={todos} />
      </div>
      
  );
}

export default App;

import React from 'react'
import TodoList from './components/todoList/TodoList'
import './App.css'

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List App</h1>
        </header>
        <TodoList />
    </div>
  );
}

export default App;

import { useState } from "react";
import Timer from "./timer.jsx";
import IteratingTodoItemsArray from "./components/iteratingTodoItemsArray";
import toDoItems from "./data/data.js";
import AddNewToDo from "./components/addNewToDo";
import "./App.css";


function App() {

  return (
    <div>
      <div>
        <Timer />
      </div>

      <br />

      <div className="todo-list">
          <h3 className="todo-header">Todo List</h3>
          <AddNewToDo />
    </div>
    </div>
    
  );
}

export default App;

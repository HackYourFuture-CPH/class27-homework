import React, { useState } from "react";
import toDoItems from "./component/TodoItems";
import Timer from "./component/timer";
import "./App.css";


function App() {
  const [toDoItem, setToDoItems] = useState(toDoItems);
// Function to add a random item
  const addRandomItem = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newItem = {
      id: randomId,
      description: `Task ${randomId}`,
      deadline: "Some deadline", 
      done: false // Initially task is not done
    };
    setToDoItems([...toDoItems, newItem]);
  };

  // mark as done
  const markAsDone = (id) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === id ? { ...item, done: true } : item
      )
    );
  };
  //  mark as not done
  const markAsNotDone = (id) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === id ? { ...item, done: false } : item
      )
    );
  };
  // Function to delete an item
  const deleteItem = (id) => {
    setToDoItems(toDoItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <Timer />
      <button onClick={addRandomItem}>Add Items Here</button>
      {toDoItems.length === 0 ? (
        <p>No items</p>
      ) : (
      <ul>
        {toDoItems.map((todos,index) => (
          <li key={todos.id}>
          {/* { <ToDoListItem key={index}  todosId={todos.id} todosDescription={todos.description} todosDeadline={todos.deadline}   /> } */}
          
              <span style={{ textDecoration: todos.done ? "line-through" : "none" }}>{todos.description}</span>
              <input
                type="checkbox"
                checked={todos.done}
                onChange={!todos.done ? markAsDone : markAsNotDone}
              />
              <button onClick={() => deleteItem(todos.id)}>Delete</button>
              </li>
        ))}
      </ul>
      )}
    </div>
  );
}
export default App;

//----------------------------adding new task--------
/* <div>
                <form className="form" onSubmit={handleSubmit}>
                <input className="addform" placeholder="Add Task"/>
                <button className="button" type="submit">ADD</button>
                </form>
            </div> */

//function handleSubmit(event){
//  event.target.reset()
//}
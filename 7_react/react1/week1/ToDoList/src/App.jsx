import React, { useState } from "react";
import "./index.css";

import NewTodoList from "./Components/NewTodoList.jsx";

function App() {
  const newTodo = [
    {
      name: "Get out of bed",
      date: "Wed Sep 13 2017",
    },
    {
      name: "Brush teeth",
      date: "Thu Sep 14 2017",
    },
    {
      name: "Eat breakfast",
      date: "Fri Sep 15 2017",
    },
  ];

  return (
    <>
      <h2 className="main-title">ToDo List</h2>
      <div className="container">
        <NewTodoList newTodo={newTodo} />
      </div>
    </>
  );
}

export default App;

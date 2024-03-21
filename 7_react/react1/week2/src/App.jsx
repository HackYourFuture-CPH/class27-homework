import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./components/TodoList.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;

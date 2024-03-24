import logo from "./logo.svg";
import "./App.css";
import AppTodo from "./todoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Todo list</h1>
        <AppTodo />
      </header>
    </div>
  );
}

export default App;

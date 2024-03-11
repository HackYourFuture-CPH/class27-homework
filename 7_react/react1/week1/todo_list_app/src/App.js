import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./todoList/TodoList";

//React1-week1
// -render a basic static todo list with three items
// -for each item render a description and a deadline date

function App() {
  const todos = [
    {
      id: 1,
      description: "call about insurance",
      deadline: "fri apr 5 2024",
    },
    {
      id: 2,
      description: "fix indoor plants",
      deadline: "sat mar 16 2024",
    },
    {
      id: 3,
      description: "do homework for react1",
      deadline: "fri mar 15 2024",
    },
  ];
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Todo_list</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/todoList";
import Form from "./components/form";
import Header from "./components/header";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  //const [count, setCount] = useState(0);

  const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <p>You have used {seconds} seconds on this website</p>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="logos-container">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="timer-container">
          <Timer />
        </div>

        <div>
          <Header />
        </div>

        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;

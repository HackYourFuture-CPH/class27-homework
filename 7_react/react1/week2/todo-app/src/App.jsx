import TodoList from "./components/TodoList/TodoList";
import Timer from "./components/Timer/Timer";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
      {
        id: 1,
        task: "Get out of bed",
        deadline: "Wed Sep 13 2017"
      },
      {
        id: 2,
        task: "Brush teeth",
        deadline: "Thu Sep 14 2017"
      },
      {
        id:3,
        task:"Eat breakfast",
        deadline:"Fri Sep 15 2017"
      }
  ]);

  const removeTodo = (todoIdToRemove) => {
    setTodos(todos.filter(todo => todo.id !== todoIdToRemove));
  };

  return (
    <div className="App">
      <Timer/>
      <TodoList todos={todos} removeTodo={removeTodo}/>

    </div>
  )
}

export default App;

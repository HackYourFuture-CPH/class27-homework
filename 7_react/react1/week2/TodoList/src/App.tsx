import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number,
  description : string,
  deadline: string
}
export type  DeleteTodo = (id : number) => void

function App() {
  const [todos, setTodos] = useState<Todo[]>([    {
    id: 1,
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017",
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
  },])
  
  const addRandomTodo = () => {
    setTodos([...todos , {
      id: todos.length + 1,
      description: "random todo",
      deadline: "random deadline",
    }])
  }
  const deleteTodo = (id: number) => {
    const newTodoList = todos.filter(todo => (todo.id !== id));
    setTodos(newTodoList)
  }

  return (
    <div className="container">
      <TodoForm addTodo={addRandomTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;

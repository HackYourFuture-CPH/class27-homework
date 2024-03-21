import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number,
  description : string,
  deadline: string
}
export type  DeleteTodo = (id : number) => void;

const initialTodo : Todo[] = [{
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
}]

function generateUniqueId(): number {
  return parseInt(Date.now().toString(36) + Math.random().toString(36).substr(2), 36);
}


function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodo)
  
  const addRandomTodo = () => {
    setTodos(prevTodo => [...prevTodo , {
      id: generateUniqueId(),
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
      {
        todos.length > 0 ? (<TodoList todos={todos} deleteTodo={deleteTodo}/>) : (<p>No items</p>)
      }
    </div>
  );
}

export default App;

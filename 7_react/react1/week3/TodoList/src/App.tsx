import "./App.css";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useSWR from "swr";

export type Todo = {
  id: number,
  description : string,
  deadline: string
}
export type  DeleteTodo = (id : number) => void;



const url: string = 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';
const fetcher = async() => {
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(error){
    console.log(error)
  }
}
function App() {
  const {data : initialTodo, error} = useSWR(url , fetcher);
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    if (initialTodo) {
      setTodos(initialTodo);
      setIsLoading(false);
    }
  }, [initialTodo]);

  const deleteTodo = (id: number) => {
    const newTodoList = todos.filter(todo => (todo.id !== id));
    setTodos(newTodoList)
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching todos...</div>;

  return (
    <div className="container">
      <TodoForm todos={todos} setTodos={setTodos}/>
      {
        todos.length > 0 ? (<TodoList todos={todos} deleteTodo={deleteTodo}/>) : (<p>No items</p>)
      }
    </div>
  );
}

export default App;

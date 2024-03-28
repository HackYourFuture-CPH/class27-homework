import { useState } from "react";

function AddNewToDo () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Get out of bed",
      checked:"",
    },
  
    {
      id: 2,
      description: "Brush teeth",
      checked:"",
    },
  
    {
      id: 3,
      description: "Eat breakfast",
      checked:"",
    },
  ]);

  const [inputNewTodo, setInputNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputNewTodo.trim() !=="") {
     setTodos([...todos, {id: Math.random(), description: inputNewTodo.trim(), checked: false}]);
      setInputNewTodo("");
    }
    else 
    alert("No item. You have not inserted a task to be added");
  }

  const handleChecked = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  }

  const handleDeleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
        }


  return (
      
    <div>
        <form>
          <label>
            <span>Insert a new todo item: </span>
            <input
              type="text"
              value={inputNewTodo}
              placeholder="New todo"
              style={{ marginRight: "8px" }}
              onChange={(e)=> setInputNewTodo(e.target.value)}
            />
          </label>

         <button className="button" onClick={handleAddTodo}> 
          Add
        </button>

         <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {todos.map(todo => (<li key={todo.id}>
          <input type="checkbox" checked={todo.checked} onChange={() => handleChecked(todo.id)}/>
          <span style={{marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none"}}>
            {todo.description}
            </span>
          <button className="button" style={{marginTop:"5px", marginBottom:"5px"}} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>))}
        </ul> 
        </form>
      </div>
  );
};

export default AddNewToDo;
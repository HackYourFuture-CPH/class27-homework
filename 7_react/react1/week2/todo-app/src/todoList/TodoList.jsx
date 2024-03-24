import TimeCount from "../timer/Timer";
import TodoItem from "../todoItem/TodoItem";
import todos from "../todoItem/todos";
import { useState } from "react";

function AppTodo() {
  // const data = [...todos];
  const [todolist, setTodoList] = useState([...todos]);

  const addTodo = () => {
    const newTodo = {id:new Date(), name: "new todo", date: new Date(), status: false };
    setTodoList((todolist) => { return [...todolist, newTodo]; });
  }
 
  const onDeleteClick = (id) => {
    setTodoList(todolist.filter(todo => todo.id !== id));
  }

  const TodoList = (props) => {
    return (
      <div>
        <button onClick={addTodo}>Add todo</button>
        <ul>
          {props.todos.length > 0 ? (
            props.todos.map((todo) => {
              return (
                <TodoItem
                  id={todo.id}
                  name={todo.name}
                  deadline={todo.deadline}
                  status={todo.status}
                  onDeleteClick={onDeleteClick}
                />
              );
            })
          ) : (
            <p>No items...</p>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h2>My To-Do List</h2>
      {/* <TimeCount /> */}
      <TodoList todos={todolist} />
    </div>
  );
}

export default AppTodo;

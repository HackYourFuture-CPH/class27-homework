import { useState } from "react";
import './todoItem.css'
import { DeleteTodo } from "../App";
function TodoItem({
  todoId,
  description,
  deadline,
  deleteTodo
}: {
  todoId:number
  description: string;
  deadline: string;
  deleteTodo: DeleteTodo
}) {
  const [done, setDone] = useState<boolean>(false);
  const checkDoneStatus = () => {
    setDone(!done)
  }
  const deleteHandler = () => {
    deleteTodo(todoId)
  }
  return (
    <li>
      <span className={done? "done": ""}>
        {description} ({deadline}){" "}
      </span>
      <input type="checkbox" onChange={checkDoneStatus}></input>
      <button type="button" onClick={deleteHandler}>delete</button>
    </li>
  );
}

export default TodoItem;

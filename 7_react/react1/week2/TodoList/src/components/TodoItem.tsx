import { useState } from "react";
import './todoItem.css'
function TodoItem({
  description,
  deadline,
}: {
  description: string;
  deadline: string;
}) {
  const [done, setDone] = useState<boolean>(false);
  const checkDoneStatus = () => {
    setDone(!done)
  }
  return (
    <li>
      <span className={done? "done": ""}>
        {description} ({deadline}){" "}
      </span>
      <input type="checkbox" onChange={checkDoneStatus}></input>
      <button type="button">delete</button>
    </li>
  );
}

export default TodoItem;

import "./todoitem.css";
import { useState } from "react";

export const TodoItem = (props, {onDeleteClick}) => {
  const [itemStatus, setItemStatus] = useState(props.status);

  function toggleStatus(e) {
    setItemStatus(!itemStatus);
  }

  console.log(props)
  return (
    <div className="list_elem">
      <input
        type="checkbox"
        id="item"
        name="scales"
        checked={itemStatus}
        onChange={toggleStatus}
      />
      <label htmlFor="item">{props.name}</label>
      <p>{props.deadline}</p>
      <button type="button" onClick={() => onDeleteClick(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
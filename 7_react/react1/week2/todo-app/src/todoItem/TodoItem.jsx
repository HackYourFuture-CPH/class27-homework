import "./todoitem.css";
import { useState } from "react";

export const TodoItem = (props) => {
  const [itemStatus, setItemStatus] = useState(props.status);

  function toggleStatus(e) {
    setItemStatus(!itemStatus);
  }

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
      <button type="button" onClick={() => props.onDeleteClick(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
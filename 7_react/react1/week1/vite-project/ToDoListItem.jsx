
const ToDoListItem = (props) => {
  return (
    <div>
      <p>Item {props.itemDescription}, {props.itemDeadline}</p>
    </div>
  );
};

export default ToDoListItem;

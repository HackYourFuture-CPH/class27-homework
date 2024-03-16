import './todoitem.css'
export const TodoItem = (props) => {
  return (
    <div className="list_elem">
        <input type="checkbox" id="item" name="scales" checked={props.status} />
        <label for="item">{props.name}</label>
        <p>{props.deadline}</p>
    </div>
  );
};

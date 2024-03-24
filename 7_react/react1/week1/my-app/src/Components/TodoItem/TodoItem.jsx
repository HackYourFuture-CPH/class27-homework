function TodoItem(props) {
    return (
      <li>
        <h3>
          {props.id} {props.description}: {props.deadline};
        </h3>
      </li>
    );
  }

export default TodoItem;
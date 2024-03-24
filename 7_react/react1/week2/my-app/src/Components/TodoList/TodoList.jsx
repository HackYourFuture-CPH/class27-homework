function TodoList({ todos, toggleDone, deleteTodo }) {

  return (
    <ul className="todo_list_ul">
    {todos.map(todo => (
      <li className={`todo_list_li ${todo.done ? 'done' : ''}`} key={todo.id}>
        <span>{`${todo.description}`}</span>
        <input
        className="todo_list_checkbox"
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)} />
        <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
  );
}

export default TodoList;
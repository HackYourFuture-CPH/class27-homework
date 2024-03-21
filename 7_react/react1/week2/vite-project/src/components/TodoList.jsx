
function TodoList({  todos, toggleDone, deleteTodo }) {
 
  return (
    <ul className="todo_list_ul">
    {todos.map(todo => (
      <li className={`todo_list_li ${todo.done ? 'done' : ''}`} key={todo.id}>
             <button className="delete_button" onClick={() => deleteTodo(todo.id)}>X</button>
        <input className="todo_list_checkbox" type="checkbox" checked={todo.done} onChange={() => toggleDone(todo.id)} />
        <span>{`${todo.description}, ${todo.deadline}`}</span>
   
      </li>
    ))}
  </ul>
  );
}

export default TodoList;

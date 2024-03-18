import './todoForm.css'
function TodoForm({addTodo} : {addTodo : () => void}) {
  return (
    <div className='form'>
      <input type="text" placeholder="Add todo..."></input>
      <button type="button" onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoForm

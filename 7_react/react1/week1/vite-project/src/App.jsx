
import ToDoListItem from '../ToDoListItem';
import toDoItems from '../ToDoItems';

function App() {
  return (
    <div>
      <h2>Todo List</h2>
      <div className="todo_item_from_array"></div>
      <ul>
        {toDoItems.map((item, index) => (
          <ToDoListItem key={index} itemDescription={item.description} itemDeadline={item.deadline} />
        ))}
      </ul>
    </div>
  );
}


export default App

import IteratingTodoItemsArray from "./components/iteratingTodoItemsArray";
import "./App.css";

const toDoItems = [
  {
    id: "1",
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017",
  },

  {
    id: "2",
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
  },

  {
    id: "3",
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
  },
];

function App() {
  return (
    <>
      <div className="todo-list">
        <h3 class="todo-header">Todo List</h3>
        
          <IteratingTodoItemsArray toDoItems={toDoItems} />
        
      </div>
    </>
  );
}

export default App;

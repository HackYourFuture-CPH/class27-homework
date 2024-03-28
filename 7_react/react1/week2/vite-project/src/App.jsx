import Timer from "./timer.jsx";
import AddNewToDo from "./components/addNewToDo";
import "./App.css";


function App() {

  return (
    <div>
      <div>
        <Timer />
      </div>

      <br />

      <div className="todo-list">
          <h3 className="todo-header">Todo List</h3>
          <AddNewToDo />
    </div>
    </div>
    
  );
}

export default App;

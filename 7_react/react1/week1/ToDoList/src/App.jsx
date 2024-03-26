import "./index.css";
import NewTodoList from "./Components/NewTodoList.jsx";
import TaskInput from "./Components/TaskInput.jsx";


const newTodo = [
  {
    name: "Get out of bed",
    date: "Wed Sep 13 2017",
  },
  {
    name: "Brush teeth",
    date: "Thu Sep 14 2017",
  },
  {
    name: "Eat breakfast",
    date: "Fri Sep 15 2017",
  },
];
function App() {
  return (
    
      <div className="container">
        <div>
          <h2 className="main-title">ToDo List</h2>
          <TaskInput />
        </div>
        <NewTodoList newTodo={newTodo} />
      </div>
      
    
  );
}

export default App;

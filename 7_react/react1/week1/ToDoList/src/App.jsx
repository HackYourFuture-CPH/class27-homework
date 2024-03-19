import "./index.css";
import NewTodoList from "./Components/NewTodoList.jsx";
import TaskInput from "./Components/TaskInput.jsx";

function App() {
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

  return (
    <>
      <div className="container">
        <div>
          <h2 className="main-title">ToDo List</h2>
          <TaskInput />
        </div>
      </div>
      <NewTodoList newTodo={newTodo} />
    </>
  );
}

export default App;

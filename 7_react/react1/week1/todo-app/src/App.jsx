import TodoList from "./components/TodoList/TodoList";

const todos = [
  {
    id: 1,
    task: "Get out of bed",
    deadline: "Wed Sep 13 2017"
  },
  {
    id: 2,
    task: "Brush teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
    id:3,
    task:"Eat breakfast",
    deadline:"Fri Sep 15 2017"
  }];

function App() {

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  )
}

export default App;

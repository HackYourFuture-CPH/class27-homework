import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App () {
  const todos = [
    {
        id: 1,
        description: "Get out of bed",
        deadline: "Wed Sep 13 2017",
    },
    {
        id: 2,
        description: "Brush teeth",
        deadline: "Thu Sep 14 2017",
    },
    {
        id: 3,
        description: "Eat breakfast",
        deadline: "Fri Sep 15 2017",
    },
   
  ];

  return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;

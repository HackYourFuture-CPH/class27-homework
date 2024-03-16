import { TodoItem } from "../todoItem/TodoItem";
const AppTodo = () => {
    
    const todos = [
      {
        name: "Get out of bed",
        deadline: "Wed Sep 13 2017",
        status: true,
      },
      {
        name: "Brush teeth",
        deadline: "Thu Sep 14 2017",
        status: false,
      },
      {
        name: "Eat breakfast",
        deadline: "Fri Sep 15 2017",
        status: false,
      },
    ];

   

    const TodoList = (props) => {
        console.log(props);

        return (

            <ul>
                {props.todos.map((todo) => {
                    return (
                        <TodoItem
                            name={todo.name}
                            deadline={todo.deadline}
                            status={todo.status}
                        />
                    )
                })};
            </ul>
        );
    };
    
    return (
      <div>
        <h2>My  To-Do List</h2>
        <TodoList todos={todos} />
      </div>
    );
};

export default AppTodo;
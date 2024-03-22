import { TodoItem } from "../todoItem/TodoItem";
import todos from "../todoItem/todos";

function AppTodo () {

  const data = [...todos];
  
  const TodoList = (props) => {

        return (
          <ul>
            {props.todos.map((todo) => {
              return (
                <TodoItem
                  name={todo.name}
                  deadline={todo.deadline}
                  status={todo.status}
                />
              );
            })}
          </ul>
        );
    };
    
    return (
      <div>
        <h2>My To-Do List</h2>
        <TodoList todos={data} />
      </div>
    );
};

export default AppTodo;
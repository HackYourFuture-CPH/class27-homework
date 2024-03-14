import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
    return (
      <ul>
        {props.todos.map((todos) => {
          return <TodoItem key={todos.id} description={todos.description} deadline={todos.deadline} />;
        })}
      </ul>
    );
  }

export default TodoList;
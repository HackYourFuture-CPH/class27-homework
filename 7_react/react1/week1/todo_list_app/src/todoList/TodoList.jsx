import { TodoItem } from "../todoItem/TodoItem";

export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            description={todo.description}
            deadline={todo.deadline}
          />
        );
      })}
    </ul>
  );
};

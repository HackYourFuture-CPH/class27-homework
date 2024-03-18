import TodoItem from "./TodoItem";
import { Todo } from "../App";

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} description={todo.description} deadline={todo.deadline} />
      ))}
    </ul>
  );
}

export default TodoList;

import TodoItem from "./TodoItem";
import { DeleteTodo, Todo } from "../App";


function TodoList({ todos, deleteTodo }: { todos: Todo[] , deleteTodo: DeleteTodo}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} description={todo.description} deadline={todo.deadline} deleteTodo={deleteTodo} todoId={todo.id}/>
      ))}
    </ul>
  );
}

export default TodoList;

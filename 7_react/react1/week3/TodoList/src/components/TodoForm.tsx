import "./todoForm.css";
import { ChangeEvent, useState } from "react";
import { Todo } from "../App";

function TodoForm({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [newTodoItem, setNewTodoItem] = useState<Todo>({
    id: 0,
    description: "",
    deadline: "",
  });

  function generateUniqueId(): number {
    return parseInt(
      Date.now().toString(36) + Math.random().toString(36).substr(2),
      36
    );
  }

  const changeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoItem({ ...newTodoItem, description: e.target.value });
  };
  const changeDeadLineInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoItem({ ...newTodoItem, deadline: e.target.value });
  };

  const addNewTodo = () => {
    setTodos([
      ...todos,
      {
        id: generateUniqueId(),
        description: newTodoItem.description,
        deadline: newTodoItem.deadline,
      },
    ]);
    setNewTodoItem({
      id: 0,
      description: "",
      deadline: "",
    });
  };
  return (
    <div className="form">
      <input
        type="text"
        value={newTodoItem.description}
        onChange={changeTodoInput}
        placeholder="Add todo..."
      ></input>
      <input
        type="text"
        value={newTodoItem.deadline}
        onChange={changeDeadLineInput}
        placeholder="Add deadline..."
      ></input>
      <button type="button" onClick={addNewTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;

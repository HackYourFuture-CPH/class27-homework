import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"; // Import CSS file

const todosData = [
  { id: 1, description: "Attend family meeting", deadline: "Sun Mar 10 2024" },
  { id: 2, description: "Get some groceries", deadline: "Mon Mar 11 2024" },
  { id: 3, description: "Walk my dog", deadline: "Tue Mar 12 2024" },
];

function TodoList() {
  const [todos, setTodos] = useState(todosData);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: todos.length + 1, ...newTodo }]);
  };

  return (
    <div className="todo-list">
      <TodoHeader />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <NewTodoForm addTodo={addTodo} />
      <TodoFooter />
    </div>
  );
}

export default TodoList;

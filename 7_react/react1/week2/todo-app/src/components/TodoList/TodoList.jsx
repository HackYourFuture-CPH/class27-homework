import TodoItem from "../TodoItem/TodoItem";

function TodoList({todos, removeTodo}) {
    return (
        <div className="todo-list">
            <h2>Todo List of Gizem</h2>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                deadline={todo.deadline}
                removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default TodoList; 
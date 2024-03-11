import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
    return (
        <div className="todo-list">
            <h2>Todo List of Gizem</h2>
            {props.todos.map(todo => (
                <TodoItem key={todo.id} task={todo.task} deadline={todo.deadline} />
            ))}
        </div>
    );
}

export default TodoList; 
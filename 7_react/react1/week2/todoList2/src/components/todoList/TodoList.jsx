import React, { useState } from 'react';
import TodoItem from './TodoItem'; 
import BorderComponent from './BorderComponents';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [newTodoDeadline, setNewTodoDeadline] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddTodo = () => {
        if (!newTodoDescription) {
            setErrorMessage('Description cannot be empty.');
            return;
        } else if (!newTodoDeadline) {
            setErrorMessage('Deadline cannot be empty.');
            return;
        } else if (new Date(newTodoDeadline) < new Date()) {
            setErrorMessage('Deadline cannot be in the past.');
            return;
        }

        setErrorMessage('');

        const newTodo = { 
            description: newTodoDescription, 
            deadline: newTodoDeadline, 
            id: Date.now() 
        };
        
        setTodos([...todos, newTodo]);
        setNewTodoDescription('');
        setNewTodoDeadline('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            {errorMessage && <p style={{ color: 'red'}}>{errorMessage}</p>}
            <input
                type="text"
                value={newTodoDescription}
                onChange={(e) => setNewTodoDescription(e.target.value)}
                placeholder='Todo description'
            />
            <input
                type="date"
                value={newTodoDeadline}
                onChange={(e) => setNewTodoDeadline(e.target.value)}
                placeholder="Deadline"
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <BorderComponent key={todo.id}>
                    <TodoItem
                        key={todo.id}
                        description={todo.description}
                        deadline={todo.deadline}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                    </BorderComponent>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

import React, { useState } from 'react'

function AddTodo({addTodo}){
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ description, deadline });
        setDescription("");
        setDeadline("");
    };

    return (
        <form onSubmit={handleSubmit} className='add_todo_form'>
            <input
            placeholder="Add Todo..."
            className='add_todo_input'
            type ="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            placeholder="Deadline..."
            className='add_todo_input'
            type ="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            />
            <button type="submit" className='add_todo_button'>Add</button>
        </form>
    );
};
export default AddTodo


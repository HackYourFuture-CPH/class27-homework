import React, { useState } from 'react'

function AddTodo({addTodo}){
    const [description, setDescription] = useState("");
    function handleSubmit (e) {
        e.preventDefault();
        addTodo({description});
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className='addTodo'>
            <input
            placeholder="Next todo?"
            className='nextTodo'
            type ="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className='addTodoButton'>Add Todo</button>
        </form>
    );
};
export default AddTodo
import { useState } from "react";
import todos from "../todoItem/todos";

const AddTodo = ()=> {
    const [todosList, setTodosList] = useState(todos);
    console.log(todosList);

    const onClickAdd = (e) => {
        e.preventDefault();
        setTodosList(todosList => {
            return [...todosList, { name: 'new todo', date: new Date(), status: false }];
        });
    };
    

    return (
      <form onSubmit={onClickAdd}>
        <button type="submit">Add new todo</button>;
      </form>
    ); 
    
    // <button type='submit'
    //     onClick={onClickAdd()}>Add new todo</button>;
        // return <button >Add new todo</button>;
}

export default AddTodo;
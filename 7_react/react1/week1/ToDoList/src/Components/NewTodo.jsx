
import React from 'react'

function NewTodo(props) {
  return (
    <div>
       <li>
        <h3>
          {props.name} , date = {props.date} 
        </h3>
      </li>
    </div>
  )
}

export default NewTodo

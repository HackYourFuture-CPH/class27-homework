import PropTypes from 'prop-types';
import Task from '../Task/Task';
import Deadline from '../Deadline/Deadline';
import { useState } from 'react';
import './TodoItem.css';
function TodoItem({ todo, removeTodo }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecboxChange = () => {
    setIsChecked(!isChecked);
  }

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div className={`todo-item ${isChecked ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChecboxChange}
      />
      <Task task={todo.task} isChecked={isChecked}/>
      <Deadline deadline={todo.deadline} />
      <button className="remove-button" onClick={handleRemoveClick}>x</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired
  }).isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoItem;

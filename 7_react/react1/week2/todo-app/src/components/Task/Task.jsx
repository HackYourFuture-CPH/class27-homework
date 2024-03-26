function Task({ task, isChecked }) {
    return (
        <div className={`task ${isChecked ? 'completed' : ''}`}>
            <p>Task: {task}</p>
        </div>
    );
}

export default Task;
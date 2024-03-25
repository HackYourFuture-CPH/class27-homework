import Task from "../Task/Task";
import Deadline from "../Deadline/Deadline";

function TodoItem({task, deadline}) {
    return (
        <div className="todo-item">
            <Task task={task} />
            <Deadline deadline={deadline} />
        </div>
    );
}

export default TodoItem;
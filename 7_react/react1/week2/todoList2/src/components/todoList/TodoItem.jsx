import React, {useState} from 'react';
import PropTypes from 'prop-types';

function TodoItem({ description, deadline, onDelete, onSave }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleSave = () => {
        onSave(editedDescription);
        setIsEditing(false);
    };
    return(
        <li>
            {isEditing ? (
                <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
            />
            ) : (
            <>
            {description} | {deadline}
            </>
            )}
            <button onClick={onDelete}>Delete</button>
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </li>
    );
}

TodoItem.propTypes = {
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default TodoItem
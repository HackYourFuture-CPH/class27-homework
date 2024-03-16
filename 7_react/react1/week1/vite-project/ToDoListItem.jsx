import React from 'react';

const ToDoListItem = (props) => {
  return (
    <div>
      Item {props.itemDescription}, {props.itemDeadline}
    </div>
  );
};

export default ToDoListItem;

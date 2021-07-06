import React from 'react';

const ToDoItem = (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.item.text}</p>
    </div>
  )
};

export default ToDoItem;
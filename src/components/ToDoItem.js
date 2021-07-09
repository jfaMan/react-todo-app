import React from 'react';

const ToDoItem = (props) => {
  let textDecoration = props.item.completed ? "line-through" : "none"
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={{ textDecoration: textDecoration }}>{props.item.text}</p>
    </div>
  )
};

export default ToDoItem;
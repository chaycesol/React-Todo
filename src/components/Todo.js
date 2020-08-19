import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleItem(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
      <p>{props.task.id}</p>
      <p>{props.task.completed}</p>
    </div>
  );
};

export default Todo;

import React from "react";

export default function TaskList(props) {
  console.log(props.list);
  return (
    <ul className="list">
      {props.list.map((item) => (
        <li className="task" key={item.id}>
          <p
            onClick={() => props.completeTask(item.id)}
            className={item.isComplete ? "complete" : "notcomplete"}
          >
            {item.text}
          </p>
          <button
            type="button"
            className="btn"
            onClick={() => props.deleteTask(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("the line mustn't be empty");
      return;
    }
    if (task.length > 24) {
      alert("the line mustn't exceed the number of symbols: 12");
      return;
    }
    // console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          type="text"
          placeholder="write the task"
          onChange={(event) => setTask(event.target.value)}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

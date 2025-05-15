import React, { useState } from "react";

const CreateTodo = () => {
  let [tasks, setTask] = useState(0);
  let [text, setText] = useState("");
  let taskList = ["task1", "task2", "task3"];
  const hideButton = false;
  const style = {
    color: "black",
    backgroundColor: "orange",
  };
  const handleClick = () => {
    setTask(tasks + 1);
    // setTask(++tasks);
    console.log("task added");
  };
  const countTask = () => {
    // if (task == 0) {
    //   return "No task available!";
    // }
    // return "Tasks: " + task;
    return tasks === 0 ? "No task available!" : `Tasks: ${task}`;
  };
  function handleChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }
  return (
    <>
      <h1>Tasks: {tasks}</h1>
      <input type="text" onChange={handleChange} />
      <br />
      <p>{text}</p>
      {/* <h1 style={style}>{countTask()}</h1> */}
      <button
        onClick={handleClick}
        className="btn"
        disabled={hideButton}
        value="Add Task Button"
      >
        Add Task
      </button>
      <br />
      <ol>
        {taskList.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ol>
    </>
  );
};

export default CreateTodo;

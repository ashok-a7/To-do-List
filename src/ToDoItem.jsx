import React, { useState } from "react";
import "./App.css";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(!isDone);
  }

  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: isDone ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;

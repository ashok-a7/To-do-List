import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputT, updateInput] = useState("");
  const [items, setItems] = useState([]);

  function updateHandel(event) {
    updateInput(event.target.value);
  }

  function addItems() {
    if (inputT.trim() === "") return;
    setItems((prevItem) => [...prevItem, inputT]);
    updateInput("");
  }

  return (
    <div className="container">
      <div className="head">
        <h1>To-Do List</h1>
      </div>

      <div className="Form">
        <input
          type="text"
          onChange={updateHandel}
          value={inputT}
          placeholder="Add a task"
        />
        <button onClick={addItems}>Add</button>
      </div>

      <div className="list">
        <ul>
          {items.map(function (item, index) {
            return <ToDoItem key={index} text={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

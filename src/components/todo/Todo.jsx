import React, { useState } from "react";
import Tasks from "./Tasks";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";


const Todo = () => {
  const [task, setTask] = useState({ Name: "" });
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.Name.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: uuidv4(), Name: task.Name, Status: "Pending" },
      ]);
      setTask({ Name: "" });
    }
  };

  const handleChange = (e, id) => {
    const newName = e.target.value;
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, Name: newName } : t))
    );
  };

  const handleDelete = (delId) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== delId));
    alert("Deleted Successfully");
  };

  const handleUpdate = (updateId) => {
    alert("Updated Successfully");
  };

  const handleUpperCase = (upperId) => {
    setTodos((prevTodos) =>
      prevTodos.map((task) =>
        task.id === upperId ? { ...task, Name: task.Name.toUpperCase() } : task
      )
    );
  };

  const handleMarkedDone = (doneId) => {
    setTodos((prevTodos) =>
      prevTodos.map((task) =>
        task.id === doneId ? { ...task, Status: "Completed" } : task
      )
    );
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Enter: </label>
        <input
          onChange={(e) => setTask({ Name: e.target.value })}
          type="text"
          name="task"
          value={task.Name}
          id="task"
        />
        <button>Add</button>
      </form>
      <hr /> <br />
      <h4>TASKS</h4>
      <Tasks
        array={todos}
        onDelete={handleDelete}
        onUpperCase={handleUpperCase}
        onMark={handleMarkedDone}
        onUpdate={handleUpdate}
        handleChange={handleChange}
      />
      <br />
    </div>
  );
};

export default Todo;

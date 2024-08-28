import React, { useState } from "react";
import "./Tasks.css";


const Tasks = ({
  array,
  onDelete,
  onUpperCase,
  onMark,
  onUpdate,
  handleChange,
}) => {
  const [editId, setEditId] = useState(null);

  const handleSave = (id) => {
    onUpdate(id);
    setEditId(null);
  };

  return (
    <ul className="taskList">
      {array.map((task) => (
        <li key={task.id} className="taskItem">
          <div className="taskContent">
            {editId === task.id ? (
              <input
                className="taskName"
                onChange={(e) => handleChange(e, task.id)}
                type="text"
                name="task"
                id={`task-${task.id}`}
                value={task.Name}
              />
            ) : (
              <span className="taskName">{task.Name}</span>
            )}
            <span className="taskStatus">
              Status:{" "}
              <span
                className={task.Status === "Pending" ? "pending" : "completed"}
              >
                {task.Status}
              </span>
            </span>
          </div>
          <div className="buttonDiv">
            <button className="delete" onClick={() => onDelete(task.id)}>DELETE</button>
            <button className="upperCase" onClick={() => onUpperCase(task.id)}>CAPITALIZE</button>
            <button className="markAsDone" onClick={() => onMark(task.id)}>DONE</button>
         


            {editId === task.id 
                ? (<button className="save" onClick={() => handleSave(task.id)}>SAVE</button>)
                : (<button className="edit" onClick={() => setEditId(task.id)}>EDIT</button>)
            }
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;

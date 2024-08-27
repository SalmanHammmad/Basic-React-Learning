
import { useState } from "react"
import Tasks from "./Tasks"
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {

const [task, setTask] = useState({})
const [todos, setTodos] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => ([...prevTodos, {id: uuidv4(), Name: task.Name}]))
    setTask({id: '',Name: ''})    
}

const handleChange = (e) => {
    setTask({Name: e.target.value})
}

const handleDelete = (delId) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== delId))
}

  return (
    <div>
      <h3>TODO LIST</h3>
        <form onSubmit={handleSubmit} >
            <label htmlFor="task">Enter: </label>
            <input onChange={handleChange} type="text" name="task" value={task.Name} id="task"/>
            <button>Add</button>
        </form>
        <hr /> <br />
        <h4>Tasks</h4>
        <ol>
            <Tasks array={todos} onDelete={handleDelete} /> 
            <br />
        </ol>

    </div>
  )
}

export default Todo

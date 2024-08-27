
const Tasks= ({array, onDelete }) =>{
    
    return array.map((task) => {
        return (
            <>
            <li key={task.id}>
                <span>{task.Name}</span>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={()=>onDelete(task.id)}>Delete</button>
            </li>
            <br />
            </>
        )
    })
}



export default Tasks

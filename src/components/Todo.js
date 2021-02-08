import React from "react"

const Task = (props) => {
    return (
        <div>
            onClick={()=>toggleTask(props.task.id)}
            className={`task${props.task.completed ? " completed" : ""}`}

            <p>{props.task.name}</p>


        </div>
    )
}

export default Task
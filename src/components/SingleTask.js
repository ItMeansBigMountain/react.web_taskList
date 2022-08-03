import React from 'react'
import { FaTimes } from 'react-icons/fa'



const SingleTask = (props) => {
    return (
        <div>

            {/* EACH TASK */}
            <div className={props.task.reminder == true ? "task reminder" : "task"}
                onDoubleClick={() => props.onToggle(props.task.id)}>
                {/* body of task */}
                <h3>
                    {props.task.text}
                    <FaTimes
                        onClick={() => props.onDelete(props.task.id)}
                        style={{ color: 'red', cursor: 'pointer' }}
                    />
                </h3>
                <p><b>{props.task.day} </b> at <b>{props.task.time}</b></p>
            </div>



        </div>
    )
}

export default SingleTask



import React from 'react'
import SingleTask from './SingleTask'


const Tasks = (props) => {
    return (


        <>
        {/* call SingleTask component for every item in props.task_list */}
        {/* props.task_list is from App.js where we passed in the data models (task dictionaries array) */}
            {props.tasks_list.map(item => (
                <SingleTask key={item.id} task={item} onToggle={props.onToggle} onDelete={props.onDelete}  />
            ))}
        </>


    )
}

export default Tasks

import React from 'react'
import { useState } from 'react'




const AddTask = (props) => {

    // OBJECT STATE
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)


    //date formatting....
    const week = ["Monday" , "Tuesay" , "Wednesday" , "Thursday" , "Friday" , "Satday" , "Sunday" , ]

    const onSubmitForm = (e) => {
        //prevent page reload
        e.preventDefault()

        //prevent empty form
        if (!text) {
            alert("Please Add Task")
            return;
        }

        // update tasks_list and reset form __STATE__
        const name_of_day = week[new Date(day).getDay()]
        console.log(name_of_day)
        setDay(name_of_day)


        

        props.addTaskForm({ text, day, time, reminder })
        setText("")
        setDay("")
        setTime("")
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmitForm}>

            <div className='form-control'>
                <label className='form-control label'>Title</label>
                <input type={"text"} placeholder='...' value={text} onChange={(e) => setText(e.target.value)} className='form-control input'></input>
            </div>

            <div className='form-control'>
                <label className='form-control label'>Day of Week</label>
                <input type={"date"} placeholder='...' value={day} onChange={(e) => setDay(e.target.value)} className='form-control input'></input>
            </div>

            <div className='form-control'>
                <label className='form-control label'>Time</label>
                <input type={"time"} placeholder='...' value={time} onChange={(e) => setTime(e.target.value)} className='form-control input'></input>
            </div>

            <div className='form-control-check'>
                <label className='form-control-check label'>Set Reminder</label>
                <input type={"checkbox"} checked={reminder} placeholder='...' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} className='form-control-check'></input>
            </div>


            <input type="submit" value='Save Task' className='btn btn-block' />

        </form>
    )
}

export default AddTask
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';


import Header from './components/Header';
import DebugButton from './components/DebugButton';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';




// FUNCTION BASED COMPONENT
function App() {

  // SETTING GLOBAL TASK STATE
  const [tasks_list, setTasks] = useState([])
  const [showAddTask, toggleAddTask] = useState(false)


  // ************* SERVER FUNCTIONS *************

  // fetch all tasks from API
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  // fetch http requests ALL TASKS
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks_list")
    const data = await res.json()
    return data
  }
  // fetch http requests SINGLE TASK
  const fetch_Singular_Task = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks_list/${id}`)
    const data = await res.json()
    return data
  }


  // ************* TASK FUNCTIONS *************

  //ADD TASK FUNCTION
  const addTaskForm = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks_list/`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks_list, data])

    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = {
    //   id: id,
    //   ...task
    // }
    // setTasks([...tasks_list, newTask])

  }

  // DELETE TASK FUNCTION
  // delete http requests
  // filter using built in function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks_list/${id}`, { method: 'DELETE' })
    setTasks(tasks_list.filter((item) => item.id !== id))
  }

  // TOGGLE REMINDER FUNCTION
  // for each item check if its the item with our ID parameter
  // if item.ID == Parameter_ID ... item == (everything item was , reminder == opposite)
  // if NOT ... item stays as item
  const toggleReminder = async (id) => {
    const task_to_toggle = await fetch_Singular_Task(id)
    const updated_task = { ...task_to_toggle, reminder: !task_to_toggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks_list/${id}`,
      {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updated_task)
      }
    )
    const data = await res.json()
    setTasks(tasks_list.map((item) => item.id == id ? { ...item, reminder: data.reminder } : item))
  }



  return (
    <Router>
      <div className="App">

        <div className='container'>
          {/* HEADER COMPONENT */}
          <Header onAdd={() => toggleAddTask(!showAddTask)} showAddTask={showAddTask} />
        </div>

        <Routes>
          <Route path='/' element={
            <>
              {/* CONDITIONAL TASK COMPONENT */}
              {showAddTask && <AddTask addTaskForm={addTaskForm} />}
              {tasks_list.length > 0 ?
                <Tasks tasks_list={tasks_list} onToggle={toggleReminder} onDelete={deleteTask} /> : "DONE!!!"}

              {/* FOOTER COMPONENT */}
              <Footer />
            </>
          } />

          <Route path='/about' element={<About />} />
        </Routes>


      </div>
    </Router>

  );
}

















// ========================== CLASS BASED COMPONENT ==========================
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return (
//       <h1> This is the main component in App.js as a class</h1>
//     )
//   }
// }




export default App;

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';


function App() {

  const [showForm, setShowForm] = useState(false)

  const [tasks, setTasks] = useState([])

    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
    getTasks()
  }, [])

  //fetch tasks from json-server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log("data from json-server: ", data);
    return data;
  }


 //Add task
 const addTask = (task) => {
   const id = Math.floor(Math.random() * 10000) +1
   const newTask = { id, ...task }
   setTasks([...tasks, newTask])
 }

 //Delete task
 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
 }

 //Toggle reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id === id
   ? { ...task, reminder: !task.reminder } : task))
 }



  return (
    <div className="container">
        <Header title="Tasks" onAdd={() => setShowForm(!showForm)} showForm={showForm}/>
        {showForm && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 
        'No Tasks To Show'}

    </div>
  );
}

export default App;

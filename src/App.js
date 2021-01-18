import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'Food shopping',
     day: 'Feb 5th at 2:30pm',
     reminder: false,
    }, 
    {
     id: 2,
     text: 'Food eating',
     day: 'Feb 10th at 6:30pm',
     reminder: false,
    }, 
 ])

 //Add task
 const addTask = (task) => {
   console.log("task from Addtask:", task);
 }

 //Delete task
 const deleteTask = (id) => {
   console.log("delete", id);
   setTasks(tasks.filter((task) => task.id !== id))
 }

 //Toggle reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id === id
   ? { ...task, reminder: !task.reminder } : task))
 }



  return (
    <div className="container">
        <Header title="Task Tracker"/>
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 
        'No Tasks To Show'}

    </div>
  );
}

export default App;

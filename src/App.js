import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'Food shopping',
     day: 'Feb 5th at 2:30pm',
     reminder: false,
    }, 
 ])

 //Delete task
 const deleteTask = (id) => {
   console.log("delete", id);
   setTasks(tasks.filter((task) => task.id !== id))
 }



  return (
    <div className="container">
        <Header title="Task Tracker"/>
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask}/> : 
        'No Tasks To Show'}
    </div>
  );
}

export default App;

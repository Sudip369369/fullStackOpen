
import { useState,useEffect } from 'react'
import axios from 'axios'


function App() {

  const [task ,setTask] = useState([])
  const [newTask, setNewTask] = useState('');

  useEffect(()=>{
     axios
     .get('http://localhost:3001/tasks')
     .then(Res =>{
      setTask(Res.data)
      console.log(Res.data)
      console.log(task)
  })
  },[])
 const handleChange = (e)=>{
  setNewTask(e.target.value)
 }

  const addTask =(e)=>{
    e.preventDefault();
    const newTaskObj = {
      
      title: newTask.trim()
 
,
      done: Math.random()<0.5
    }
    axios
    .post('http://localhost:3001/tasks',newTaskObj)
    .then(Res =>{
      setTask(task.concat(Res.data));
      setNewTask('')
    })

  }
  const handleToogle = ()=>{
    

  }

  return (
    <>
<form  onSubmit={addTask}>

      <input type="text"
      onChange={handleChange}

    value={newTask} />
    <button>Add Task</button>
</form>
   <ul>
    {
      task.map((task,index)=>(

        <li key={index}>
          {task.title}
         
        <button 
        onClick={handleToogle}>{task.done?"Done":"Remaining"}</button>
        </li>

      ))
    }
   </ul>
    </>
  )
}

export default App

// import React, { useState } from 'react'

// function App() {

//   const [item  ,setItem] = useState([ ]);
// const [input ,setInput] = useState (' ');


// const handleChange = (event) =>{
//      setInput(event.target.value)
// }


// const handleClick = ()=>{
//   if(input.trim() !== '')
//     setItem([...item ,input.trim()])
//   setInput('');
// }

//   const submit = (event 
//   )=>{
//     event.preventDefault(); 

//   }
//   return (
//     <div>
//   <form onSubmit={submit}>

//   <input type="text"
//    onChange={handleChange}
//   />
//  <button type='submit' 
//  onClick={ handleClick}>Add</button>
//   </form>
// <ul>
//   {
//     item.map((item,index)=>
    
//     <li key={index} > {item} </li>
//     )
//   }
// </ul>
//     </div>
//   )
// }

// export default App

import axios from 'axios'
import { useState,useEffect } from 'react'

function App() {
 
  const [note,setNote] = useState([]);
   
  const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNote(response.data)
    })
}
useEffect(hook,[])

  return (
    <>
    
    <ul>

      {
        note.map((note,index) => (

          <li key={index}>
             {note.content}
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default App
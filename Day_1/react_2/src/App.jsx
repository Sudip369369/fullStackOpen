// import React, { useState } from 'react'

// function App() {
   
//   const [inputValue, setInputValue] = useState('');

//   const [items, setItems] = useState([ ]);

//    const handleInputChange = (event)=>{
//    setInputValue(event.target.value);
//    }
//   const handleClick = ()=>{

//    if(inputValue.trim() !== '')
//     setItems([...items, inputValue])
// setInputValue('') ;
//     console.log(`${inputValue}`);
//   }
  

//   const handleRemove = ()=>{
//      setItems(items.slice(0,-1));
//   console.log(items)
//   }

// //   const handleRemove = (indexToRemove) => {
// //   setItems(items.filter((_, index) => index !== indexToRemove));
// // };

//   return (
// <>

// <div> 
// <input type="text"
// value={inputValue} // do check 
// placeholder='Add Items Here'
// onChange={handleInputChange}


// />
//   <button 
//     style={{

//     margin: '10px',
//     border: '2px solid crimson',
//     borderRadius: "10px"

//   }}

//   onClick={handleClick}> Add  </button>

//   <button 
//   style={{

//     margin: '10px',
//     border: '2px solid crimson',
//     borderRadius: "10px"

//   }}
//   onClick={handleRemove}> Remove </button>
// </div>
//  <div>
//   <h1> Items List</h1>
//   <ul>
// {
//  items.map((items,index) =>(
//   <li key={index}>{items}</li>
//  ))

// }

//   </ul>
//  </div>

// </>
//   )
// }

// export default App
// import History from './History'
// import { useState } from "react"



// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'));
//     setRight(right + 1);
//   };

//   return (
//      <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };

// export default App;





import { useState } from "react";
import Button from "./Button";

function App() {
  const [value, setValue ] = useState(10);
  
//  const handleEvent = (who) =>  () => console.log("Hello", who);

 const handleEvent  = (arg) => () => {
  setValue(arg);
 }


  return (
     <>
 <h1> {value} </h1>
    
     <Button  onClick = {handleEvent(100)}  text = "set 100" /> 
     <Button  onClick = {handleEvent(100)}  text = "set 200" /> 
  

     </>
  )
}

export default App


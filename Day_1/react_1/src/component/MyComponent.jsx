import React from 'react'
import Greetings from './Greeting';

function MyComponent() {

const time = new Date();

  return (
    <div> 
      {/* <h1>{time.toString()}</h1> */}
      <h2>This is my component</h2>
 <Greetings/>

   </div>
  )
}

export default MyComponent
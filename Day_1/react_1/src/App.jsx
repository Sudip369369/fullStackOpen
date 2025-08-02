
// // import './App.css'

// import EmpDetails from './component/EmpDetails'
// import Greetings from './component/Greeting'
// import MyComponent from './component/MyComponent'
// import UserCard from './component/UserCard'


// export const App = () => {
//   return (
//     <div 
  
//     >
     
// {/* 
//       <MyComponent/>
//     */}
//      {/* <EmpDetails
//      Name = "Sudip"
//      Address = "Traffic Chowk"
//      />
//       */}

// {/* 
//       <UserCard
//        name = "sudip"
//        age = '20'
//        isMember = {true}
   
      
      
//       />

//       <UserCard
//        name = "sudip"
//        age = '20'
//        isMember = {true}
   
      
      
//       />

//       <UserCard
//        name = "sudip"
//        age = '20'
//        isMember = {true}
   
      
      
//       /> */}

//     </div>
//   )
// }

import React from 'react'

const course = {
  name: 'Half Stack application development',
  parts: [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
};

// ✅ Helper function to calculate total exercises
function getTotalExercises(parts) {
  return parts.reduce((sum, part) => sum + part.exercises, 0);
}

function Course({ course }) {
  // ✅ Destructure course object
  const { name, parts } = course;

  return (
    <div>
      <h1>{name}</h1>

      {/* ✅ Loop through parts and destructure each one */}
      {parts.map((part, index) => {
        const { name, exercises } = part;
        return (
          <p key={index}>
            {name} — {exercises} exercises
          </p>
        );
      })}

      {/* ✅ Use helper function */}
      <p><strong>Total exercises: {getTotalExercises(parts)}</strong></p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Course course={course} />
    </div>
  );
}

export default App;

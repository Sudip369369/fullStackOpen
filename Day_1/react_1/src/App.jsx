
// import './App.css'

import EmpDetails from './component/EmpDetails'
import Greetings from './component/Greeting'
import MyComponent from './component/MyComponent'
import UserCard from './component/UserCard'


export const App = () => {
  return (
    <div 
  
    >
     
{/* 
      <MyComponent/>
    */}
     {/* <EmpDetails
     Name = "Sudip"
     Address = "Traffic Chowk"
     />
      */}


      <UserCard
       name = "sudip"
       age = '20'
       isMember = {true}
   
      
      
      />

      <UserCard
       name = "sudip"
       age = '20'
       isMember = {true}
   
      
      
      />

      <UserCard
       name = "sudip"
       age = '20'
       isMember = {true}
   
      
      
      />
    </div>
  )
}


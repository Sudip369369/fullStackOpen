import React from 'react'

const Login = () => {
  return (
 <>
 <h1 
 className='text-2xl font-semibold mx-10 '>Login</h1>
<div className='pl-10'>
   username: <input
   className='border-2 rounded-2xl m-2 p-1'
   type="text" placeholder='type your userName'/> <br/>
   password: <input 
    className='border-2 rounded-2xl m-2 p-1' type='text'  placeholder='password here'/>
<div>  <button 
className='bg-gray-300 rounded p-0.8 border-2 w-18'>login</button></div>
</div>
 
 </>
  )
}

export default Login
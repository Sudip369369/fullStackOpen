
import React from 'react'
import Note from './Note';

function App() {

   const notes = [
    { id: 1, content: 'Learn React', important: true },
    { id: 2, content: 'Master JavaScript', important: false },
    { id: 3, content: 'Build Projects', important: true },
  ];


  return (
<> <Note Notes={notes}/> </>
  )
}

export default App

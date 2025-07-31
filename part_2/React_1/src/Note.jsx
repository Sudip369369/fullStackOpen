import { useState } from "react"




function Note({Notes}) {

const [myNotes, setMyNotes] = useState(Notes);


const handleEvent = (id) =>{

    setMyNotes ( myNotes.map(note=> 

      note.id === id? {...note,important : !note.important}:note
    ))

}

  return (

    <div>

      <h1
      style={{
        margin: '50px',
        padding: '10px'
      }}
      >My Notes </h1>
        <ul
        style={{listStyle:"none",
        }}
        >
{        myNotes.map(note=>(

  <li 
    style={{

      margin:'10px',
      padding: '10px',
      border:'dotted black 1px',
        color: note.important ? 'red' : 'black',
          fontWeight: note.important ? 'bold' : 'normal',
    }}
  
  
  key={note.id }> {note.content} <button

  onClick={()=> handleEvent(note.id)}

     style={{
      border: 'solid black 2px',
      borderRadius: '5px',
     }}
  >Toogle Importance</button></li>
))}

        </ul>



    </div>
  )
}

export default Note
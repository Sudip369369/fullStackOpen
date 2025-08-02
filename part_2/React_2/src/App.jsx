import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Fetch notes on mount
  useEffect(() => {
    axios.get("http://localhost:3001/notes")
      .then(response => {
        setNotes(response.data);
      });
  }, []);

  // Add a new note
  const addNote = (e) => {
    e.preventDefault();
    const newObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    axios.post("http://localhost:3001/notes", newObject)
      .then(response => {
        setNotes(notes.concat(response.data));
        setNewNote("");
      });
  };

  // Update note importance
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios.put(url, changedNote)
      .then(response => {
        setNotes(notes.map(n => n.id !== id ? n : response.data));
      });
  };

  // Input change handler
  const handleOnchange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={handleOnchange}
        />
        <button>Add Note</button>
      </form>

      <ul>
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default App;

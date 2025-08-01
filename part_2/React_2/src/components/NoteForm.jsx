
import React from 'react';

function NoteForm({ newNote, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        value={newNote}
        onChange={handleChange}
        placeholder="Write your note here..."
        style={{ padding: '8px', width: '300px' }}
      />
      <button type="submit" disabled={!newNote.trim()} style={{ marginLeft: '10px' }}>
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;

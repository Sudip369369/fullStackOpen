

import React from 'react';

function Note({ note, onToggle, onDelete }) {
  return (
    <li
      style={{
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: note.important ? '#ffe0e0' : '#f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span>{note.content}</span>
      <div>
        <button onClick={() => onToggle(note.id)}>
          {note.important ? 'Unmark' : 'Mark Important'}
        </button>
        <button onClick={() => onDelete(note.id)} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Note;

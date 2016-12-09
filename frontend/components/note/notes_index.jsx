import React from 'react';
import { Link } from 'react-router';

const NotesIndex = ({ notes, selectNote, router }) => {
  if (!notes) {
    notes = {};
  }

  const preview = (note) => {
    return (
      <div>
        <h2>{ note.title }</h2>
        <p>{ note.body.slice(0, 100) }</p>
      </div>
    );
  };

  const noteList = [];

  for (let id in notes) {
    noteList.push(
      <li key={ id }>
        <Link to={"/notes/" + id}>{ preview(notes[id]) }</Link>
      </li>
    );
  }

  return (
    <div>
      <ul>
        { noteList }
      </ul>
    </div>
  );
};

export default NotesIndex;

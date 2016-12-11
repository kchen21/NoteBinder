import React from 'react';
import { Link } from 'react-router';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render() {
    const notes = this.props.notes || {};
    const noteList = [];

    const preview = (note) => {
      return (
        <div>
          <h2>{ note.title }</h2>
          <p>{ note.body.slice(0, 140) }</p>
        </div>
      );
    };

    for (let id in notes) {
      noteList.push(
        <li className="notes-index-item" key={ id }>
          <Link to={ "/notes/" + id }>{ preview(notes[id]) }</Link>
        </li>
      );
    }

    return (
      <div className="group">
        <section className="notes-index">
          <section className="notes-index-header">
            <h1>NOTES</h1>
            <p>{ noteList.length + " Notes" }</p>
          </section>
          <section className="notes-index-main">
            <ul>
              { noteList }
            </ul>
          </section>
        </section>
        <section className="notes-index-child">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default NotesIndex;

import React from 'react';
import { Link } from 'react-router';

class NotebookNotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes(); // Covers page refreshing
    this.props.fetchAllNotebooks(); // Covers page refreshing
    this.props.fetchIdsOfCurrentNotebookNotes();
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
      if (this.props.idsOfCurrentNotebookNotes[id]) {
        noteList.push(
          <li className="notes-index-item" key={ id }>
            <Link to={ "/notebooks/" + this.props.notebookId + "/notes/" + id }>{ preview(notes[id]) }</Link>
          </li>
        );
      }
    }

    return (
      <div className="group">
        <section className="notes-index">
          <section className="notes-index-header">
            <h1>{ this.props.currentNotebook.title }</h1>
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

export default NotebookNotesIndex;

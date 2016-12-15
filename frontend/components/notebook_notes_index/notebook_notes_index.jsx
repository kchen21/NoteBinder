import React from 'react';
import { Link } from 'react-router';

class NotebookNotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
    this.props.fetchAllNotebooks(); // Covers page refreshing
    this.props.fetchAllTags();
  }

  render() {
    const notes = this.props.notes || {};
    const noteList = [];

    const modifyBodyText = (bodyText) => {
      if (bodyText.length > 111) {
        return bodyText.slice(0, 111) + "...";
      } else {
        return bodyText;
      }
    };

    const preview = (note) => {
      return (
        <div className="notes-index-item">
          <h2>{ note.title }</h2>
          <p>{ modifyBodyText(jQuery(note.body).text()) }</p>
        </div>
      );
    };

    for (let id in notes) {
      if (this.props.currentNotebook.note_ids[id]) {
        noteList.push(
          <li className="notes-index-item-wrapper" key={ id }>
            <Link to={ "/notebooks/" + this.props.notebookId + "/notes/" + id }>
              { preview(notes[id]) }
            </Link>
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
        <section className="notes-index-children">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default NotebookNotesIndex;

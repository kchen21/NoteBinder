import React from 'react';
import { Link } from 'react-router';
import * as IndexFunctions from '../../helper_functions/index_functions';
import formatDate from '../../helper_functions/format_date';

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
    const currentNotebookNoteIds = this.props.currentNotebook.note_ids;
    const currentNotebookNoteList = [];

    let currentNotebookNotes = IndexFunctions.idsObjToNotesArr(notes, currentNotebookNoteIds);
    currentNotebookNotes = IndexFunctions.mergeSortNotes(currentNotebookNotes);

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
          <p>Last Updated: { formatDate(note.updated_at) }</p>
          <p>{ modifyBodyText(jQuery(note.body).text()) }</p>
        </div>
      );
    };

    for (let i = 0; i < currentNotebookNotes.length; i++) {
      let note = currentNotebookNotes[i];
      currentNotebookNoteList.push(
        <li className="notes-index-item-wrapper" key={ note.id }>
          <Link to={ "/notebooks/" + this.props.notebookId + "/notes/" + note.id }>
            { preview(note) }
          </Link>
        </li>
      );
    }

    return (
      <div>
        <section className="notes-index">
          <section className="notes-index-header">
            <h1>{ this.props.currentNotebook.title }</h1>
            <p>{ currentNotebookNoteList.length + " Notes" }</p>
          </section>
          <section className="notes-index-main">
            <ul>
              { currentNotebookNoteList }
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

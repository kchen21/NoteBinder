import React from 'react';
import { Link } from 'react-router';
import * as IndexFunctions from '../../helper_functions/index_functions';
import formatDate from '../../helper_functions/format_date';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
    this.props.fetchAllNotebooks();
    this.props.fetchAllTags();
  }

  render() {
    let notes = this.props.notes || {};
    const noteList = [];

    notes = IndexFunctions.notesObjToArr(notes);
    notes = IndexFunctions.mergeSortNotes(notes);

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

    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      noteList.push(
        <li className="notes-index-item-wrapper" key={ note.id }>
          <Link to={ "/notes/" + note.id }>
            { preview(note) }
          </Link>
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
        <section className="notes-index-children">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default NotesIndex;

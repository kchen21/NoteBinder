import React from 'react';
import { Link } from 'react-router';
import * as IndexFunctions from '../../helper_functions/index_functions';
import formatDate from '../../helper_functions/format_date';

class TaggedNotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
    this.props.fetchAllNotebooks();
    this.props.fetchAllTags();
  }

  render() {
    const notes = this.props.notes || {};
    const currentTagNoteIds = this.props.currentTag.note_ids;
    const currentTagNoteList = [];

    let currentTagNotes = IndexFunctions.idsObjToNotesArr(notes, currentTagNoteIds);
    currentTagNotes = IndexFunctions.mergeSortNotes(currentTagNotes);

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

    for (let i = 0; i < currentTagNotes.length; i++) {
      let note = currentTagNotes[i];
      currentTagNoteList.push(
        <li className="notes-index-item-wrapper" key={ note.id }>
          <Link to={ "/tags/" + this.props.tagId + "/notes/" + note.id }>
            { preview(note) }
          </Link>
        </li>
      );
    }

    return (
      <div>
        <section className="notes-index">
          <section className="notes-index-header">
            <h1>{ this.props.currentTag.name }</h1>
            <p>{ currentTagNoteList.length + " Notes" }</p>
          </section>
          <section className="notes-index-main">
            <ul>
              { currentTagNoteList }
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

export default TaggedNotesIndex;

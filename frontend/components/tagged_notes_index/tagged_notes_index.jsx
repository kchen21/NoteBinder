import React from 'react';
import { Link } from 'react-router';

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
      if (this.props.currentTag.note_ids[id]) {
        noteList.push(
          <li className="notes-index-item-wrapper" key={ id }>
            <Link to={ "/tags/" + this.props.tagId + "/notes/" + id }>
              <div className="notes-index-item">
                { preview(notes[id]) }
              </div>
            </Link>
          </li>
        );
      }
    }

    return (
      <div className="group">
        <section className="notes-index">
          <section className="notes-index-header">
            <h1>{ this.props.currentTag.name }</h1>
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

export default TaggedNotesIndex;

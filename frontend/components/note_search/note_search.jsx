import React from 'react';
import { Link } from 'react-router';
import * as IndexFunctions from '../../helper_functions/index_functions';
import formatDate from '../../helper_functions/format_date';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      searchNoteIds: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.fetchAllNotes();
      this.props.fetchAllNotebooks();
      this.props.fetchAllTags();
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchNoteSearchResults(this.state.searchString).then(() => {
      this.setState({ searchNoteIds: this.props.searchNoteIds });
    });
  }

  render() {
    const searchForm = () => {
      return (
        <form className="note-search-form" onSubmit={ this.handleSubmit }>
          <input
            className="note-search-input-field"
            type="text"
            onChange={ this.handleChange("searchString") }
            value={ this.state.searchString }
          />
          <input className="note-search-submit-button" type="submit" value="Search" />
        </form>
      );
    };

    const notes = this.props.notes;
    const searchNoteIds = this.props.searchNoteIds;
    const searchNoteList = [];

    let searchNotes = IndexFunctions.idsObjToNotesArr(notes, searchNoteIds);
    searchNotes = IndexFunctions.mergeSortNotes(searchNotes);

    const modifyBodyText = (bodyText) => {
      if (bodyText.length > 111) {
        return bodyText.slice(0, 111) + "...";
      } else {
        return bodyText;
      }
    };

    const preview = (note) => {
      return (
        <div className="search-notes-index-item">
          <h2>{ note.title }</h2>
          <p>Last Updated: { formatDate(note.updated_at) }</p>
          <p>{ modifyBodyText(jQuery(note.body).text()) }</p>
        </div>
      );
    };

    for (let i = 0; i < searchNotes.length; i++) {
      let note = searchNotes[i];
      searchNoteList.push(
        <li className="search-notes-index-item-wrapper" key={ note.id }>
          <Link to={ "/note-search/" + note.id }>
            { preview(note) }
          </Link>
        </li>
      );
    }

    return (
      <div>
        <section className="search-notes-index">
          <section className="search-notes-index-header">
            <h1>NOTE SEARCH</h1>
            { searchForm() }
            <p>{ searchNoteList.length + " Notes"}</p>
          </section>
          <section className="search-notes-index-main">
            <ul>
              { searchNoteList }
            </ul>
          </section>
        </section>
        <section className="search-notes-index-children">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default NoteSearch;

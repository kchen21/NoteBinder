import React from 'react';

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
        <form className="note-search-form">
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

    const searchNoteList = [];

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
          <p>{ modifyBodyText(jQuery(note.body).text()) }</p>
        </div>
      );
    };

    for (let id in this.state.searchNoteIds) {
      let note = this.state.notes[id];
      searchNoteList.push(
        <li className="search-notes-index-item-wrapper" key={ id }>
          <Link to={ "/note-search/" + id }>
            { preview(note) }
          </Link>
        </li>
      );
    }

    return (
      <div className="group">
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

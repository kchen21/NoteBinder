import React from 'react';
import NotesHeader from './notes_header';
import NotesIndex from './notes_index';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentNote.title,
      body: this.props.currentNote.body,
      notebook_id: this.props.currentNote.notebook_id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    note.id = this.props.currentNote.id;
    this.props.updateNote(note);
  }

  render() {
    return (
        <div>
          <NotesHeader />
          <NotesIndex />
          <section className="note">
            <form onSubmit={ this.handleSubmit }>
              <label htmlFor="note-title"></label>
              <input
                id="note-title"
                type="text"
                onChange={ this.handleChange("title") }
                value={this.state.title}>
              </input>
              <label htmlFor="note-body"></label>
              <input
                id="note-body"
                type="text"
                onChange={ this.handleChange("body") }
                value={ this.state.body }>
              </input>
              <label htmlFor="note-notebook_id"></label>
              <input
                id="note-notebook_id"
                type="text"
                onChange={ this.handleChange("notebook_id") }
                value={ this.state.notebook_id }>
              </input>
              <input type="submit" value="Save"></input>
            </form>
          </section>
        </div>
    );
  }
}

export default Note;

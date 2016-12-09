import React from 'react';
import NotesHeader from './notes_header';
import NotesIndex from './notes_index';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromProps();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getStateFromProps() {
    return {
      title: this.props.currentNote.title,
      body: this.props.currentNote.body,
      notebook_id: this.props.currentNote.notebook_id
    };
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.fetchAllNotes();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.noteId !== newProps.params.noteId) {
      this.setState(this.getStateFromProps());
    }
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
          <NotesHeader notes={this.props.notes} />
          <NotesIndex notes={this.props.notes} selectNote={ this.props.selectNote } />
          <section className="note">
            <h1>Update Note</h1>
            <form onSubmit={ this.handleSubmit }>
              <div className="note-form-input">
                <label htmlFor="note-title">Title</label>
                <input
                  id="note-title"
                  type="text"
                  onChange={ this.handleChange("title") }
                  value={this.state.title}
                />
              </div>

              <div className="note-form-input">
                <label htmlFor="note-title">Body</label>
                <label htmlFor="note-body"></label>
                <textarea
                  id="note-body"
                  type="text"
                  onChange={ this.handleChange("body") }
                  value={ this.state.body }>
                </textarea>
              </div>

              <div className="note-form-input">
                <label htmlFor="note-notebook_id">Notebook ID</label>
                <input
                  id="note-notebook_id"
                  type="text"
                  onChange={ this.handleChange("notebook_id") }
                  value={ this.state.notebook_id }
                />
              </div>

              <input type="submit" value="Save" />
            </form>
          </section>
        </div>
    );
  }
}

export default Note;

import React from 'react';

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
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    // Covers two cases: changing noteId and refreshing the page
    if (this.props.params.noteId !== newProps.params.noteId || Object.keys(this.props.notes).length === 0) {
      this.setState({
        title: newProps.currentNote.title,
        body: newProps.currentNote.body,
        notebook_id: newProps.currentNote.notebook_id
      });
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
        <div className="note">
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
        </div>
    );
  }
}

export default Note;

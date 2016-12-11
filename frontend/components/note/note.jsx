import React from 'react';
import { withRouter } from 'react-router';

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
    this.handleTrash = this.handleTrash.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUpdate() {
    if (this.props.path !== arguments[0].path) {
      this.props.clearErrors();
    }
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

  handleTrash(e) {
    e.preventDefault();
    this.props.destroyNote(this.props.currentNote.id).then(() => {
      this.props.router.push('/notes');
    });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className="note-error" key={ index }>{ error }</li>;
    });

    return (
        <div className="note group">
          <h1>Update Note</h1>
          <img className="note-trash-icon" onClick={ this.handleTrash } src={ window.assets.trash } />
          <ul>
            { errors }
          </ul>
          <form className="group" onSubmit={ this.handleSubmit }>
            <div className="note-form-input">
              <label htmlFor="note-notebook_id">Notebook ID</label>
              <input
                className="note-notebook_id-input-field"
                id="note-notebook_id"
                type="text"
                onChange={ this.handleChange("notebook_id") }
                value={ this.state.notebook_id }
              />
            </div>

            <div className="note-form-input">
              <label htmlFor="note-title">Title</label>
              <input
                className="note-title-input-field"
                id="note-title"
                type="text"
                onChange={ this.handleChange("title") }
                value={this.state.title}
              />
            </div>

            <div className="note-form-input">
              <label htmlFor="note-body">Body</label>
              <textarea
                id="note-body"
                type="text"
                onChange={ this.handleChange("body") }
                value={ this.state.body }>
              </textarea>
            </div>

            <input className="note-submit-button" type="submit" value="Save" />
          </form>
        </div>
    );
  }
}

export default Note;

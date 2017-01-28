import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactQuill from 'react-quill';
import Tags from './tags';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentNote.title,
      body: this.props.currentNote.body,
      notebook_id: this.props.currentNote.notebook_id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleNotebookChange = this.handleNotebookChange.bind(this);
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
    // Covers two cases: changing noteId and page refreshing
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

  handleBodyChange(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    note.id = this.props.currentNote.id;
    this.props.updateNote(note).then(() => {
      if (this.props.path === `/notes/${note.id}`) {
        return;
      } else {
        this.props.router.push(`/notebooks/${note.notebook_id}/notes/${note.id}`);
      }
    });
  }

  handleTrashClick(e) {
    e.preventDefault();

    const currentNoteId = this.props.currentNote.id;
    const confirmation = confirm("Delete this note?");

    if (confirmation === true) {
      const path = this.props.path.split("/");
      switch (path[1]) {
        case "notes":
          this.props.destroyNote(currentNoteId).then(() => {
            this.props.router.push('/notes');
          });
          break;
        case "notebooks":
          const currentNotebookId = path[2];
          this.props.removeNoteIdFromNotebook(currentNotebookId, currentNoteId);
          this.props.destroyNote(currentNoteId).then(() => {
            this.props.router.push(`/notebooks/${currentNotebookId}/notes`);
          });
          break;
        case "tags":
          const currentTagId = path[2];
          this.props.removeNoteIdFromTag(currentTagId, currentNoteId);
          this.props.destroyNote(currentNoteId).then(() => {
            this.props.router.push(`/tags/${path[2]}/notes`);
          });
          break;
        case "note-search":
          this.props.router.push('/note-search');
          break;
        default:
          throw new Error("Invalid pathname");
      }
    } else {
      return;
    }
  }

  handleNotebookChange(e) {
    this.setState({ notebook_id: e.target.value });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className="note-error" key={ index }>{ error }</li>;
    });

    const notebookSelectOptions = [];

    for (let id in this.props.notebooks) {
      notebookSelectOptions.push(
        <option key={id} value={id}>{ this.props.notebooks[id].title }</option>
      );
    }

    const pathElements = [];

    const oldPath = this.props.path.split("/");

    for (let i = 0; i < oldPath.length; i++) {
      if (oldPath[i] !== 'new-tag') {
        pathElements.push(oldPath[i]);
      }
    }

    return (
        <div className="note">
          <h1>UPDATE NOTE</h1>
          <div className="floated-elements group">
            <div className="note-new-tag-icon">
              <Link to={ pathElements.join("/") + "/new-tag" }>
                <img src={ window.assets.new_tag } />
              </Link>
            </div>
            <Tags currentNote={ this.props.currentNote } tags={ this.props.tags } />
            <img className="note-trash-icon" onClick={ this.handleTrashClick } src={ window.assets.trash } />
          </div>
          <section className="note-children">
            { this.props.children }
          </section>
          <ul>
            { errors }
          </ul>
          <form className="note-form group" onSubmit={ this.handleSubmit }>
            <div className="note-form-select">
              <label htmlFor="note-notebook">Notebook</label>
              <select value={ this.state.notebook_id } onChange={ this.handleNotebookChange } id="note-notebook">
                { notebookSelectOptions }
              </select>
            </div>

            <div className="note-form-input">
              <label htmlFor="note-title">Title</label>
              <input
                className="note-title-input-field"
                id="note-title"
                type="text"
                onChange={ this.handleChange("title") }
                value={ this.state.title }
              />
            </div>

            <div className="note-form-input">
              <label htmlFor="note-body">Body</label>
              <ReactQuill
                className="note-body"
                id="note-body"
                onChange={ this.handleBodyChange }
                value={ this.state.body }
                theme="snow"
              />
            </div>

            <input className="note-submit-button" type="submit" value="Save" />
          </form>
        </div>
    );
  }
}

export default Note;

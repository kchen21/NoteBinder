import React from 'react';
import { Link, withRouter } from 'react-router';
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
    this.props.destroyNote(this.props.currentNote.id).then(() => {
      this.props.router.push('/notes');
    });
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
        <div className="note group">
          <h1>UPDATE NOTE</h1>
          <div className="note-new-tag-icon">
            <Link to={ pathElements.join("/") + "/new-tag" }>
              <img src={ window.assets.new_tag } />
            </Link>
          </div>
          <Tags currentNote={ this.props.currentNote } tags={ this.props.tags } />
          <img className="note-trash-icon" onClick={ this.handleTrashClick } src={ window.assets.trash } />
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

            <h2>Rich Text Editing</h2>

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

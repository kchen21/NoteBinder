import React from 'react';

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      notebook_id: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNotebookChange = this.handleNotebookChange.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUpdate(newProps) {
    if (this.props.path !== arguments[0].path) {
      this.props.clearErrors();
    }

    if (!this.state.notebook_id) {
      this.state.notebook_id = Object.keys(newProps.notebooks)[0];
    }
  }

  componentWillReceiveProps(newProps) {
    // Covers page refreshing
    if (Object.keys(this.props.notebooks).length === 0) {
      this.setState({
        notebook_id: Object.keys(newProps.notebooks)[0]
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
    debugger
    this.props.createNote(note).then((newNote) => {
      this.props.router.push(`/notes/${newNote.id}`);
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

    return (
      <div className="note">
        <h1>New Note</h1>
        <ul>
          { errors }
        </ul>
        <form className="group" onSubmit={this.handleSubmit}>
          <div className="note-form-select">
            <label htmlFor="note-notebook">Notebook</label>
            <select value={ this.state.notebook_id } onChange={ this.handleNotebookChange } id="note-notebook">
              { notebookSelectOptions }
            </select>
          </div>

          <div className="note-form-input">
            <label htmlFor="new-note-title">Title</label>
            <input
              className="note-title-input-field"
              id="new-note-title"
              type="text"
              onChange={ this.handleChange("title") }
              value={ this.state.title }
            />
          </div>

          <div className="note-form-input">
            <label htmlFor="new-note-body">Body</label>
            <textarea
              id="new-note-body"
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

export default NewNote;

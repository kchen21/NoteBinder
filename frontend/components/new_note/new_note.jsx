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
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    this.props.createNote(note).then((newNote) => {
      this.props.router.push(`/notes/${newNote.id}`);
    });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className ="new-note-error" key={ index }>{ error }</li>;
    });

    return (
      <div>
        <h1>New Note</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="new-note-form-input">
            <label htmlFor="new-note-title">Title</label>
            <input
              id="new-note-title"
              type="text"
              onChange={ this.handleChange("title") }
              value={ this.state.title }
            />
          </div>

          <div className="new-note-form-input">
            <label htmlFor="new-note-body">Body</label>
            <textarea
              id="new-note-body"
              onChange={ this.handleChange("body") }
              value={ this.state.body }>
            </textarea>
          </div>

          <div className="new-note-form-input">
            <label htmlFor="new-note-notebook_id">Notebook ID</label>
            <input
              id="new-note-notebook_id"
              type="text"
              onChange={ this.handleChange("notebook_id") }
              value={ this.state.notebook_id }
            />
          </div>

          <input type="submit" value="Save" />
        </form>
        <ul>
          { errors }
        </ul>
      </div>
    );
  }
}

export default NewNote;

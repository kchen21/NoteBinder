import React from 'react';

class NotebookUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentNotebook.title,
      description: this.props.currentNotebook.description || "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
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
    // Covers two cases: changing notebookId and page refreshing
    if (this.props.params.notebookId !== newProps.params.notebookId || Object.keys(this.props.notebooks).length === 0) {
      this.setState({
        title: newProps.currentNotebook.title,
        description: newProps.currentNotebook.description || "",
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
    const notebook = Object.assign({}, this.state);
    notebook.id = this.props.currentNotebook.id;
    this.props.updateNotebook(notebook);
  }

  handleTrashClick(e) {
    e.preventDefault();
    this.props.destroyNotebook(this.props.currentNotebook.id).then(() => {
      this.props.router.push('/notebooks');
    });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className="notebook-error" key={ index }>{ error }</li>;
    });

    return (
      <div className="notebook group">
        <h1>Update Notebook</h1>
        <img className="notebook-trash-icon" onClick={ this.handleTrashClick } src={ window.assets.trash } />
        <ul>
          { errors }
        </ul>
        <form className="notebook-form group" onSubmit={this.handleSubmit}>
          <h2>Rich Text Editing</h2>
          
          <div className="notebook-form-input">
            <label htmlFor="new-notebook-title">Title</label>
            <input
              className="notebook-title-input-field"
              id="new-notebook-title"
              type="text"
              onChange={ this.handleChange("title") }
              value={ this.state.title }
            />
          </div>

          <div className="note-form-input">
            <label htmlFor="new-notebook-description">Description</label>
            <textarea
              id="new-notebook-description"
              onChange={ this.handleChange("description") }
              value={ this.state.description }>
            </textarea>
          </div>

          <input className="notebook-submit-button" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default NotebookUpdate;

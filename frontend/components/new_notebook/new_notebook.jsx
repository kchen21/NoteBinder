import React from 'react';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUpdate() {
    if (this.props.path !== arguments[0].path) {
      this.props.clearErrors();
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
    this.props.createNotebook(notebook).then((newNotebook) => {
      this.props.router.push(`/notebooks/${newNotebook.id}`);
    });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className="notebook-error" key={ index }>{ error }</li>;
    });

    return (
      <div className="notebook">
        <h1>New Notebook</h1>
        <ul>
          { errors }
        </ul>
        <form className="group" onSubmit={this.handleSubmit}>
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

export default NewNotebook;

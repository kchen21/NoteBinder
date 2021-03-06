import React from 'react';

class NewTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name) {
      const tag = Object.assign({}, this.state);
      this.props.createTag(this.props.noteId, tag).then((oldOrNewTag) => {
        if (this.props.path === '/tags/new') {
          this.props.router.push('/tags');
        } else {
          const pathElements = this.props.path.split("/");
          const newPathElements = pathElements.slice(0, pathElements.length - 1);
          this.props.fetchAllNotes();
          this.props.router.push(newPathElements.join("/"));
        }
      });
    }
  }

  showQuote() {
    if (this.props.path === '/tags/new') {
      return (
        <div className="quote">
          <p className="question">{ "AND WHAT, YOU ASK, DOES WRITING TEACH US?" }</p>
          <p className ="answer">{ "FIRST AND FOREMOST, IT REMINDS US THAT WE ARE ALIVE AND THAT IT IS A GIFT AND A PRIVILEGE, NOT A RIGHT." }</p>
          <p className="author">{ "- RAY BRADBURY" }</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="tag">
        <img src={ window.assets.tags } />
        <h1>CREATE TAG</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="tag-form-input">
            <label htmlFor="new-tag-name"></label>
            <input
              className="tag-name-input-field"
              id="new-tag-name"
              type="text"
              onChange={ this.handleChange("name") }
              value={ this.state.name }
            />
          </div>

          <input className="tag-submit-button" type="submit" value="Save" />
        </form>
        { this.showQuote() }
      </div>
    );
  }
}

export default NewTag;

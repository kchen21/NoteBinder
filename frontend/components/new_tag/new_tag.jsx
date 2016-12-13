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
    const tag = Object.assign({}, this.state);
    this.props.createTag(tag).then((oldOrNewTag) => {
      this.props.router.push('/tags');
    });
  }

  render() {
    return (
      <div className="tag">
        <h1>New Tag</h1>
        <form className="group" onSubmit={this.handleSubmit}>
          <div className="tag-form-input">
            <label htmlFor="new-tag-name">Name</label>
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
      </div>
    );
  }
}

export default NewTag;

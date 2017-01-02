import React from 'react';
import { withRouter } from 'react-router';

class AccountUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: this.props.currentUser.full_name,
      email: this.props.currentUser.email,
      avatarFile: null,
      avatarUrl: null
    };

    this.getProps = this.getProps.bind(this);
    this.getState = this.getState.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  getProps() {
    return this.props;
  }

  getState() {
    return this.state;
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ avatarFile: file, avatarUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("user[full_name]", this.getState().full_name);
    formData.append("user[email]", this.getState().email);
    formData.append("id", this.getProps().currentUser.id);

    if (this.state.avatarFile) {
      formData.append("user[avatar]", this.getState().avatarFile);
    }

    this.props.updateUser(formData).then(() => {
      this.props.router.push('/notes/new');
    });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className="account-update-form-error" key={ index }>{ error }</li>;
    });

    return (
      <div className="account-update">
        <img className="account-update-logo" src={ window.assets.logo } />
        <h1>Update Account</h1>
        <section className="account-update-form">
          <form>
            <img className="avatar-preview" src={ this.state.avatarUrl } />

            <div className="update-avatar">
              <label htmlFor="update-avatar">Avatar</label>
              <input id="avatar-upload" type="file" onChange={ this.updateFile } />
            </div>

            <div className="update-full-name">
              <label htmlFor="update-full-name">Full Name</label>
              <input
                id="update-full-name"
                type="text"
                onChange={ this.handleChange("full_name") }
                value={ this.state.full_name }
              />
            </div>

            <div className="update-email">
            <label htmlFor="update-email">Email</label>
              <input
                id="update-email"
                type="text"
                onChange={ this.handleChange("email") }
                value={ this.state.email }
              />
            </div>

            <button className="account-update-submit-button" onClick={ this.handleSubmit }>Save</button>
          </form>
          <ul>{ errors }</ul>
        </section>
        <section className="account-update-children">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default withRouter(AccountUpdate);

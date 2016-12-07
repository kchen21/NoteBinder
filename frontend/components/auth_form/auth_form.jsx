import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInGuest = this.signInGuest.bind(this);
  }

  componentWillUpdate() {
    if (this.props.path !== arguments[0].location.pathname) {
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
    const user = Object.assign({}, this.state);

    if (this.props.path === "/sign-up") {
      this.props.signUp(user).then(() => {
        this.props.router.push('/');
      });
    } else if (this.props.path === "/sign-in") {
      this.props.signIn(user).then(() => {
        this.props.router.push('/');
      });
    }
  }

  signInGuest(e) {
    e.preventDefault();
    const user = {
      full_name: "",
      email: "",
      username: "Guest",
      password: "123456"
    };

    this.props.signIn(user).then(() => {
      this.props.router.push('/');
    });
  }

  render() {
    let header;
    let form;
    let footer;
    const logo = <img className="logo" src={window.assets.logo} />;
    const errors = this.props.errors.map((error, index) => {
      return <li className="form-error" key={index}>{error}</li>;
    });

    if (this.props.path === "/sign-up") {
      header = [
        <li key="0">
          { logo }
        </li>,
        <li key="1">
          <h1>Sign Up</h1>
        </li>
      ];
      form = [
        <li key="0">
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="sign-up-full-name">Full Name</label>
              <input id="sign-up-full-name"
                type="text"
                onChange={this.handleChange("full_name")}
                value={this.state.full_name}>
              </input>
            </div>

            <div className="form-input">
              <label htmlFor="sign-up-email">Email</label>
              <input id="sign-up-email"
                type="text"
                onChange={this.handleChange("email")}
                value={this.state.email}>
              </input>
            </div>

            <div className="form-input">
              <label htmlFor="sign-up-username">Create a Username</label>
              <input id="sign-up-username"
                type="text"
                onChange={this.handleChange("username")}
                value={this.state.username}>
              </input>
            </div>

            <div className="form-input">
              <label htmlFor="sign-up-password">Create a Password</label>
              <input id="sign-up-password"
                type="password"
                onChange={this.handleChange("password")}
                value={this.state.password}>
              </input>
            </div>

            <input className="submit-button" type="submit" value="Create Account"></input>
          </form>
      </li>
      ];
      footer = [
        <li key="0">
          <button className="guest-button" onClick={this.signInGuest}>Sign In As Guest</button>
        </li>,
        <li key="1">
          <p>{"Have an account?"}</p>
        </li>,
        <li key="2">
          <Link className="page-change" to="/sign-in">Sign In</Link>
        </li>
      ];
    } else if (this.props.path === "/sign-in") {
      header = [
        <li key="0">
          { logo }
        </li>,
        <li key="1">
          <h1>Sign In</h1>
        </li>
      ];
      form = [
        <li key="0">
          <form className="sign-in-form" onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="sign-in_username">Username</label>
              <input id="sign-in_username"
                type="text"
                onChange={this.handleChange("username")}
                value={this.state.username}>
              </input>
            </div>

            <div className="form-input">
              <label htmlFor="sign-in-password">Password</label>
              <input id="sign-in-password"
                type="password"
                onChange={this.handleChange("password")}
                value={this.state.password}>
              </input>
            </div>

            <input className="submit-button" type="submit" value="Sign In"></input>
          </form>
        </li>
      ];
      footer = [
        <li key="0">
          <p>{"Don't have an account?"}</p>
        </li>,
        <li key="1">
          <Link className="page-change" to="/sign-up">Create Account</Link>
        </li>
      ];
    }

    return (
      <div className="auth-form">
        <section className="form-header">
          <ul>
            { header }
          </ul>
        </section>
        <section className="form-main">
          <ul>
            { form }
            { errors }
          </ul>
        </section>
        <section className="form-footer">
          <ul>
            { footer }
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(AuthForm);

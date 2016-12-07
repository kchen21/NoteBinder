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
    const errors = this.props.errors.map((error, index) => {
      return <li key={index}>{error}</li>;
    });

    if (this.props.path === "/sign-up") {
      header = [
        <h1 key="0">Sign Up</h1>,
        <Link key="1" to="/sign-in">Sign In</Link>,
        <button key="2" onClick={this.signInGuest}>Sign In As Guest</button>
      ];
      form = [
        <form key="0" onSubmit={this.handleSubmit}>
          <label>Full Name
            <input type="text" onChange={this.handleChange("full_name")}
              value={this.state.full_name}></input>
          </label>

          <label>Email
            <input type="text" onChange={this.handleChange("email")}
              value={this.state.email}></input>
          </label>

          <label>Create a Username
            <input type="text" onChange={this.handleChange("username")}
              value={this.state.username}></input>
          </label>

          <label>Create a Password
            <input type="password" onChange={this.handleChange("password")}
              value={this.state.password}></input>
          </label>

          <input type="submit" value="Create Account"></input>
        </form>
      ];
    } else if (this.props.path === "/sign-in") {
      header = [
        <h1 key="0">Sign In</h1>,
        <Link key="1" to="/sign-up">Sign Up</Link>
      ];
      form = [
        <form key="0" onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.handleChange("username")}
              value={this.state.username}></input>
          </label>

          <label>Password
            <input type="password" onChange={this.handleChange("password")}
              value={this.state.password}></input>
          </label>

          <input type="submit" value="Sign In"></input>
        </form>
      ];
    }

    return (
      <div>
        { header }
        { form }
        { errors }
      </div>
    );
  }
}

export default withRouter(AuthForm);

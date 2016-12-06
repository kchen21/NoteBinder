import React from 'react';
import { Link } from 'react-router';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logOut();
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default LogoutButton;

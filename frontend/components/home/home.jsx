import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logOut().then(() => {
      this.props.router.push('/sign-in');
    });
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

export default withRouter(Home);

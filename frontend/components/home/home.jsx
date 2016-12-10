import React from 'react';
import { Link, withRouter } from 'react-router';
import Sidebar from './sidebar';

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
    return (
      <div className="home group">
        <Sidebar />
        <section className="home-main group">
          <button className="logout-button" onClick={ this.handleLogout }>Log Out</button>
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default withRouter(Home);

// Bootstrapping assures that currentUser exists before /home can be accessed.

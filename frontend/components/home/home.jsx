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
    let fullName;

    if (this.props.currentUser) {
      fullName = this.props.currentUser.full_name;
    } else {
      fullName = "Anonymous";
    }

    return (
      <div className="home">
        <Sidebar currentUser={ this.props.currentUser } />
        <section className="home-main">
          <section className="account-items group">
            <p>{ "Welcome, " + fullName + "!" }</p>
            <Link to="/account/update">Update Account</Link>
            <button className="logout-button" onClick={ this.handleLogout }>Log Out</button>
          </section>
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default withRouter(Home);

// Bootstrapping assures that currentUser exists before /home can be accessed.

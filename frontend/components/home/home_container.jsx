import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

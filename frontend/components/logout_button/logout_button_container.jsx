import { connect } from 'react-redux';
import { signIn, logOut, signUp } from '../../actions/session_actions';
import LogoutButton from './logout_button';

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
)(LogoutButton);

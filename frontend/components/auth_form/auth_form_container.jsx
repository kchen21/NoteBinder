import { connect } from 'react_redux';
import { signIn, logOut, signUp } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => dispatch(signIn(user)),
    signUp: (user) => dispatch(signUp(user)),
    path: ownProps.location.pathname // will be either "/sign-up" or "/sign-in"
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);

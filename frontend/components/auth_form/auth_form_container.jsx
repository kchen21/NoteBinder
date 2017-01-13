import { connect } from 'react-redux';
import { signIn, signUp, clearErrors } from '../../actions/session_actions';
import { createNotebook } from '../../actions/notebook_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => dispatch(signIn(user)),
    signUp: (user) => dispatch(signUp(user)),
    path: ownProps.location.pathname, // will be either "/sign-up" or "/sign-in"
    clearErrors: () => dispatch(clearErrors()),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)) // for creating a "First Notebook" for a new user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);

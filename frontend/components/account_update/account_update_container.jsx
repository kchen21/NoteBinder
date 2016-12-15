import { connect } from 'react-redux';
import { updateUser, clearErrors } from '../../actions/session_actions';
import AccountUpdate from './account_update';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountUpdate);

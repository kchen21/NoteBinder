import { connect } from 'react-redux';
import { createNotebook, clearErrors } from '../../actions/notebook_actions';
import NewNotebook from './new_notebook';

const mapStateToProps = (state) => {
  return {
    errors: state.notebookData.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNotebook);

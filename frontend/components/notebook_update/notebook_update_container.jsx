import { connect } from 'react-redux';
import { updateNotebook, destroyNotebook, clearErrors } from '../../actions/notebook_actions';
import NotebookUpdate from './notebook_update';

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.notebookData.notebooks,
    notebookId: ownProps.params.notebookId,
    currentNotebook: state.notebookData.notebooks[ownProps.params.notebookId] || {},
    errors: state.notebookData.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    destroyNotebook: (id) => dispatch(destroyNotebook(id)),
    path: ownProps.location.pathname,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookUpdate);

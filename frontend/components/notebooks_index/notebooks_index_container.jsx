import { connect } from 'react-redux';
import { fetchAllNotebooks, destroyNotebook } from '../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebookData.notebooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    destroyNotebook: (id) => dispatch(destroyNotebook(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);

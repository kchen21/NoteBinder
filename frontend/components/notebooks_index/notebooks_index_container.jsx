import { connect } from 'react-redux';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebookData.notebooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);

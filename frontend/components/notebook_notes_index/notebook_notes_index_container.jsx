import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import NotebookNotesIndex from './notebook_notes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    notebookId: ownProps.params.notebookId,
    currentNotebook: state.notebookData.notebooks[ownProps.params.notebookId] || {},
    notes: state.noteData.notes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookNotesIndex);

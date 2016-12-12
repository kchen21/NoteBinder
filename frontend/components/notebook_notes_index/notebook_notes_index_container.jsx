import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks, fetchIdsOfCurrentNotebookNotes } from '../../actions/notebook_actions';
import NotebookNotesIndex from './notebook_notes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    notebookId: ownProps.params.notebookId,
    currentNotebook: state.notebookData.notebooks[ownProps.params.notebookId] || {},
    notes: state.noteData.notes,
    idsOfCurrentNotebookNotes: state.notebookData.idsOfCurrentNotebookNotes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchIdsOfCurrentNotebookNotes: () => dispatch(fetchIdsOfCurrentNotebookNotes(ownProps.params.notebookId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookNotesIndex);

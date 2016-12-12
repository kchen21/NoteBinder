import { connect } from 'react-redux';
import { updateNote, destroyNote, clearErrors } from '../../actions/note_actions';

import Note from './note';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.noteData.notes,
    noteId: ownProps.params.noteId,
    currentNote: state.noteData.notes[ownProps.params.noteId] || {},
    errors: state.noteData.errors,
    notebooks: state.notebookData.notebooks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNote: (note) => dispatch(updateNote(note)),
    destroyNote: (id) => dispatch(destroyNote(id)),
    path: ownProps.location.pathname,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

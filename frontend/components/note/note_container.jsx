import { connect } from 'react-redux';
import { updateNote, destroyNote, clearErrors } from '../../actions/note_actions';

import Note from './note';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.noteData.notes,
    noteId: ownProps.params.noteId,
    currentNote: state.noteData.notes[ownProps.params.noteId] || {},
    path: ownProps.location.pathname,
    errors: state.noteData.errors,
    notebooks: state.notebookData.notebooks,
    tags: state.tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (note) => dispatch(updateNote(note)),
    destroyNote: (id) => dispatch(destroyNote(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

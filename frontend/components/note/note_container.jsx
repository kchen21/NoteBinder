import { connect } from 'react-redux';
import { updateNote, destroyNote, clearErrors } from '../../actions/note_actions';
import Note from './note';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.noteData.notes,
    currentNote: state.noteData.notes[ownProps.params.noteId] || {},
    errors: state.noteData.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (note) => dispatch(updateNote(note)),
    destroyNote: (note) => dispatch(destroyNote(note)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

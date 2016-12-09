import { connect } from 'react-redux';
import { fetchAllNotes, createNote, selectNote, updateNote, destroyNote, clearErrors } from '../../actions/note_actions';
import Note from './note';

const mapStateToProps = (state) => {
  return {
    notes: state.noteData.notes,
    currentNote: state.noteData.currentNote,
    errors: state.noteData.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    createNote: (note) => dispatch(createNote(note)),
    selectNote: (id) => dispatch(selectNote(id)),
    updateNote: (note) => dispatch(updateNote(note)),
    destroyNote: (note) => dispatch(destroyNote(note)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

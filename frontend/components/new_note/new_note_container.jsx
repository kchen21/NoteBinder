import { connect } from 'react-redux';
import { createNote, clearErrors } from '../../actions/note_actions';
import NewNote from './new_note';

const mapStateToProps = (state) => {
  return {
    errors: state.noteData.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);

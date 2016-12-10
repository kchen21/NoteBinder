import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state) => {
  return {
    notes: state.noteData.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);

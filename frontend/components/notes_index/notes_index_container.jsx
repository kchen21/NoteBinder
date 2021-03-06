import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllTags } from '../../actions/tag_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state) => {
  return {
    notes: state.noteData.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);

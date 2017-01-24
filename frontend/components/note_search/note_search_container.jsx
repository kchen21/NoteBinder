import { connect } from 'react-redux';
import { fetchNoteSearchResults } from '../../actions/note_actions';

import NoteSearch from './note_search';

const mapStateToProps = (state) => {
  return {
    notes: state.noteData.notes,
    searchNoteIds: state.noteData.searchNoteIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNoteSearchResults: (searchString) => dispatch(fetchNoteSearchResults(searchString))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteSearch);

import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllTags } from '../../actions/tag_actions';
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
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchAllTags: () => dispatch(fetchAllTags()),
    fetchNoteSearchResults: (searchString) => dispatch(fetchNoteSearchResults(searchString))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteSearch);

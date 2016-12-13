import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllTags } from '../../actions/tag_actions';
import TaggedNotesIndex from './tagged_notes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    tagId: ownProps.params.tagId,
    currentTag: state.tags[ownProps.params.notebookId] || {},
    notes: state.noteData.notes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaggedNotesIndex);

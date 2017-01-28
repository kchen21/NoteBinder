import { connect } from 'react-redux';
import { updateNote, destroyNote, clearErrors } from '../../actions/note_actions';
import { removeNoteIdFromNotebook } from '../../actions/notebook_actions';
import { removeNoteIdFromTag } from '../../actions/tag_actions';

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
    clearErrors: () => dispatch(clearErrors()),
    removeNoteIdFromNotebook: (notebookId, noteId) => dispatch(removeNoteIdFromNotebook(notebookId, noteId)),
    removeNoteIdFromTag: (tagId, noteId) => dispatch(removeNoteIdFromTag(tagId, noteId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

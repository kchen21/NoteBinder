import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions';
import { createTag } from '../../actions/tag_actions';
import NewTag from './new_tag';

const mapStateToProps = (state, ownProps) => {
  return {
    noteId: ownProps.params.noteId || 'noId', // will be 'noId' if the path is /tags/new
    path: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTag: (id, tag) => dispatch(createTag(id, tag)),
    fetchAllNotes: () => dispatch(fetchAllNotes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTag);

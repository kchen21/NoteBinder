import { connect } from 'react-redux';
import { fetchAllTags, destroyTag } from '../../actions/tag_actions';
import TagsIndex from './tags_index';

const mapStateToProps = (state) => {
  return {
    tags: state.tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags:() => dispatch(fetchAllTags()),
    destroyTag: (id) => dispatch(destroyTag(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);

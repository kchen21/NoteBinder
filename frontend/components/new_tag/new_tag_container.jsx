import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import NewTag from './new_tag';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTag: (tag) => dispatch(createTag(tag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTag);

import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ConfirmDeleteModalStyle from '../../custom_modal_styles/confirm_delete_modal_style';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDeleteModalOpen: false,
      idOfTagToDestroy: null
    };

    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.onConfirmDeleteModalClose = this.onConfirmDeleteModalClose.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  handleTrashClick(id) {
    this.setState({
      confirmDeleteModalOpen: true,
      idOfTagToDestroy: id
    });
  }

  onConfirmDeleteModalOpen() {
    ConfirmDeleteModalStyle.content.opacity = 100;
  }

  onConfirmDeleteModalClose() {
    this.setState({
      confirmDeleteModalOpen: false,
      idOfTagToDestroy: null
    });
    ConfirmDeleteModalStyle.content.opacity = 0;
  }

  deleteTag(e) {
    e.preventDefault();

    this.props.destroyTag(this.state.idOfTagToDestroy).then(() => {
      this.props.router.push('/tags');
    });

    this.setState({ confirmDeleteModalOpen: false });
  }

  render() {
    const tags = this.props.tags || {};
    const tagList = [];

    const tagsOrTag = () => {
      if (tagList.length === 1) {
        return "Tag";
      } else {
        return "Tags";
      }
    };

    for (let id in tags) {
      tagList.push(
        <li className="tags-index-tag-wrapper group" key={ id }>
          <div className="tags-index-tag">
            <Link to={ "/tags/" + id + "/notes" }>
                { tags[id].name }
                <div className="tags-index-tag-note-count">
                  { Object.keys(tags[id].note_ids).length }
                </div>
            </Link>
          </div>
          <img className="tag-trash-icon" onClick={ () => this.handleTrashClick(id) } src={ window.assets.trash } />
        </li>
      );
    }

    return (
      <div>
        <section className="tags-index">
          <section className="tags-index-header">
            <h1>TAGS</h1>
            <div className="new-tag-icon">
              <Link to="/tags/new">
                <img src={ window.assets.new_tag } />
              </Link>
            </div>
            <p>{ tagList.length + " " + tagsOrTag() }</p>
          </section>
          <section className="notebooks-index-main">
            <ul>
              { tagList }
            </ul>
          </section>
        </section>
        <section className="tags-index-children">
          { this.props.children }
        </section>

        <Modal
          isOpen={this.state.confirmDeleteModalOpen}
          onAfterOpen={this.onConfirmDeleteModalOpen}
          onRequestClose={this.onConfirmDeleteModalClose}
          style={ConfirmDeleteModalStyle}
          contentLabel="Confirm Delete Modal">

          <p className="modal-message">Delete this tag?</p>
          <section className="modal-buttons group">
            <button className="modal-button" onClick={this.onConfirmDeleteModalClose}>Cancel</button>
            <button className="modal-button" onClick={this.deleteTag}>OK</button>
          </section>
        </Modal>
      </div>
    );
  }
}

export default TagsIndex;

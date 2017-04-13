import React from 'react';
import Modal from 'react-modal';
import ConfirmDeleteModalStyle from '../../custom_modal_styles/confirm_delete_modal_style';

class NotebookUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentNotebook.title,
      description: this.props.currentNotebook.description || "",
      confirmDeleteModalOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.onConfirmDeleteModalClose = this.onConfirmDeleteModalClose.bind(this);
    this.deleteNotebook = this.deleteNotebook.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUpdate() {
    if (this.props.path !== arguments[0].path) {
      this.props.clearErrors();
    }
  }

  componentWillReceiveProps(newProps) {
    // Covers two cases: changing notebookId and page refreshing
    if (this.props.params.notebookId !== newProps.params.notebookId || Object.keys(this.props.notebooks).length === 0) {
      this.setState({
        title: newProps.currentNotebook.title,
        description: newProps.currentNotebook.description || "",
      });
    }
  }

  handleChange(prop) {
    return (e) => {
      return this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = Object.assign({}, this.state);
    notebook.id = this.props.currentNotebook.id;
    this.props.updateNotebook(notebook);
  }

  handleTrashClick(e) {
    e.preventDefault();

    this.setState({ confirmDeleteModalOpen: true });
  }

  onConfirmDeleteModalOpen() {
    ConfirmDeleteModalStyle.content.opacity = 100;
  }

  onConfirmDeleteModalClose() {
    this.setState({ confirmDeleteModalOpen: false });
    ConfirmDeleteModalStyle.content.opacity = 0;
  }

  deleteNotebook(e) {
    e.preventDefault();

    this.props.destroyNotebook(this.props.currentNotebook.id).then(() => {
      this.props.router.push('/notebooks');
    });
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return <li className="notebook-error" key={ index }>{ error }</li>;
    });

    return (
      <div className="notebook">
        <h1>UPDATE NOTEBOOK</h1>
        <img className="notebook-trash-icon" onClick={ this.handleTrashClick } src={ window.assets.trash } />
        <p>Warning: Deleting a notebook will delete all of its notes as well.</p>
        <ul>
          { errors }
        </ul>
        <form className="notebook-form group" onSubmit={this.handleSubmit}>
          <div className="notebook-form-input">
            <label htmlFor="new-notebook-title">Title</label>
            <input
              className="notebook-title-input-field"
              id="new-notebook-title"
              type="text"
              onChange={ this.handleChange("title") }
              value={ this.state.title }
            />
          </div>

          <div className="notebook-form-input">
            <label htmlFor="new-notebook-description">Description</label>
            <textarea
              id="new-notebook-description"
              onChange={ this.handleChange("description") }
              value={ this.state.description }>
            </textarea>
          </div>

          <input className="notebook-submit-button" type="submit" value="Save" />
        </form>

        <Modal
          isOpen={this.state.confirmDeleteModalOpen}
          onAfterOpen={this.onConfirmDeleteModalOpen}
          onRequestClose={this.onConfirmDeleteModalClose}
          style={ConfirmDeleteModalStyle}
          contentLabel="Confirm Delete Modal">

          <p className="modal-message">Delete this notebook?</p>
          <section className="modal-buttons group">
            <button className="modal-button" onClick={this.onConfirmDeleteModalClose}>Cancel</button>
            <button className="modal-button" onClick={this.deleteNotebook}>OK</button>
          </section>
        </Modal>
      </div>
    );
  }
}

export default NotebookUpdate;

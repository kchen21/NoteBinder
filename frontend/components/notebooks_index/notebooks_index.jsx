import React from 'react';
import { Link } from 'react-router';

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks || {};
    const notebookList = [];

    const notebooksOrNotebook = () => {
      if (notebookList.length === 1) {
        return "Notebook";
      } else {
        return "Notebooks";
      }
    };

    const preview = (notebook) => {
      return (
        <div className="notebooks-index-item">
          <Link className="notebook-update-link" to={"/notebooks/update/" + notebook.id }>
            <img className="edit-notebook-icon" src={ window.assets.edit_notebook } />
          </Link>
          <h2 className="title">{ notebook.title }</h2>
          <p>
            { Object.keys(notebook.note_ids).length + " Notes" }
          </p>
          <p className="description">{ notebook.description.slice(0, 111) }</p>
        </div>
      );
    };

    for (let id in notebooks) {
      notebookList.push(
        <li className="notebooks-index-item-wrapper" key={ id }>
          <Link to={ "/notebooks/" + id + "/notes" }>
            { preview(notebooks[id]) }
          </Link>
        </li>
      );
    }

    return (
      <div>
        <section className="notebooks-index">
          <section className="notebooks-index-header">
            <h1>NOTEBOOKS</h1>
            <div className="new-notebook-icon">
              <Link to="/notebooks/new">
                <img src={ window.assets.new_notebook } />
              </Link>
            </div>
            <p>{ notebookList.length + " " + notebooksOrNotebook() }</p>
          </section>
          <section className="notebooks-index-main">
            <ul>
              { notebookList }
            </ul>
          </section>
        </section>
        <section className="notebooks-index-children">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default NotebooksIndex;

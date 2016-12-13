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

    const preview = (notebook) => {
      return (
        <div>
          <h2>{ notebook.title }</h2>
          <p>
            { Object.keys(notebook.note_ids).length + " Notes" }
            <Link className="notebook-update-link" to={"/notebooks/update/" + notebook.id }>Update Notebook Details</Link>
          </p>
          <p>{ notebook.description.slice(0, 70) }</p>
        </div>
      );
    };

    for (let id in notebooks) {
      notebookList.push(
        <li className="notebooks-index-item-wrapper" key={ id }>
          <Link to={ "/notebooks/" + id + "/notes" }>
            <div className="notebooks-index-item">
              { preview(notebooks[id]) }
            </div>
          </Link>
        </li>
      );
    }

    return (
      <div className="group">
        <section className="notebooks-index">
          <section className="notebooks-index-header group">
            <div className="notebooks-index-header-text">
              <h1>NOTEBOOKS</h1>
              <p>{ notebookList.length + " Notebooks" }</p>
            </div>
            <div className="new-notebook-icon">
              <Link to="/notebooks/new">
                <img src={ window.assets.new_notebook } />
              </Link>
            </div>
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

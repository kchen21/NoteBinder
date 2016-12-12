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
          <p>{ notebook.num_of_notes + " Notes" }</p>
          <p>{ notebook.description }</p>
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
          <section className="notebooks-index-header">
            <h1>NOTEBOOKS</h1>
            <p>{ notebookList.length + " Notebooks" }</p>
          </section>
          <section className="notebooks-index-main">
            <ul>
              { notebookList }
            </ul>
          </section>
        </section>
        <section className="notebooks-index-child">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default NotebooksIndex;

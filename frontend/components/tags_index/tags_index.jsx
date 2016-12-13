import React from 'react';
import { Link } from 'react-router';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  render() {
    const tags = this.props.tags;
    const tagList = [];

    for (let id in tags) {
      tagList.push(
        <li className="tags-index-tag-wrapper" key={ id }>
          <Link to={ "/tags/" + id + "/notes" }>
            <div className="tags-index-tag">
              { tags[id].name }
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
        <section className="notebooks-index-child">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default TagsIndex;

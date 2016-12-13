import React from 'react';
import { Link } from 'react-router';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleTrashClick = this.handleTrashClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  handleTrashClick(id) {
    this.props.destroyTag(id).then(() => {
      this.props.router.push('/tags');
    });
  }

  render() {
    const tags = this.props.tags || {};
    const tagList = [];

    for (let id in tags) {
      tagList.push(
        <li className="tags-index-tag-wrapper" key={ id }>
          <Link to={ "/tags/" + id + "/notes" }>
            <div className="tags-index-tag">
              { tags[id].name }
            </div>
          </Link>
          <img className="tag-trash-icon" onClick={ () => this.handleTrashClick(id) } src={ window.assets.trash } />
        </li>
      );
    }

    return (
      <div className="group">
        <section className="tags-index">
          <section className="tags-index-header group">
            <div className="tags-index-header-text">
              <h1>TAGS</h1>
              <p>{ tagList.length + " Tags" }</p>
            </div>
            <div className="new-tag-icon">
              <Link to="/tags/new">
                <img src={ window.assets.new_tag } />
              </Link>
            </div>
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
      </div>
    );
  }
}

export default TagsIndex;

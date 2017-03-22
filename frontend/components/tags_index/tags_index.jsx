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
    const confirmation = confirm("Delete this tag?");

    if (confirmation === true) {
      this.props.destroyTag(id).then(() => {
        this.props.router.push('/tags');
      });
    } else {
      return;
    }
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
      </div>
    );
  }
}

export default TagsIndex;

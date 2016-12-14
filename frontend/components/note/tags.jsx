import React from 'react';
import { Link } from 'react-router';

const Tags = ({ currentNote, tags }) => {
  currentNote.tag_ids = currentNote.tag_ids || {};
  const tagList = [];

  for (let id in tags) {
    if (currentNote.tag_ids[id]) {
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
  }

  return (
    <div className="note-tags">
      <ul class="group">
        { tagList }
      </ul>
    </div>
  );
};

export default Tags;

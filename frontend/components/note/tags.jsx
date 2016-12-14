import React from 'react';
import { Link } from 'react-router';

const Tags = ({ currentNote, tags }) => {
  currentNote.tag_ids = currentNote.tag_ids || {};
  const tagList = [];

  for (let id in tags) {
    if (currentNote.tag_ids[id]) {
      tagList.push(
        <li className="note-tags-index-tag-wrapper" key={ id }>
          <div className="note-tags-index-tag">
            <Link to={ "/tags/" + id + "/notes" }>
                { tags[id].name }
            </Link>
          </div>
        </li>
      );
    }
  }

  return (
    <div className="note-tags">
      <ul className="group">
        { tagList }
      </ul>
    </div>
  );
};

export default Tags;

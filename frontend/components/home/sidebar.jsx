import React from 'react';
import { Link } from 'react-router';

const Sidebar = ({ currentUser }) => {
  let avatarUrl;

  if (currentUser) {
    avatarUrl = currentUser.avatar_url;
  } else {
    avatarUrl = "";
  }

  return (
    <div className="home-sidebar">
      <Link className="sidebar-avatar" to="/account/update">
        <img src={ avatarUrl } />
      </Link>

      <ul className="sidebar-tools">
        <li>
          <Link className="sidebar-tool" to="/notes/new">
            <img src={ window.assets.new_note } />
          </Link>
        </li>

        <li>
          <Link className="sidebar-tool" to="/note-search">
            <img src={ window.assets.search } />
          </Link>
        </li>
      </ul>

      <ul className="sidebar-options">
        <li>
          <Link className="sidebar-option" to="/notes">
            <img src={ window.assets.notes } />
          </Link>
        </li>

        <li>
          <Link className="sidebar-option" to="/notebooks">
            <img src={ window.assets.notebooks } />
          </Link>
        </li>

        <li>
          <Link className="sidebar-option" to="/tags">
            <img src={ window.assets.tags } />
          </Link>
        </li>
      </ul>

      <ul className="sidebar-links">
          <li>
            <a className="sidebar-link" href="http://www.kennethchen.info">
              <img src={ window.assets.portfolio } />
            </a>
          </li>

          <li>
            <a className="sidebar-link" href="https://github.com/kchen21/NoteBinder">
              <img src={ window.assets.github } />
            </a>
          </li>

          <li>
            <a className="sidebar-link" href="https://www.linkedin.com/in/kchen21">
              <img src={ window.assets.linkedin } />
            </a>
          </li>
      </ul>
    </div>
  );
};

export default Sidebar;

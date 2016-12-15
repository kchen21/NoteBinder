import React from 'react';
import { Link } from 'react-router';

const Sidebar = ({ currentUser }) => {
  return (
    <div className="home-sidebar">
      <img className="sidebar-avatar" src={ currentUser.avatar_url } />

      <ul className="sidebar-tools">
        <li>
          <Link className="sidebar-tool" to="/notes/new">
            <img src={ window.assets.new_note } />
          </Link>
        </li>

        <li>
          <Link className="sidebar-tool" to="/search">
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
    </div>
  );
};

export default Sidebar;

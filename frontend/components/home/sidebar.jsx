import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <div>
      <img className="sidebar-logo" src={window.assets.logo} />

      <ul>
        <Link className="sidebar-tool" to="/new-note">
          <img src={window.assets.new_note} />
        </Link>

        <Link className="sidebar-tool" to="/search">
          <img src={window.assets.search} />
        </Link>
      </ul>

      <ul>
        <Link className="sidebar-option" to="/">
          <img src={window.assets.notes} />
        </Link>

        <Link className="sidebar-option" to="/">
          <img src={window.assets.notebooks} />
        </Link>

        <Link className="sidebar-option" to="/">
          <img src={window.assets.tags} />
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

// I should make this a class so that I can get props I need from
// Home in order to get the note, notebook, and tag IDs.

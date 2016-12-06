import React from 'react';
import LogoutButtonContainer from './logout_button/logout_button_container';

const App = ({ children }) => (
  <div>
    <h1>NoteBinder</h1>
    <LogoutButtonContainer />
    { children }
  </div>
);

export default App;

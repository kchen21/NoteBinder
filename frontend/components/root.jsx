import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';

const Root = ({ store }) => {
  const redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/sign-in" onEnter={ redirectIfLoggedIn }
            component={ AuthFormContainer } />
          <Route path="/sign-up" onEnter={ redirectIfLoggedIn }
            component={ AuthFormContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import AuthFormContainer from './auth_form/auth_form_container';

const Root = ({ store }) => {
  const redirectIfSignedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/home');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/home" component= { HomeContainer }></Route>
          <Route path="/sign-in" onEnter={ redirectIfSignedIn }
            component={ AuthFormContainer } />
          <Route path="/sign-up" onEnter={ redirectIfSignedIn }
            component={ AuthFormContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

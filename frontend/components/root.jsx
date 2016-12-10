import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomeContainer from './home/home_container';
import NotesIndexContainer from './notes_index/notes_index_container';
import NewNoteContainer from './new_note/new_note_container';
import NoteContainer from './note/note_container';
import AuthFormContainer from './auth_form/auth_form_container';

const Root = ({ store }) => {
  const redirectIfSignedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const redirectIfLoggedOut = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/sign-in');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ HomeContainer }>
          <Route path="notes" component={ NotesIndexContainer }>
            <Route path="new" component={ NewNoteContainer } />
            <Route path=":noteId" component={ NoteContainer } />
          </Route>
        </Route>
        <Route path="/sign-in" onEnter={ redirectIfSignedIn } component={ AuthFormContainer } />
        <Route path="/sign-up" onEnter={ redirectIfSignedIn } component={ AuthFormContainer } />
      </Router>
    </Provider>
  );
};

export default Root;

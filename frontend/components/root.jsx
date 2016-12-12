import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';
import HomeContainer from './home/home_container';
import NotesIndexContainer from './notes_index/notes_index_container';
import NewNoteContainer from './new_note/new_note_container';
import NoteContainer from './note/note_container';
import NotebooksIndexContainer from './notebooks_index/notebooks_index_container';
import NewNotebookContainer from './new_notebook/new_notebook_container';
import NotebookUpdateContainer from './notebook_update/notebook_update_container';
import NotebookNotesIndexContainer from './notebook_notes_index/notebook_notes_index_container';

const Root = ({ store }) => {
  const redirectIfSignedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/notes/new');
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
        <Redirect from="/" to="notes/new" />
        <Route path="/" onEnter={ redirectIfLoggedOut } component={ HomeContainer }>
          <Route path="notes" component={ NotesIndexContainer }>
            <Route path="new" component={ NewNoteContainer } />
            <Route path=":noteId" component={ NoteContainer } />
          </Route>
          <Route path="notebooks" component={ NotebooksIndexContainer }>
            <Route path="new" component={ NewNotebookContainer } />
            <Route path="update/:notebookId" component= { NotebookUpdateContainer } />
          </Route>
          <Route path="notebooks/:notebookId/notes" component={ NotebookNotesIndexContainer }>
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

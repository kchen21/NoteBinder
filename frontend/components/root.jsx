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
import TagsIndexContainer from './tags_index/tags_index_container';
import NewTagContainer from './new_tag/new_tag_container';
import TaggedNotesIndexContainer from './tagged_notes_index/tagged_notes_index_container';
import AccountUpdateContainer from './account_update/account_update_container';
import NoteSearchContainer from './note_search/note_search_container';

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
          <Route path="note-search" component={ NoteSearchContainer }>
            <Route path=":noteId" component={ NoteContainer }>
              <Route path="new-tag" component={ NewTagContainer } />
            </Route>
          </Route>
          <Route path="notes" component={ NotesIndexContainer }>
            <Route path="new" component={ NewNoteContainer } />
            <Route path=":noteId" component={ NoteContainer }>
              <Route path="new-tag" component={ NewTagContainer } />
            </Route>
          </Route>
          <Route path="notebooks" component={ NotebooksIndexContainer }>
            <Route path="new" component={ NewNotebookContainer } />
            <Route path="update/:notebookId" component={ NotebookUpdateContainer } />
          </Route>
          <Route path="notebooks/:notebookId/notes" component={ NotebookNotesIndexContainer }>
            <Route path=":noteId" component={ NoteContainer }>
              <Route path="new-tag" component={ NewTagContainer } />
            </Route>
          </Route>
          <Route path="tags" component={ TagsIndexContainer }>
            <Route path="new" component={ NewTagContainer } />
          </Route>
          <Route path="tags/:tagId/notes" component={ TaggedNotesIndexContainer }>
            <Route path=":noteId" component={ NoteContainer }>
              <Route path="new-tag" component={ NewTagContainer } />
            </Route>
          </Route>
          <Route path="account/update" component={ AccountUpdateContainer } />
        </Route>
        <Route path="/sign-in" onEnter={ redirectIfSignedIn } component={ AuthFormContainer } />
        <Route path="/sign-up" onEnter={ redirectIfSignedIn } component={ AuthFormContainer } />
      </Router>
    </Provider>
  );
};

export default Root;

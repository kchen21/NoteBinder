## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**NotesIndexContainer**
 - NotesIndex

**NoteContainer**
 - Note

**NotebooksIndexContainer**
 - NotebooksIndex

**NotebookContainer**
 - NotebookHeader
  + NotesIndex

**SearchResultsContainer**
 - Search
 - NotesIndex

**TagContainer**
 - TagHeader
  + NotesIndex

**NotesIndex**
 - NotesIndexItem
  + NoteDetail
    - NoteTools
    - NotebooksSearch
    - Tags
      + Tag
    - RTETools
    - Note

**NewNoteContainer**
 - NewNote
  - NotebooksSearch
  - Tags
    + Tag
  - RTETools
  - Note
  - PostButton

**Search**

**NewNotebookContainer**
 - NewNotebook

**NewTag**
 - NewTag

**NotebooksSearch**
 - AutoSearch
 - AutoSearchResults

**TagsSearch**
 - AutoSearch
 - AutoSearchResults

**AccountMenu**

**UpdateAccount**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/notes" | "NotesIndexContainer" |
| "/notes/new" | "NewNoteContainer" |
| "/notes/:noteId" | "NoteContainer" |
| "/notebooks" | "NotebooksIndexContainer" |
| "/notebooks/new" | "NewNotebookContainer" |
| "/notebooks/:notebookId" | "NotebookNotesIndexContainer" |
| "/notebooks/:notebookId/notes/:noteId" | "NotebookContainer" |
| "/tags/:tagId/notes/:noteId" | "TagContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/search" | "Search" |
| "/new-tag" | "NewTag" |
| "/tags-search" | "TagsSearch" |
| "/notebooks-search" | "NotebooksSearch" |
| "/account-menu" | "AccountMenu" |
| "/update-account" | "UpdateAccount" |

## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
  - Sidebar

**NotesIndexContainer**
 - NotesIndex
  + NewNote
  + Note

**NewNoteContainer**
 - NewNote
  - NotebooksSearch
  - Tags
    + Tag
  - RTETools
  - Note
  - PostButton

**NoteContainer**
 - Note

**NotebooksIndexContainer**
 - NotebooksIndex
  + NewNotebook
  + Notebook

**NewNotebookContainer**
- NewNotebook

**NotebookUpdateContainer**
- NotebookUpdate

**NotebookNotesIndexContainer**
 - NotebookNotesIndex
  + Note

**TagsIndexContainer**
 - TagsIndex
  + NewTag

**NewTagContainer**
- NewTag

**TaggedNotesIndexContainer**
 - TaggedNotesIndex
  + Note

<!-- TOEDIT -->

**NotesIndex**
 - NotesIndexItem
  + NoteDetail
    - NoteTools
    - NotebooksSearch
    - Tags
      + Tag
    - RTETools
    - Note

**SearchResultsContainer**
- Search
- NotesIndex

**Search**

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
| "/notebooks/update/:notebookId" | "NotebookUpdateContainer" |
| "/notebooks/:notebookId" | "NotebookNotesIndexContainer" |
| "/notebooks/:notebookId/notes/:noteId" | "NotebookContainer" |
| "/tags" | "TagsIndexContainer" |
| "/tags/new" | "NewTagContainer" |
| "/tags/:tagId/notes" | "TaggedNotesIndexContainer" |
| "/tags/:tagId/notes/:noteId" | "TagContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/search" | "Search" |
| "/tags-search" | "TagsSearch" |
| "/notebooks-search" | "NotebooksSearch" |
| "/account-menu" | "AccountMenu" |
| "/update-account" | "UpdateAccount" |

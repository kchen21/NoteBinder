## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**NoteContainer**
 - NotesHeader
 - NotesIndex

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

**NewNotebook**
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
| "/notes/:noteId" | "NoteContainer" |
| "/notebooks/:notebookId/notes/:noteId" | "NotebookContainer" |
| "/tags/:tagId/notes/:noteId" | "TagContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/notes/new" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tags-search" | "TagsSearch" |
| "/notebooks-search" | "NotebooksSearch" |
| "/account-menu" | "AccountMenu" |
| "/update-account" | "UpdateAccount" |

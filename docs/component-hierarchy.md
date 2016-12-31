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


**AccountUpdateContainer**
 - AccountUpdate

<!-- TODO -->

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

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/notes" | "NotesIndexContainer" |
| "/notes/new" | "NewNoteContainer" |
| "/notes/:noteId" | "NoteContainer" |
| "/tags/:tagId/notes/:noteId" | "NoteContainer" |
| "/notebooks" | "NotebooksIndexContainer" |
| "/notebooks/new" | "NewNotebookContainer" |
| "/notebooks/update/:notebookId" | "NotebookUpdateContainer" |
| "/notebooks/:notebookId" | "NotebookNotesIndexContainer" |
| "/notebooks/:notebookId/notes/:noteId" | "NotebookContainer" |
| "/notes/:noteId/new-tag" | "NewTagContainer" |
| "/notebooks/:notebookId/notes/:noteId/new-tag" | "NewTagContainer" |
| "/tags" | "TagsIndexContainer" |
| "/tags/new" | "NewTagContainer" |
| "/tags/:tagId/notes" | "TaggedNotesIndexContainer" |
| "/tags/:tagId/notes/:noteId/new-tag" | "NewTagContainer" |
| "/account/update" | "AccountUpdateContainer" |

<!-- TODO -->

| "/search-results" | "SearchResultsContainer" |
| "/search" | "Search" |
| "/tags-search" | "TagsSearch" |
| "/notebooks-search" | "NotebooksSearch" |

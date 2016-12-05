## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**NotesContainer**
 - NotesHeader
 * NotesIndex

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
    + NoteTools
    - NotebookSearch
    - Tags
      - Tag
    * Note

**NewNoteContainer**
 - NewNote
  - NotebookSearch
  - Tags
    - Tag
  - RTETools
  - NewNoteButton

**Search**

**NewNotebook**
 - NewNotebook

**NewTag**
 - NewTag

**NotebookSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |

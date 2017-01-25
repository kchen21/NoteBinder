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

**NoteSearchContainer**
 - NoteSearch
  + Note

<!-- TODO -->

**NotebookSearchContainer**

**TagSearchContainer**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/notes" | "NotesIndexContainer" |
| "/notes/new" | "NewNoteContainer" |
| "/notes/:noteId" | "NoteContainer" |
| "/notes/:noteId/new-tag" | "NewTagContainer" |
| "/notebooks" | "NotebooksIndexContainer" |
| "/notebooks/new" | "NewNotebookContainer" |
| "/notebooks/update/:notebookId" | "NotebookUpdateContainer" |
| "/notebooks/:notebookId/notes" | "NotebookNotesIndexContainer" |
| "/notebooks/:notebookId/notes/:noteId" | "NotebookContainer" |
| "/notebooks/:notebookId/notes/:noteId/new-tag" | "NewTagContainer" |
| "/tags" | "TagsIndexContainer" |
| "/tags/new" | "NewTagContainer" |
| "/tags/:tagId/notes" | "TaggedNotesIndexContainer" |
| "/tags/:tagId/notes/:noteId" | "NoteContainer" |
| "/tags/:tagId/notes/:noteId/new-tag" | "NewTagContainer" |
| "/account/update" | "AccountUpdateContainer" |
| "/note-search" | "NoteSearchContainer" |
| "/note-search/:noteId" | "NoteContainer" |
| "/note-search/:noteId/new-tag" | "NewTagContainer" |

<!-- TODO -->

| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |

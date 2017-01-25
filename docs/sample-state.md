```js
{
  session: {
    currentUser: {
      id: 1,
      full_name: "John Doe",
      email: "john.doe@example.com",
      username: "JohnD",
      avatar_url: "www.example.com/users/JohnD/files/avatar.png"
    },
    errors: []
  },
  notebookData: {
    notebooks: {
      1: {
        id: 1,
        title: "Sample Notebook",
        description: "contains planning notes",
        author_id: 1,
        note_ids: {
          1: 1
        }
      }
    },
    errors: ["title can't be blank"]
  },
  noteData: {
    notes: {
      1: {
        id: 1,
        title: "Sample Note",
        body: "for planning purposes",
        notebook_id: 1,
        updated_at: "2016-12-16T07:01:42.436Z",
        author_name: 1,
        tags_ids: {
          1: 1
        }
      }
    },
    errors: ["title can't be blank"],
    searchNoteIds: {
      1: 1
    }
  },
  tags: {
    1: {
      id: 1,
      name: "Planning",
      note_ids: {
        1: 1
      }
    }
  }
}
```

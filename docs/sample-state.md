```js
{
  session: {
    currentUser: {
      id: 1,
      full_name: "John Doe"
      email: "john.doe@example.com"
      username: "JohnD"
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
        author_name: 1,
        notebook_id: 1,
        tags: {
          1: {
            id: 1,
            name: "Planning"
          }
        }
      }
    },
    errors: ["title can't be blank"]
  }
}
```

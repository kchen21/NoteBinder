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
  forms: {
    createNote: {errors: ["title can't be blank"]}
  },
  notebooks: {
    1: {
      title: "Sample Notebook",
      description: "contains planning notes",
      author_id: 1,
      author_name: "John Doe"
    }
  },
  notes: {
    1: {
      title: "Sample Note",
      body: "for planning purposes",
      author_id: 1,
      author_name: "John Doe",
      notebook_id: 1,
      tags: {
        1: {
          id: 1,
          name: "Planning"
        }
      }
    }
  }
}
```

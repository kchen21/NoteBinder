```js
{
  session: {
    currentUser: {
      id: 1,
      full_name: "John Doe"
      email: "johndoe@example.com"
      username: "JohnDoe123"
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
      author_id: 1
    }
  },
  notes: {
    1: {
      title: "Sample Note",
      body: "for planning purposes",
      author_id: 1,
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
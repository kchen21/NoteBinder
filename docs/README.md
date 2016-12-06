# NoteBinder

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://notebinder.herokuapp.com/
[trello]: https://trello.com/b/zdG27beB/notebinder

## Minimum Viable Product

NoteBinder is an Evernote-inspired web application built using Ruby on Rails
and React/Redux. By the end of Week 9 at App Academy, this app will, at a minimum,
have the following functionalities, with bug-free navigation, sufficient seed data,
and proper Evernote-inspired CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes
- [ ] Notebooks for organizing notes
- [ ] Tags
- [ ] Rich Text Editing
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (2 days)

**Objective:** Create a functioning rails project with front-end Authentication.

### Phase 2: Notes Model, API, and Components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through the API.

### Phase 3: Notebooks (2 days)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

### Phase 4: Tags (1 day)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 5: Allow Complex Styling in Notes (1 day)

**objective:** Allow rich text editing of notes.

### Phase 6: Account Menu Popup and Update Account Details Page (1 day)

**objective:** The account menu popup will show the user's avatar, full name, and two buttons:
one that links to an Update Account Details page and another to log out.

### Bonus Features (TBD)
- [ ] Infinite Scroll
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
- [ ] Auto-saving

# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Notes

- `GET /api/notes`
  - Notes index/search
  - accepts `tag_name` query param to list notes by tag
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `PATCH /api/notebooks/:id`
- `DELETE /api/notebooks/:id`

### Tags

- A note's tag IDs will be included in the note show template
- `GET /api/tags`
- `POST /api/notes/:note_id/tags`: add tag to note by name
  - if tag doesn't already exist, it will be created
- `GET /api/tags/:id`
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name

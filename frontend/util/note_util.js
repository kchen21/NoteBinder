export const fetchAllNotes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notes'
  });
};

export const fetchNoteSearchResults = (searchString) => {
  return $.ajax({
    method: 'GET',
    url: '/api/notes/search',
    data: { searchString }
  });
};

export const createNote = (note) => {
  return $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: { note }
  });
};

export const updateNote = (note) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/notes/${note.id}`,
    data: { note }
  });
};

export const destroyNote = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notes/${id}`
  });
};

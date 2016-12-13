export const fetchAllTags = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tags'
  });
};

export const createTag = (noteId, tag) => {
  return $.ajax({
    method: 'POST',
    url: `/api/notes/${noteId}/tags`,
    data: { tag }
  });
};

export const destroyTag = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tags/${id}`
  });
};

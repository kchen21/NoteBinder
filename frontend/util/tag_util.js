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

export const destroyTagging = (noteId, tagName) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notes/${noteId}/tags/${tagName}`
  });
};

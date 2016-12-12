export const fetchAllNotebooks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  });
};

export const fetchIdsOfCurrentNotebookNotes = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}/notes`
  });
};

export const createNotebook = (notebook) => {
  return $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: { notebook }
  });
};

export const updateNotebook = (notebook) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/notebooks/${notebook.id}`,
    data: { notebook }
  });
};

export const destroyNotebook = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notebooks/${id}`
  });
};

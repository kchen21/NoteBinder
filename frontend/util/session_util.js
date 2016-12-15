// user should be structured like so:
// { username:..., password:... }
// so that the data that will be passed in will be structured like so:
// { user: { username:..., password:... } }

export const signUp = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const signIn = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const updateUser = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.get('id')}`,
    data: formData,
    contentType: false,
    processData: false,
    dataType: "json"
  });
};

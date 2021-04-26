export const authenticate = (data) => ({
  types: ['AUTH', 'AUTH_SUCCESS', 'AUTH_ERROR'],
  method: 'GET',
  data,
});

export const login = (data) => ({
  types: ['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_ERROR'],
  method: 'POST',
  data,
});

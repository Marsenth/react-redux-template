const auth = {
  WELCOME: (state, action) => ({
    ...state,
    [action.type]: {
      message: 'Autenticado exitosamente!'
    }
  })
};

export default auth;

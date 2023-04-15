const home = {
  WELCOME: (state, action) => ({
    ...state,
    message: action.message
  })
};

export default home;

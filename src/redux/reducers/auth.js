const initialState = {
  AUTH: {
    data: null,
    loading: false,
    error: null,
  },
  LOGIN: {
    data: null,
    loading: false,
    error: null,
  },
};

const auth = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        AUTH: {
          ...state.AUTH,
          loading: true,
        },
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        AUTH: {
          ...state.AUTH,
          loading: false,
          data: action.data,
        },
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        AUTH: {
          ...state.AUTH,
          loading: false,
          error: {
            name: action.name,
            message: action.message,
            status: action.status,
          },
        },
      };
    case 'LOGIN':
      return {
        ...state,
        LOGIN: {
          ...state.LOGIN,
          loading: true,
          data: null,
          error: null,
        },
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        LOGIN: {
          ...state.LOGIN,
          loading: false,
          error: null,
          data: action.data,
        },
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        LOGIN: {
          ...state.LOGIN,
          loading: false,
          error: {
            name: action.name,
            message: action.message,
            status: action.status,
          },
        },
      };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
};

export default auth;

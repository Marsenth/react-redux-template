import { actionTypes } from '../endpoints';
import authActionTypes from '../helpers/actionTypes/auth';

export const initialState = {
  AUTH: {
    data: null,
    loading: false,
    error: null
  },
  LOGIN: {
    data: null,
    loading: false,
    error: null
  }
};

const auth = (state = { ...initialState }, action) => {
  switch (action.type) {
  case actionTypes.AUTH:
    return {
      ...state,
      AUTH: {
        ...state.AUTH,
        loading: true
      }
    };
  case actionTypes.AUTH_SUCCESS:
    return {
      ...state,
      AUTH: {
        ...state.AUTH,
        loading: false,
        data: action.data
      }
    };
  case actionTypes.AUTH_ERROR:
    return {
      ...state,
      AUTH: {
        ...state.AUTH,
        loading: false,
        error: {
          name: action.name,
          message: action.message,
          status: action.status
        }
      }
    };
  case actionTypes.LOGIN:
    return {
      ...state,
      LOGIN: {
        ...state.LOGIN,
        loading: true,
        data: null,
        error: null
      }
    };
  case actionTypes.LOGIN_SUCCESS:
    return {
      ...state,
      LOGIN: {
        ...state.LOGIN,
        loading: false,
        error: null,
        data: action.data
      }
    };
  case actionTypes.LOGIN_ERROR:
    return {
      ...state,
      LOGIN: {
        ...state.LOGIN,
        loading: false,
        error: {
          name: action.name,
          message: action.message,
          status: action.status
        }
      }
    };
  case authActionTypes.LOGOUT:
    return { ...initialState };
  default:
    return state;
  }
};

export default auth;

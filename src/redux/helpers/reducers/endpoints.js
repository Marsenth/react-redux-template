import { endpointsInNamespaces, actionTypes } from '../../endpoints';
import getEndpointNameFromType from '../endpoints/getEndpointNameFromType';

const createReducersFromEndpoints = () => {
  const reducers = {};

  Object.keys(endpointsInNamespaces).forEach((endpointNamespace) => {
    const endpoints = endpointsInNamespaces[endpointNamespace];

    const initialState = {};

    Object.keys(endpoints).forEach((endpointName) => {
      initialState[endpointName] = {
        data: null,
        loading: false,
        error: null
      };
    });

    reducers[endpointNamespace] = (state = { ...initialState }, action) => {
      const {
        type, loading, data, error
      } = action;

      if (actionTypes[type]) {
        const endpointName = getEndpointNameFromType(type);

        return {
          ...state,
          [endpointName]: {
            data,
            error,
            loading
          }
        };
      }

      if (type === 'LOGOUT') return { ...initialState };

      return state;
    };
  });

  return reducers;
};

export default createReducersFromEndpoints;

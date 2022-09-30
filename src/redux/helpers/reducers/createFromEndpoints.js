import { endpointsInNamespaces, endpointsActionTypes } from '../../endpoints';
import getEndpointNameFromType from '../endpoints/getEndpointNameFromType';

const createReducersFromEndpoints = (states) => {
  const reducers = {};

  Object.keys(endpointsInNamespaces).forEach((endpointNamespace) => {
    const endpoints = endpointsInNamespaces[endpointNamespace];

    const initialState = {};
    const namespaceInStates = states[endpointsInNamespaces];
    delete states[endpointsInNamespaces];

    Object.keys(endpoints).forEach((endpointName) => {
      initialState[endpointName] = {
        data: null,
        loading: false,
        error: null
      };
    });

    reducers[endpointNamespace] = (state = { ...initialState }, action) => {
      const {
        type, loading, data, error, ...rest
      } = action;

      const typeInStates = !!(namespaceInStates || {})[type];

      if (typeInStates) {
        // This overwrite the default state changed by the endpoint.
        return {
          ...state,
          loading,
          data,
          error,
          ...rest
        };
      }

      if (endpointsActionTypes[type]) {
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

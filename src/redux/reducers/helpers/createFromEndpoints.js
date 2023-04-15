import { endpointsInNamespaces, endpointsActionTypes } from '../../endpoints';
import getEndpointNameFromType from '../../endpoints/helpers/getEndpointNameFromType';

const createReducersFromEndpoints = (customStates, resetActionType) => {
  const reducers = {};

  Object.keys(endpointsInNamespaces).forEach((endpointNamespace) => {
    const endpoints = endpointsInNamespaces[endpointNamespace];

    const initialState = {};
    const namespaceInStates = customStates[endpointNamespace];
    if (namespaceInStates) delete customStates[endpointNamespace];

    Object.keys(endpoints).forEach((endpointName) => {
      initialState[endpointName] = {
        called: false,
        data: null,
        error: null,
        loading: false,
        status: null
      };
    });

    reducers[endpointNamespace] = (state = { ...initialState }, action) => {
      const {
        called, data, error, loading, onRequest, onSuccess, onError, type
      } = action;

      const rest = {
        called, data, error, loading
      };

      if (endpointsActionTypes[type]) {
        const endpointName = getEndpointNameFromType(type);
        const shouldCallOnRequest = typeof onRequest === 'function' && type === endpointName;
        const shouldCallOnSuccess = typeof onSuccess === 'function' && type === `${endpointName}_SUCCESS`;
        const shouldCallOnError = typeof onError === 'function' && type === `${endpointName}_ERROR`;

        const getNewScopeState = () => {
          if (shouldCallOnRequest) return onRequest(state[endpointName], action);
          if (shouldCallOnSuccess) return onSuccess(state[endpointName], action);
          if (shouldCallOnError) return onError(state[endpointName], action);
          return { ...state[endpointName], ...rest };
        };

        return {
          ...state,
          [endpointName]: getNewScopeState()
        };
      }

      if ((namespaceInStates || {})[type]) {
        return {
          ...state,
          [type]: {
            ...state[type],
            ...rest
          }
        };
      }

      if (type === resetActionType) return { ...initialState };

      return state;
    };
  });

  return reducers;
};

export default createReducersFromEndpoints;

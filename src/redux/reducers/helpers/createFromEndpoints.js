import { endpointsInNamespaces, endpointsActionTypes } from '../../endpoints';
import getEndpointNameFromType from '../../endpoints/helpers/getEndpointNameFromType';

const createReducersFromEndpoints = (mutations, resetActionType) => {
  const reducers = {};

  Object.keys(endpointsInNamespaces).forEach((endpointReducer) => {
    const endpoints = endpointsInNamespaces[endpointReducer];

    const initialState = {};
    const reducerOnMutation = mutations[endpointReducer];

    if (reducerOnMutation) delete mutations[endpointReducer];

    Object.keys(endpoints).forEach((endpointName) => {
      initialState[endpointName] = {
        called: false,
        data: null,
        error: null,
        loading: false,
        status: null
      };
    });

    reducers[endpointReducer] = (state = { ...initialState }, action) => {
      const {
        called, data, error, loading, onRequest, onSuccess, onError, type
      } = action;

      const rest = {
        called, data, error, loading
      };

      const mutation = reducerOnMutation?.[type];

      if (mutation) return mutation(state, action);

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

      if (type === resetActionType) return { ...initialState };

      return state;
    };
  });

  return reducers;
};

export default createReducersFromEndpoints;

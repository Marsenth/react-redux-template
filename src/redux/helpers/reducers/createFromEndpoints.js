/* eslint-disable no-unused-vars */
import { endpointsInNamespaces, endpointsActionTypes } from '../../endpoints';
import getEndpointNameFromType from '../endpoints/getEndpointNameFromType';

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
        type, ...rest
      } = action;

      if (endpointsActionTypes[type]) {
        const endpointName = getEndpointNameFromType(type);

        return {
          ...state,
          [endpointName]: {
            ...state[endpointName],
            ...rest
          }
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

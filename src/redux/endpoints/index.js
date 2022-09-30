import getActionTypesFromEndpoints from '../helpers/actionTypes/endpoints';
import destructNamespaces from '../helpers/endpoints/destructNamespaces';
import auth from './auth';

export const endpointsInNamespaces = {
  auth
};

const endpoints = destructNamespaces(endpointsInNamespaces);

export const endpointsActionTypes = getActionTypesFromEndpoints(endpoints);

export default endpoints;

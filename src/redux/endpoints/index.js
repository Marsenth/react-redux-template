import getActionTypesFromEndpoints from './helpers/getActionTypesFromEndpoints';
import destructNamespaces from './helpers/destructNamespaces';
import auth from './auth';

export const endpointsInNamespaces = {
  auth
};

const endpoints = destructNamespaces(endpointsInNamespaces);

export const endpointsActionTypes = getActionTypesFromEndpoints(endpoints);

export default endpoints;

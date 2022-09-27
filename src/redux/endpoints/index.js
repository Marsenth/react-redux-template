import getActionTypesFromEndpoints from '../helpers/actionTypes/endpoints';
import auth from './auth';

const endpoints = {
  ...auth
};

export const actionTypes = getActionTypesFromEndpoints(endpoints);

export default endpoints;

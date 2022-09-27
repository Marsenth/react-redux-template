import getActionTypes from '../helpers/getActionTypes';
import auth from './auth';

const endpoints = {
  ...auth
};

export const actionTypes = getActionTypes(endpoints);

export default endpoints;

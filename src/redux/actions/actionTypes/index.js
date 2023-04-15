import authActionTypes from './auth';
import homeActionTypes from './home';

const actionTypes = {
  ...authActionTypes,
  ...homeActionTypes
};

export default actionTypes;

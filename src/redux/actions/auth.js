import { endpointsActionTypes } from '../endpoints';
import actionTypes from '../helpers/actionTypes';
import createActions from '../hooks/createActions';

const useAuthActions = () => createActions({
  authenticate: () => ({
    endpoint: endpointsActionTypes.AUTH,
    method: 'GET'
  }),
  login: (data) => ({
    endpoint: endpointsActionTypes.LOGIN,
    method: 'POST',
    data
  }),
  logout: () => ({
    type: actionTypes.LOGOUT
  })
});

export default useAuthActions;

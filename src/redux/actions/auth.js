import { endpointsActionTypes } from '../endpoints';
import actionTypes from './actionTypes';
import createActions from './hooks/createActions';

const useAuthActions = () => createActions('auth', {
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

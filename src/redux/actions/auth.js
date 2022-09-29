import { actionTypes } from '../endpoints';
import authActionTypes from '../helpers/actionTypes/auth';
import createActions from '../hooks/createActions';

const useAuthActions = () => createActions({
  authenticate: () => ({
    endpoint: actionTypes.AUTH,
    method: 'GET'
  }),
  login: (data) => ({
    endpoint: actionTypes.LOGIN,
    method: 'POST',
    data
  }),
  logout: () => ({
    type: authActionTypes.LOGOUT
  })
});

export default useAuthActions;

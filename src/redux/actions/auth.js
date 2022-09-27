import { actionTypes } from '../endpoints';
import authActionTypes from '../helpers/actionTypes/auth';
import createActions from '../hooks/createActions';

const useAuthActions = () => createActions({
  authenticate: (data) => ({
    endpoint: actionTypes.AUTH,
    method: 'GET',
    data
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

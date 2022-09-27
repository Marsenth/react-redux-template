import { actionTypes } from '../endpoints';
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
    type: 'LOGOUT'
  })
});

export default useAuthActions;

import actionTypes from '../helpers/actionTypes';
import createActions from '../hooks/createActions';

const useHomeActions = () => createActions({
  welcomeAction: () => ({
    type: actionTypes.WELCOME,
    message: '¡Hola amiguitos!'
  })
});

export default useHomeActions;

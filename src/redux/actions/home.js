import actionTypes from './actionTypes';
import createActions from './hooks/createActions';

const useHomeActions = () => createActions('home', {
  welcomeAction: () => ({
    type: actionTypes.WELCOME,
    message: '¡Hola amiguitos!'
  })
});

export default useHomeActions;

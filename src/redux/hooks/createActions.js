import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const createActions = (actions) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default createActions;

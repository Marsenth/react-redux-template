import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const createActions = (reducerName, actions) => {
  const dispatch = useDispatch();
  return bindActionCreators(Object.keys(actions).reduce(
    (accum, key) => Object.assign(accum, {
      [key]: () => ({ ...actions[key](), reducerName })
    }), {}
  ), dispatch);
};

export default createActions;

import createReducersFromEndpoints from './createFromEndpoints';
import createReducersFromStates from './createFromStates';

const createReducers = (states) => {
  const reducers = {
    ...createReducersFromEndpoints(states),
    ...createReducersFromStates(states)
  };

  return reducers;
};

export default createReducers;

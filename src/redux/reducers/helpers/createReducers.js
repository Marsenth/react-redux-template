import createReducersFromEndpoints from './createFromEndpoints';
import createReducersFromStates from './createFromStates';

const createReducers = ({ customStates, resetActionType }) => {
  const reducers = {
    ...createReducersFromEndpoints(customStates, resetActionType),
    ...createReducersFromStates(customStates)
  };

  return reducers;
};

export default createReducers;

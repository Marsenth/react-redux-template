import createReducersFromEndpoints from './createFromEndpoints';
import createReducersFromMutations from './createFromMutations';

const createReducers = ({ mutations, resetActionType }) => {
  const reducers = {
    ...createReducersFromEndpoints(mutations, resetActionType),
    ...createReducersFromMutations(mutations)
  };

  return reducers;
};

export default createReducers;

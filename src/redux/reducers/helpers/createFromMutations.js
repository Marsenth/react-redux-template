const createReducersFromMutations = (mutations) => {
  const reducers = {};

  Object.keys(mutations).forEach((mutationReducer) => {
    reducers[mutationReducer] = (state = { ...mutations[mutationReducer] }, action) => {
      const { type } = action;
      const mutation = mutations[mutationReducer][type];

      if (mutation) return mutation(state, action);

      return state;
    };
  });

  return reducers;
};

export default createReducersFromMutations;

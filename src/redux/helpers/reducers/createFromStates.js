const createReducersFromStates = (customStates) => {
  const reducers = {};

  Object.keys(customStates).forEach((statesNamespace) => {
    reducers[statesNamespace] = (state = { ...customStates[statesNamespace] }, action) => {
      const { type, ...rest } = action;

      if (customStates[statesNamespace][type]) {
        return {
          ...state,
          [type]: {
            ...rest
          }
        };
      }

      return state;
    };
  });

  return reducers;
};

export default createReducersFromStates;

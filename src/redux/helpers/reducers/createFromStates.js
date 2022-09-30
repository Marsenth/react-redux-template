const createReducersFromStates = (states) => {
  const reducers = {};

  Object.keys(states).forEach((statesNamespace) => {
    reducers[statesNamespace] = (state = { ...states[statesNamespace] }, action) => {
      const { type, ...rest } = action;

      if (states[statesNamespace][type]) {
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

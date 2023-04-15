const getActionTypesFromEndpoints = (endpoints) => {
  const actionTypes = {};

  Object.keys(endpoints).forEach((endpoint) => {
    const requestTag = endpoint;
    const successTag = `${endpoint}_SUCCESS`;
    const errorTag = `${endpoint}_ERROR`;

    actionTypes[requestTag] = requestTag;
    actionTypes[successTag] = successTag;
    actionTypes[errorTag] = errorTag;
  });

  return actionTypes;
};

export default getActionTypesFromEndpoints;

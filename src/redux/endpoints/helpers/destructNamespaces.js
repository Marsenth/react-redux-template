const destructNamespaces = (endpointsInNamespaces) => {
  const endpoints = {};

  Object.keys(endpointsInNamespaces).forEach((endpointNamespace) => {
    Object.assign(endpoints, { ...endpointsInNamespaces[endpointNamespace] });
  });

  return endpoints;
};

export default destructNamespaces;

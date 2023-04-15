import { endpointsActionTypes } from '../index';

const getEndpointNameFromType = (type) => {
  const croppedActionType = type.split('_').slice(0, -1).join('_');
  const endpointName = endpointsActionTypes[croppedActionType] ? croppedActionType : type;

  return endpointName;
};

export default getEndpointNameFromType;

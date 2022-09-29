import { actionTypes } from '../../endpoints';

const getEndpointNameFromType = (type) => {
  const croppedActionType = type.split('_').slice(0, -1).join('_');
  const endpointName = actionTypes[croppedActionType] ? croppedActionType : type;

  return endpointName;
};

export default getEndpointNameFromType;

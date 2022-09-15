import axios from 'axios';
import { isArray, size } from 'lodash';
import endpoints from '../endpoints';

const api = ({ dispatch }) => (next) => (action) => {
  const {
    baseURL = process.env.REACT_APP_API_SERVER,
    types,
    method,
    data
  } = action;

  const isRequest = isArray(types) && size(types) === 3;

  const nextAction = isRequest ? {
    ...action,
    type: types[0]
  } : action;

  // Call the next dispatch method in the middleware chain.
  const returnValue = next(nextAction);

  if (isRequest) {
    const requestURL = endpoints[nextAction.type];
    const token = localStorage.getItem('token') || '';
    const keepSession = JSON.parse(localStorage.getItem('keep_session'));

    if (token !== '') {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    axios.defaults.headers.common['x-api-keep'] = keepSession;

    axios({
      baseURL,
      url: requestURL,
      method,
      data
    }).then((response) => {
      const successDispatch = () => ({
        type: types[1],
        data: response.data
      });

      dispatch(successDispatch());
    }).catch((error) => {
      const { name, message } = error.toJSON();
      const status = (error.response || {}).status || 404;

      const errorDispatch = () => ({
        type: types[2],
        name,
        message,
        status
      });

      dispatch(errorDispatch());
    });
  }

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

export default api;

import axios from 'axios';
import endpoints from '../endpoints';

const api = ({ dispatch }) => (next) => (action) => {
  const {
    endpoint,
    method,
    data
  } = action;

  const requestURL = endpoints[endpoint];

  const nextAction = isRequest ? {
    ...action,
    ...(requestURL ? {
      type: endpoint
    } : null)
  } : action;

  // Call the next dispatch method in the middleware chain.
  const returnValue = next(nextAction);

  if (requestURL) {
    const token = localStorage.getItem('token') || '';
    const keepSession = JSON.parse(localStorage.getItem('keep_session'));

    if (token !== '') {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    axios.defaults.headers.common['x-api-keep'] = keepSession;

    axios({
      url: requestURL,
      method,
      data
    }).then((response) => {
      const successDispatch = () => ({
        type: `${endpoint}_SUCCESS`,
        data: response.data
      });

      dispatch(successDispatch());
    }).catch((error) => {
      const status = (error.response || {}).status || 404;

      const errorDispatch = () => ({
        type: `${endpoint}_ERROR`,
        error,
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

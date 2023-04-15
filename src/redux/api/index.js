import axios from 'axios';
import { endpointsInNamespaces } from '../endpoints';
import states from '../reducers/customStates';

const api = ({ dispatch }) => (next) => (action) => {
  const {
    data,
    endpoint,
    method,
    onError,
    onRequest,
    onSuccess,
    reducerName
  } = action;

  const scopeOnEndpoints = endpointsInNamespaces[reducerName];
  const scopeOnStates = states[reducerName];
  const scopeExists = !!scopeOnEndpoints || !!scopeOnStates;

  if (!scopeExists) throw new Error('Most pass a valid scopeName');

  const requestURL = scopeOnEndpoints?.[endpoint];

  const nextAction = {
    ...(requestURL ? {
      called: true,
      loading: true,
      onRequest,
      type: endpoint
    } : action)
  };

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
        data: response.data,
        error: null,
        loading: false,
        onSuccess,
        type: `${endpoint}_SUCCESS`
      });

      dispatch({ ...successDispatch(), reducerName });
    }).catch((error) => {
      const status = (error.response || {}).status || 404;

      const errorDispatch = () => ({
        error,
        loading: false,
        onError,
        type: `${endpoint}_ERROR`,
        status
      });

      dispatch({ ...errorDispatch(), reducerName });
    });
  }

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

export default api;

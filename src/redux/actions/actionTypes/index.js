import auth from './auth';
import home from './home';

const actionTypes = {
  ...auth,
  ...home
};

export default actionTypes;

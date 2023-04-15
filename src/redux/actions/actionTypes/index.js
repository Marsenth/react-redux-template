import auth from './auth';
import home from './home';

export const actionTypes = {
  ...auth,
  ...home
};

export default actionTypes;

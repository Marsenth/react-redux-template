import createReducers from './helpers/createReducers';
import customStates from './customStates';

export default createReducers({
  customStates,
  resetActionType: 'LOGOUT'
});

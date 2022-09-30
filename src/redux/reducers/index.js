import createReducers from '../helpers/reducers/createReducers';
import customStates from './customStates';

export default createReducers({
  customStates,
  resetActionType: 'LOGOUT'
});

import createReducers from './helpers/createReducers';
import mutations from './mutations';

export default createReducers({
  mutations,
  resetActionType: 'LOGOUT'
});

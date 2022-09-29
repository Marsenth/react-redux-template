/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import middleware from './api';
import rootReducer from './reducers';

const store = createStore(combineReducers(rootReducer), composeWithDevTools(
  applyMiddleware(middleware)
));

export default store;

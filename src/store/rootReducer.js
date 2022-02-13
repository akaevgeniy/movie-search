import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { menuReducer } from './menuReducer';
import { findingReducer } from './findingReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  moviesReducer,
  menuReducer,
  findingReducer,
  appReducer,
});

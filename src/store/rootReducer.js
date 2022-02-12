import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { menuReducer } from './menuReducer';
import { findingReducer } from './findingReducer';

export const rootReducer = combineReducers({
  moviesReducer,
  menuReducer,
  findingReducer,
});

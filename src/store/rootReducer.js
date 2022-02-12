import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({
  moviesReducer,
  menuReducer,
});

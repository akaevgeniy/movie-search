import { MOVIES_LOAD } from './types';

const intialState = {
  movies: [],
};

export const moviesReducer = (state = intialState, action) => {
  switch (action.type) {
    case MOVIES_LOAD:
      const moviesNew = action.data;

      return {
        ...state,
        movies: moviesNew,
      };
    default:
      return state;
  }
};

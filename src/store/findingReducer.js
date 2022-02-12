import { MOVIE_FINDING } from './types';

const intialState = {
  movie: {},
};

export const findingReducer = (state = intialState, action) => {
  switch (action.type) {
    case MOVIE_FINDING:
      const movieFind = action.data;

      return {
        movie: movieFind,
      };

    default:
      return state;
  }
};

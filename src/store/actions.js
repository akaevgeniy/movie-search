import { MOVIES_LOAD, MENU_VISIBLE_CHANGE, MOVIE_FINDING, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from './types';
export const BASE_URL = 'http://www.omdbapi.com/';
export const API_KEY = '72908fc';

export function moviesLoad(title) {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
      const jsonData = await response.json();
      dispatch({
        type: MOVIES_LOAD,
        data: jsonData,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn('Ошибка API'));
      dispatch(loaderOff());
    }
  };
}

export function movieFinding(id) {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}?i=${id}&plot=full&apikey=${API_KEY}`);
    const jsonData = await response.json();
    dispatch({
      type: MOVIE_FINDING,
      data: jsonData,
    });
  };
}

export function menuVisible(status) {
  return {
    type: MENU_VISIBLE_CHANGE,
    data: !status,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });

    // setTimeout(() => {
    //   dispatch(errorOff());
    // }, 2000);
  };
}
export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}

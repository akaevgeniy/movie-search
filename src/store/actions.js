import { MOVIES_LOAD, MENU_VISIBLE_CHANGE } from './types';
export const BASE_URL = 'http://www.omdbapi.com/';
export const API_KEY = '72908fc';

export function moviesLoad(title) {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
    const jsonData = await response.json();
    dispatch({
      type: MOVIES_LOAD,
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

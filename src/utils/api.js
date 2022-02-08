import axios from 'axios';

export const BASE_URL = 'http://www.omdbapi.com/';
export const API_KEY = '72908fc';

export const movieImdbSearch = ({ imdb }) => {
  return axios.get(`${BASE_URL}?i=${imdb}&plot=full&apikey=${API_KEY}`).then((response) => response.data);
};
export const movieList = (name) => {
  return axios.get(`${BASE_URL}?s=${name}&apikey=${API_KEY}`).then((response) => response.data);
};

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }
  movieSearch({ title, year }) {
    return fetch(`${this._baseUrl}?t=${title}&y=${year}&apikey=72908fc`).then((response) => response.json());
  }
  movieList(name) {
    return fetch(`${this._baseUrl}?s=${name}&apikey=72908fc`).then((response) => response.json());
  }
}

export default Api = new Api({
  baseUrl: 'http://www.omdbapi.com/',
});

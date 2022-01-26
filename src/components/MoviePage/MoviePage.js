import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './MoviePage.module.css';

function MoviePage(props) {
  const history = useHistory();
  let movie = props.findMovie;

  return (
    <div className={styles.block}>
      <div className={styles.movie__block}>
        <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
        <div className={styles.movie__detals}>
          <h3 className={styles.movie__title}>
            {movie.Title} <span>({movie.Year})</span>
          </h3>
          <h4 className={styles.subtitle}>About movie</h4>
          <p className={styles.subtext}>Year: {movie.Year}</p>
          <p className={styles.subtext}>Country: {movie.Country}</p>
          <p className={styles.subtext}>Genre: {movie.Genre}</p>
          <p className={styles.subtext}>Type: {movie.Type}</p>
          <p className={styles.subtext}>Directed by: {movie.Director}</p>
          <p className={styles.subtext}>Writer: {movie.Writer}</p>
          <p className={styles.subtext}>Production: {movie.Production}</p>
          <p className={styles.subtext}>Time: {movie.Runtime}</p>
          <p className={styles.subtext}>Language: {movie.Language}</p>
          <p className={styles.subtext}>BoxOffice: {movie.BoxOffice}</p>
          <p className={styles.subtext}>imdbID: {movie.imdbID}</p>
          <p className={styles.subtext}>imdb Rating: {movie.imdbRating}</p>
          <p className={styles.subtext}>Released: {movie.Released}</p>
        </div>

        <div className={styles.actors}>
          <h4 className={styles.subtitle}>Actors</h4>
          <p>{movie.Actors}</p>
          <h4 className={styles.subtitle}>Awards</h4>
          <p>{movie.Awards}</p>
        </div>
      </div>
      <div className={styles.plot__block}>
        <h4 className={styles.subtitle}>Plot</h4>
        <p className={styles.subtext}>{movie.Plot} </p>
      </div>
      <button className={styles.button} onClick={() => history.goBack()}></button>
    </div>
  );
}

export default MoviePage;

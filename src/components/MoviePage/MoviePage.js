import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spin from '../Spin/Spin';
import styles from './MoviePage.module.css';

function MoviePage() {
  const history = useHistory();

  const movie = useSelector((state) => {
    const { findingReducer } = state;
    return findingReducer;
  });
  const spinner = useSelector((state) => state.appReducer.loading);

  return spinner ? (
    <div className={styles.spin_block}>
      <Spin />
    </div>
  ) : (
    <div className={styles.block}>
      <div className={styles.movie__block}>
        <img className={styles.poster} src={movie.movie.Poster} alt={movie.movie.Title} />
        <div className={styles.movie__detals}>
          <h3 className={styles.movie__title}>
            {movie.movie.Title} <span>({movie.movie.Year})</span>
          </h3>
          <h4 className={styles.subtitle}>About movie</h4>
          <p className={styles.subtext}>Year: {movie.movie.Year}</p>
          <p className={styles.subtext}>Country: {movie.movie.Country}</p>
          <p className={styles.subtext}>Genre: {movie.movie.Genre}</p>
          <p className={styles.subtext}>Type: {movie.movie.Type}</p>
          <p className={styles.subtext}>Directed by: {movie.movie.Director}</p>
          <p className={styles.subtext}>Writer: {movie.movie.Writer}</p>
          <p className={styles.subtext}>Production: {movie.movie.Production}</p>
          <p className={styles.subtext}>Time: {movie.movie.Runtime}</p>
          <p className={styles.subtext}>Language: {movie.movie.Language}</p>
          <p className={styles.subtext}>BoxOffice: {movie.movie.BoxOffice}</p>
          <p className={styles.subtext}>imdbID: {movie.movie.imdbID}</p>
          <p className={styles.subtext}>imdb Rating: {movie.movie.imdbRating}</p>
          <p className={styles.subtext}>Released: {movie.movie.Released}</p>
        </div>

        <div className={styles.actors}>
          <h4 className={styles.subtitle}>Actors</h4>
          <p className={styles.subtext}>{movie.movie.Actors}</p>
          <h4 className={styles.subtitle}>Awards</h4>
          <p className={styles.subtext}>{movie.movie.Awards}</p>
        </div>
      </div>
      <div className={styles.plot__block}>
        <h4 className={styles.subtitle}>Plot</h4>
        <p className={styles.subtext}>{movie.movie.Plot} </p>
      </div>
      <button className={styles.button} onClick={() => history.goBack()}>
        Come Back
      </button>
    </div>
  );
}

export default MoviePage;

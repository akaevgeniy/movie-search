import styles from './Main.module.css';
import main_image from '../../images/main-movie.jpg';
import Element from '../Element/Element';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moviesLoad } from '../../store/actions';

function Main({ movie, changeInput, moreInfo }) {
  const movies = useSelector((state) => {
    const { moviesReducer } = state;
    return moviesReducer;
  });
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(moviesLoad(movie));
  }
  console.log(movies);
  return (
    <main className={styles.main}>
      <section className={styles.search__block}>
        <div className={styles.info__block}>
          <div className={styles.search}>
            <h1 className={styles.title}>Real search results only. No ads ever.</h1>
            <p className={styles.subtitle}>
              The service gives you with real search results in the database of movies of all times and peoples. Enter title of the movie in the
              search box.
            </p>
          </div>
          <img className={styles.image} src={main_image} alt="Movie see" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            id="form-movie"
            className={styles.input}
            name="form__input_is_movie"
            type="text"
            placeholder="Enter movie title to search..."
            required
            value={movie || ''}
            onChange={changeInput}
          ></input>
          <button type="submit" className={styles.button}>
            Go search
          </button>
        </form>
      </section>
      <section aria-label="label" className={styles.elements}>
        <p className={styles.results}>Total results: {movies.movies.totalResults}</p>
        {movies.movies.Search
          ? movies.movies.Search.map((elem) => (
              <Link className={styles.decoration_none} to={`movie/${elem.imdbID}`} key={elem.imdbID}>
                <Element id={elem.imdbID} poster={elem.Poster} title={elem.Title} year={elem.Year} type={elem.Type} openInfo={moreInfo} />
              </Link>
            ))
          : ''}
      </section>
    </main>
  );
}

export default Main;

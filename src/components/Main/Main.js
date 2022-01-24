import styles from './Main.module.css';
import main_image from '../../images/main-movie.jpg';
import Element from '../Element/Element';
function Main(props) {
  return (
    <main className={styles.main}>
      <section className={styles.search__block}>
        <div className={styles.search}>
          <h1 className={styles.title}>Real search results only. No ads ever.</h1>
          <p className={styles.subtitle}>
            The service gives you with real search results in the database of movies of all times and peoples. Enter title of the movie in the search
            box.
          </p>
          <form className="search_element" onSubmit={props.functionSubmit}>
            <input
              id="form-movie"
              className={styles.input}
              name="form__input_is_movie"
              type="text"
              placeholder="Enter movie title to search..."
              required
              value={props.movie || ''}
              onChange={props.changeInput}
            ></input>
            <button type="submit" className={styles.button}>
              Get Started
            </button>
          </form>
        </div>
        <img className={styles.image} src={main_image} alt="Movie see" />
      </section>
      <section aria-label="label" className="elements">
        <p className={styles.results}>Total results: {props.moviesList.totalResults}</p>
        {props.moviesList.Search
          ? props.moviesList.Search.map((elem) => (
              <Element key={elem.imdbID} poster={elem.Poster} title={elem.Title} year={elem.Year} type={elem.Type} />
            ))
          : ''}
      </section>
    </main>
  );
}

export default Main;

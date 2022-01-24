import styles from './Main.module.css';
import main_image from '../../images/main-movie.jpg';
function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.search}>
        <h1 className={styles.title}>Real search results only. No ads ever.</h1>
        <p className={styles.subtitle}>Created by ex-Google execs, Neeva gives you a private, ad-free search experience with only real results.</p>
        <div className="search_element">
          <input className={styles.input} placeholder="Enter movie title to search..."></input>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
      <img className={styles.image} src={main_image} />
    </section>
  );
}

export default Main;

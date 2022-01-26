import styles from './MyList.module.css';

function MyList() {
  return (
    <section className={styles.block}>
      <h2 className={styles.title}>My watch list</h2>
      <article className={styles.element}>
        <div className={styles.list}>
          <img
            className={styles.image}
            src="https://hd1.streamfilm.top/assets/general/images/no_poster.jpg"
            alt="Film"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = 'https://hd1.streamfilm.top/assets/general/images/no_poster.jpg';
            }}
          />
          <div>
            <p className={styles.list__text}>
              My film <span>(2022)</span>
            </p>
            <p className={styles.list__subtext}>
              Japan, <span>120 min</span>
            </p>
          </div>
          <p className={styles.list__text}>26.01.2022 13:32</p>
          <p className={styles.list__text}>9</p>
        </div>
      </article>
    </section>
  );
}

export default MyList;

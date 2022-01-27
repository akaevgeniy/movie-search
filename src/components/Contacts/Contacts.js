import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <section className={styles.block}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact us</h2>
        <p className={styles.subtitle}>
          <span className={styles.bold}>Telephone:</span> 89677914444
        </p>
        <p className={styles.subtitle}>
          <span className={styles.bold}>E-mail:</span> akaevgeniy@yandex.ru
        </p>
        <p className={styles.subtitle}>
          <span className={styles.bold}>Telegram:</span> @akaevgeniy
        </p>
        <p className={styles.subtitle}>
          <span className={styles.bold}>My Github:</span> https://github.com/akaevgeniy
        </p>
      </div>
      <form action="https://github.com/akaevgeniy/movie-search" target="_blank">
        <button className={styles.button}>See more</button>
      </form>
    </section>
  );
}

export default Contacts;

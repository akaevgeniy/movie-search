import React from 'react';
import styles from './About.module.css';
import photo from '../../images/me-photo.JPG';

function Contacts() {
  return (
    <section className={styles.block}>
      <div className={styles.about}>
        <div className={styles.text}>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.subtitle}>
            Hey! My name is Evgeniy. I am a beginner frontend developer. I am currently taking courses in web development. This is my first React
            Pet-project.
          </p>
          <p className={styles.subtitle}>
            In addition to developing, I enjoy playing the bass guitar, contemporary art and reading classical literature.
          </p>
          <p className={styles.info}>
            This site allows you to find any movie from open databases and keep track of the movies you've watched. The repository in github is
            available at the link "Go to..."
          </p>
        </div>
        <figure className={styles.figure}>
          <img className={styles.photo} src={photo} alt="It's me, Evgeniy Sergeev" />
          <figcaption className={styles.photo__text}>It's me, Evgeniy Sergeev</figcaption>
        </figure>
      </div>
      <button className={styles.button}>Go to repository</button>
    </section>
  );
}

export default Contacts;

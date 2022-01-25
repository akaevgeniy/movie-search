import React from 'react';
import styles from './Element.module.css';

function Element(props) {
  function handleClick() {
    props.openInfo(props.id);
  }

  return (
    <article className={styles.element} onClick={handleClick}>
      <div className={styles.list}>
        <img
          className={styles.image}
          src={props.poster}
          alt={props.title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = 'https://hd1.streamfilm.top/assets/general/images/no_poster.jpg';
          }}
        />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.title}>{props.year}</p>
        <p className={styles.title}>{props.type}</p>
      </div>
    </article>
  );
}

export default Element;

import React from 'react';
import styles from './Element.module.css';
import { useDispatch } from 'react-redux';
import { movieFinding } from '../../store/actions';

function Element({ id, poster, title, year, type }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(movieFinding(id));
  }

  return (
    <article className={styles.element} onClick={handleClick}>
      <div className={styles.list}>
        <img
          className={styles.image}
          src={poster}
          alt={title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = 'https://hd1.streamfilm.top/assets/general/images/no_poster.jpg';
          }}
        />
        <p className={styles.title}>{title}</p>
        <p className={styles.title}>{year}</p>
        <p className={styles.title}>{type}</p>
      </div>
    </article>
  );
}

export default Element;

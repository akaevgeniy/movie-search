import React from 'react';
import styles from './Element.module.css';

function Element(props) {
  //   const currentUser = React.useContext(CurrentUserContext);
  //   // Определяем, являемся ли мы владельцем текущей карточки
  //   const isOwn = props.card.owner._id === currentUser._id;
  //   // Создаём переменную, которую после зададим в `className` для кнопки удаления
  //   const cardDeleteButtonClassName = `element__delete ${isOwn ? '' : 'element__delete_is-hidden'}`;
  //   // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  //   const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  //   // Создаём переменную, которую после зададим в `className` для кнопки лайка
  //   const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;
  //   //функция, откывающая попап с изображением, вызывается при нажатии на фото карточки
  //   function handleClick() {
  //     props.onCardClick(props.card);
  //   }
  //   //обработчик клика по кнопке лайка, вызываем из него onCardLike с аргументом card
  //   function handleLikeClick() {
  //     props.onCardLike(props.card);
  //   }
  //   //обработчик клика по удаления карточки, передаем карточку для удаления
  //   function handleDeleteClick() {
  //     props.onCardDeleteClick(props.card);
  //   }
  return (
    <article className={styles.element}>
      <div className={styles.list}>
        <img className={styles.image} src="http://www.prdisk.ru/images/ne_smotrite_naverkh_dvd_dvd_r_dvd_r_f3d_big.jpeg" alt="Movie see" />
        <p className={styles.title}>Don't look up</p>
        <p className={styles.year}>2021</p>
      </div>
    </article>
  );
}

export default Element;

import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuVisible } from '../../store/actions';

function Menu({ header, items }) {
  const active = useSelector((state) => {
    const { menuReducer } = state;
    return menuReducer.visible;
  });

  const dispatch = useDispatch();

  const changeActive = () => {
    dispatch(menuVisible(active));
  };

  return (
    <div className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
      <div className={styles.menu__block}>
        <h4 className={styles.menu__header}>{header}</h4>
        <ul className={styles.menu__lists}>
          {items.map((item) => (
            <NavLink className={styles.menu__link} onClick={() => changeActive()} key={item.href} to={item.href}>
              {item.value}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Menu;

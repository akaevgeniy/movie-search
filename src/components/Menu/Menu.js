import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuVisible } from '../../store/actions';

function Menu() {
  const items = [
    { value: 'Search movie', href: '/' },
    { value: 'Watch List', href: '/list' },
    { value: 'About us', href: '/about' },
    { value: 'Contacts', href: '/contacts' },
  ];
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
        <h4 className={styles.menu__header}>Menu</h4>
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

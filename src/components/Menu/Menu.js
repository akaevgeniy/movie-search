import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Menu.module.css';
function Menu({ header, items, active, changeActive }) {
  return (
    <div className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
      <div className={styles.menu__block}>
        <h4 className={styles.menu__header}>{header}</h4>
        <ul className={styles.menu__lists}>
          {items.map((item) => (
            <NavLink className={styles.menu__link} onClick={() => changeActive(!active)} key={item.href} to={item.href}>
              {item.value}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Menu;

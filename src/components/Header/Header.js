import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import styles from './Header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        ALL movies search
      </NavLink>
      <nav className={styles.menu__list}>
        <NavLink className={styles.menu__link} to="/">
          Search movie
        </NavLink>
        <NavLink className={styles.menu__link} to="/list">
          Watch List
        </NavLink>

        <NavLink className={styles.menu__link} to="/about">
          About the site
        </NavLink>

        <NavLink className={styles.menu__link} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

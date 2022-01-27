import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './Header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img className={styles.logo_image} src={logo} alt="logo" />
      </NavLink>
      <nav className={styles.menu__list}>
        <NavLink className={styles.menu__link} to="/">
          Search movie
        </NavLink>
        <NavLink className={styles.menu__link} to="/list">
          Watch List
        </NavLink>

        <NavLink className={styles.menu__link} to="/about">
          About us
        </NavLink>

        <NavLink className={styles.menu__link} to="/contacts">
          Contacts
        </NavLink>
        <button className={styles.hamburger_button}></button>
      </nav>
    </header>
  );
}

export default Header;

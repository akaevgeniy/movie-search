import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuVisible } from '../../store/actions';

function Header() {
  const active = useSelector((state) => {
    const { menuReducer } = state;
    return menuReducer.visible;
  });

  const dispatch = useDispatch();

  const changeActive = () => {
    dispatch(menuVisible(active));
  };

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
        <nav className={styles.navbar}>
          <button className={active ? `${styles.hamburger_button} ${styles.active}` : `${styles.hamburger_button}`} onClick={() => changeActive()}>
            <span className={active ? `${styles.button__span} ${styles.active}` : `${styles.button__span}`}></span>
          </button>
        </nav>
      </nav>
    </header>
  );
}

export default Header;

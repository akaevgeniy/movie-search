import styles from './Footer.module.css';
import inst_icon from '../../images/foot-inst.png';
import teleg_icon from '../../images/foot-telegram.png';
import vk_icon from '../../images/foot-vk.png';
function Footer() {
  return (
    <footer className={styles.block}>
      <nav className={styles.links}>
        <a href="https://www.instagram.com/whitechuvash/" target="_blank">
          <img className={styles.icon} src={inst_icon} alt="Instagram" />
        </a>
        <a href="https://vk.com/whitechuvash" target="_blank">
          <img className={styles.icon} src={vk_icon} alt="VK" />{' '}
        </a>
        <a href="https://t-do.ru/akaevgeniy" target="_blank">
          <img className={styles.icon} src={teleg_icon} alt="Telegram" />
        </a>
      </nav>
      <p className={styles.text}>&copy; 2022 ALL movies search</p>
    </footer>
  );
}

export default Footer;

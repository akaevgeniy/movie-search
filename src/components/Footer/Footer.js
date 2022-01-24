import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.block}>
      <p className={styles.text}>&copy; 2022 ALL movies search</p>
    </footer>
  );
}

export default Footer;

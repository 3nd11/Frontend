import styles from "./index.module.css";

function footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div className={styles.footer__style}>
          <h1 className={styles.footer__brand}>Movie App</h1>
          <p className={styles.footer__subbrand}>Developed By 3nd11</p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Home</li>
            <li className={styles.footer__item}>Add Movie</li>
            <li className={styles.footer__item}>Popular</li>
            <li className={styles.footer__item}>Now Playing</li>
            <li className={styles.footer__item}>Top Rated</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default footer;

import styles from "./index.module.css";
import Heroes from  "../Asset/Heroes.png";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <h3 className={styles.hero__subtitle}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__deskripsi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <div className={styles.button}>
            <button className={styles.button__style}>Vaksin</button>
          </div>
        </div>
        <div className={styles.herp__right}>
          <img className={styles.hero__img} src={Heroes}></img>
        </div>
      </section>
    </div>
  );
}

export default Hero;

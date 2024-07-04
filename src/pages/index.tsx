import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Word Cascade</h1>
        <p className={styles.subtitle}>
          A simple typing game for students at Try Angle Kids.
        </p>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionHeading}>About Word Cascade</h2>
          <p className={styles.text}>
            Word Cascade is designed to help students practice their typing
            skills, improve precision, and reinforce their vocabulary. It&apos;s
            an engaging and educational game that makes learning fun.
          </p>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionHeading}>Features</h2>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              Improve typing speed and accuracy
            </li>
            <li className={styles.featureItem}>Expand vocabulary</li>
            <li className={styles.featureItem}>Fun and interactive gameplay</li>
          </ul>
        </section>

        <section className={styles.callToActionSection}>
          <h2 className={styles.sectionHeading}>Get Started</h2>
          <p className={styles.text}>
            Join us at Try Angle Kids and start improving your typing skills
            today!
          </p>
          <button className={styles.startButton}>Start Playing</button>
        </section>
      </main>
    </div>
  );
}

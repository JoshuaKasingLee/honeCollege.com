import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <img src={process.env.PUBLIC_URL + '/honelogo.png'} alt="Hone College Learning" className={styles.logo} />
          <span className={styles.logoText}>Hone College Learning</span>
        </div>
        <div className={styles.right}>
          <div className={styles.phone}>0422 883 664</div>
          <a href="#book-trial" className={styles.bookBtn}>
            Book Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}

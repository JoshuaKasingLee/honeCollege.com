import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Hone College Learning</h3>
          <p>
            Expert Mathematics tutoring from Year 3 to Year 11. Small classes. Real results.
          </p>
          <div className={styles.links}>
            <a href="https://linktr.ee/honecollegelearning" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://linktr.ee/honecollegelearning" target="_blank" rel="noopener noreferrer">
              Linktree
            </a>
          </div>
        </div>
        <div className={styles.subjects}>
          <h4>SUBJECTS</h4>
          <ul>
            <li>Year 3-6 (Primary)</li>
            <li>Year 7-8</li>
            <li>Year 9-10</li>
            <li>Year 11 Standard</li>
            <li>Year 11 Advanced (2U)</li>
            <li>Year 11 Extension 1 (3U)</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>CONTACT</h4>
          <a href="tel:0422883664" className={styles.phone}>
            0422 883 664
          </a>
          <a href="mailto:honecollegelearning@gmail.com" className={styles.email}>
            honecollegelearning@gmail.com
          </a>
          <div className={styles.location}>Lidcombe, Sydney NSW</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>© 2025 Hone College Learning. All rights reserved.</div>
        <div>Mathematics from Year 3 to Year 11</div>
      </div>
    </footer>
  );
}

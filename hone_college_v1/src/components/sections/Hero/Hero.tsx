import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>Sydney's Trusted Mathematics Tutoring</div>
          <h1>Build Real Maths Confidence.</h1>
          <p>
            From Year 3 to Year 11 — expert small-group and 1-on-1 tutoring in Lidcombe, Sydney.
          </p>
          <div className={styles.buttons}>
            <a href="#book-trial" className={styles.primaryButton}>
              Book Your Free Trial
            </a>
            <a href="#pricing" className={styles.secondaryButton}>
              View Pricing
            </a>
          </div>
          <div className={styles.reassurance}>
            ✓ First lesson is always free &nbsp;&nbsp; ✓ No lock-in contracts
          </div>
        </div>
        <div className={styles.imagePlaceholder}>
          <img src={process.env.PUBLIC_URL + '/PicTutor.8419991077b25a711dc6.jpg'} alt="Mathematics Tutor" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}

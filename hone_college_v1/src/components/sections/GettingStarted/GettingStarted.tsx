import React from "react";
import styles from "./GettingStarted.module.css";

export default function GettingStarted() {
  return (
    <section className={styles.gettingStarted}>
      <div className={styles.container}>
        <h2>Getting Started is Easy</h2>
        <p>Follow these simple steps to enroll your child in our maths tutoring program.</p>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.number}>1</div>
            <h3>Book Your Free Trial</h3>
            <p>Contact us to schedule a complimentary lesson. No commitment required.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.number}>2</div>
            <h3>Assess & Match</h3>
            <p>We'll evaluate your child's needs and match them with the perfect tutor and program.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.number}>3</div>
            <h3>Start Learning</h3>
            <p>Begin weekly sessions with ongoing support and progress tracking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

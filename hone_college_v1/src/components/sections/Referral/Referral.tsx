import React from "react";
import styles from "./Referral.module.css";

export default function Referral() {
  return (
    <section className={styles.referral}>
      <div className={styles.container}>
        <div className={styles.label}>STUDENT REFERRAL PROGRAM</div>
        <h2>$100 Off for Every Friend You Refer</h2>
        <p>
          When you refer a friend who stays for 5 weeks, you get $100 off your next term. Refer 2 friends — save $200. Refer 3 — save $300. There's no cap.
        </p>
      </div>
    </section>
  );
}

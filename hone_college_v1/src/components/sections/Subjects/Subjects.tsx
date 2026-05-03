import React from "react";
import styles from "./Subjects.module.css";

export default function Subjects() {
  return (
    <section className={styles.subjects}>
      <div className={styles.container}>
        <h2>What We Teach</h2>
        <p>
          Mathematics from Year 3 through Year 11 — covering Primary, Standard, Advanced, and Extension.
        </p>
        <div className={styles.pills}>
          <span className={styles.pill}>Year 3-6 (Primary)</span>
          <span className={styles.pill}>Year 7-8</span>
          <span className={styles.pill}>Year 9-10</span>
          <span className={styles.pill}>Year 11 Standard</span>
          <span className={styles.pill}>Year 11 Advanced (2U)</span>
          <span className={styles.pill}>Year 11 Extension 1 (3U)</span>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Students Taught</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>Pass Rate</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>8</div>
            <div className={styles.statLabel}>Max Class Size</div>
          </div>
        </div>
        <div className={styles.note}>
          📍 Classes held in Lidcombe, Sydney · Following the NSW Mathematics Curriculum
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the option that works for your family. No surprises.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.label}>1-ON-1 · INDIVIDUAL</div>
            <div className={styles.price}>
              $70<span>/hr</span>
            </div>
            <div className={styles.billing}>Billed per session</div>
            <div className={styles.divider}></div>
            <ul className={styles.features}>
              <li>✓ Fully personalised lesson</li>
              <li>✓ Student sets the pace</li>
              <li>✓ Any topic, any time</li>
              <li>✓ Ideal for targeted catch-up</li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.popular}`}>
            <div className={styles.badge}>Most Popular</div>
            <div className={styles.label}>GROUP · NO LOCK-IN</div>
            <div className={styles.price}>
              $45<span>/hr</span>
            </div>
            <div className={styles.billing}>Pay as you go — no commitment</div>
            <div className={styles.divider}></div>
            <ul className={styles.features}>
              <li>✓ Small group class</li>
              <li>✓ Come and go as needed</li>
              <li>✓ Best entry point for new families</li>
              <li>✓ Same quality as term plan</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>GROUP · TERM PLAN</div>
            <div className={styles.price}>
              $40<span>/hr</span>
            </div>
            <div className={styles.billing}>Billed per 10-week term</div>
            <div className={styles.divider}></div>
            <ul className={styles.features}>
              <li>✓ Small group class</li>
              <li>✓ Best value — save $5/hr vs no lock-in</li>
              <li>✓ Consistent weekly schedule</li>
              <li>✓ Stable cohort builds momentum</li>
            </ul>
          </div>
        </div>
        <div className={styles.summary}>
          <p>What a term costs in total — assuming 1 hour weekly over 10 weeks:</p>
          <p>
            <strong>Individual: $700 · Group no lock-in: $450 · Group term plan: $400</strong>
          </p>
        </div>
        <div className={styles.cta}>
          <a href="#book-trial">Every plan includes a free first lesson →</a>
        </div>
      </div>
    </section>
  );
}

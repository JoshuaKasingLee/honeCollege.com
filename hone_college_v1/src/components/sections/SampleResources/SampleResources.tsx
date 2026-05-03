import React from "react";
import styles from "./SampleResources.module.css";

export default function SampleResources() {
  return (
    <section className={styles.sampleResources}>
      <div className={styles.container}>
        <h2>Top-Tier Learning Resources</h2>
        <p>Our booklets are built for NSW exam performance — not generic textbook content.</p>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3>We care about the details.</h3>
            <p>
              Every booklet is written and refined in-house. Students get concise theory explanations, worked examples, and hundreds of exam-style questions. It's the only resource they need.
            </p>
            <ul>
              <li>✓ Aligned to NSW Mathematics Syllabus</li>
              <li>✓ Worked solutions included</li>
              <li>✓ Progressive difficulty — builds exam readiness</li>
              <li>✓ Students keep the booklets permanently</li>
            </ul>
            <a href="/sample.pdf" target="_blank" rel="noreferrer" className={styles.button}>
              View Sample PDF
            </a>
          </div>
          <div className={styles.placeholder}>
            <embed src={process.env.PUBLIC_URL + '/sample.pdf'} type="application/pdf" className={styles.pdfViewer} />
          </div>
        </div>
      </div>
    </section>
  );
}

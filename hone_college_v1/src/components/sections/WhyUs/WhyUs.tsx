import React from "react";
import styles from "./WhyUs.module.css";

const features = [
  {
    icon: "Target",
    title: "Small Classes, Real Attention",
    desc: "Max 8 students per class. Every student gets noticed, not just a seat in a large room.",
  },
  {
    icon: "Resources",
    title: "Structured Resources",
    desc: "Topic booklets with clear theory, worked examples, and NSW exam-style questions. Students keep them forever.",
  },
  {
    icon: "Support",
    title: "Support Between Lessons",
    desc: "Students can message their tutor during the week. Questions don't wait until next class.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <h2>Why Families Choose Hone</h2>
        <p>We keep classes small, resources strong, and support ongoing.</p>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.imagePlaceholder}></div>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

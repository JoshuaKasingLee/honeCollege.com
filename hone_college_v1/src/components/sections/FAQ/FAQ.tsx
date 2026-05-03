import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Where are classes held?",
    answer: "All classes are at our Lidcombe location in Sydney. We'll confirm the exact address when you book your trial."
  },
  {
    question: "How much does it cost?",
    answer: "Group classes start from $40/hr (term plan) or $45/hr (no lock-in). 1-on-1 tutoring is $70/hr. See the pricing section above for full details."
  },
  {
    question: "What year groups do you tutor?",
    answer: "We teach Mathematics from Year 3 through to Year 11, including Standard, Advanced (2U), and Extension 1 (3U)."
  },
  {
    question: "What is the class size?",
    answer: "Small group classes have a maximum of 8 students. We don't run lecture-style rooms."
  },
  {
    question: "What does the free trial include?",
    answer: "A 1.5 hour lesson — It's designed so you can genuinely assess quality before committing."
  },
  {
    question: "How does the referral discount work?",
    answer: "Refer a friend who attends for 5 weeks and you receive $100 off your next term. No cap — refer more, save more."
  },
  {
    question: "Do you follow the NSW curriculum?",
    answer: "Yes. All content is aligned to the NSW Mathematics Syllabus and prepares students for school assessments."
  },
  {
    question: "How do I get in touch outside of class?",
    answer: "Students can message their tutor directly during the week. You can also reach us at honecollegelearning@gmail.com or call 0422 883 664."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.questionRow} onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className={styles.toggle}>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <p className={styles.answer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

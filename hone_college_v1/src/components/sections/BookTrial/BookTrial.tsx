import React, { useState } from "react";
import styles from "./BookTrial.module.css";

export default function BookTrial() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY ?? "");
    formData.append("subject", "New Trial Booking — Hone College Learning");

    if (!process.env.REACT_APP_WEB3FORMS_KEY) {
      console.warn("Web3Forms key missing — check your .env file");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("success");
      formElement.reset();
      return;
    }

    setResult("error");
  };

  return (
    <section id="book-trial" className={styles.bookTrial}>
      <div className={styles.container}>
        <h2>Book Your Free Trial Lesson</h2>
        <p>Every new student gets a full free lesson — not a short intro. No commitment required.</p>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="e.g. Sarah Chen" required />
          </div>
          <div className={styles.field}>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className={styles.field}>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="04XX XXX XXX" />
          </div>
          <div className={styles.field}>
            <label>Student's Year Group</label>
            <select name="year_group" required>
              <option value="">Select year group</option>
              <option>Year 3-6 (Primary)</option>
              <option>Year 7-8</option>
              <option>Year 9-10</option>
              <option>Year 11 Standard</option>
              <option>Year 11 Advanced (2U)</option>
              <option>Year 11 Extension 1 (3U)</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Message (optional)</label>
            <textarea name="message" rows={3} placeholder="Any questions or context for us?"></textarea>
          </div>
          <button type="submit" disabled={loading} className={styles.submitButton}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {result === "success" && (
          <div className={styles.success}>
            ✓ Booking received! We'll be in touch within 24 hours to confirm your free trial.
          </div>
        )}
        {result === "error" && (
          <div className={styles.error}>
            Something went wrong. Please email us at honecollegelearning@gmail.com
          </div>
        )}
      </div>
    </section>
  );
}

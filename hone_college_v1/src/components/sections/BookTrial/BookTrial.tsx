import React, { useState } from "react";
import styles from "./BookTrial.module.css";

export default function BookTrial() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childYear: "",
    subjects: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.childName || !formData.childYear) {
      setError("Please fill in all required fields.");
      return;
    }

    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        childName: "",
        childYear: "",
        subjects: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className={styles.bookTrial} id="book-trial">
      <div className={styles.container}>
        <h2>Book Your Free Trial</h2>
        <p>Get started with a complimentary lesson. Fill out the form below and we'll be in touch.</p>

        {submitted && <div className={styles.success}>Thank you! We'll contact you shortly to confirm your trial lesson.</div>}
        {error && <div className={styles.error}>{error}</div>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(02) 1234 5678"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="childName">Child's Name *</label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="Jane Doe"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="childYear">Year Level *</label>
            <select
              id="childYear"
              name="childYear"
              value={formData.childYear}
              onChange={handleChange}
            >
              <option value="">Select Year Level</option>
              <option value="year-3">Year 3</option>
              <option value="year-4">Year 4</option>
              <option value="year-5">Year 5</option>
              <option value="year-6">Year 6</option>
              <option value="year-7">Year 7</option>
              <option value="year-8">Year 8</option>
              <option value="year-9">Year 9</option>
              <option value="year-10">Year 10</option>
              <option value="year-11">Year 11</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="subjects">Subjects of Interest</label>
            <select
              id="subjects"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option value="arithmetic">Arithmetic</option>
              <option value="algebra">Algebra</option>
              <option value="geometry">Geometry</option>
              <option value="trigonometry">Trigonometry</option>
              <option value="calculus">Calculus</option>
              <option value="general">General Mathematics</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your child's learning needs..."
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Book Your Free Trial
          </button>
        </form>
      </div>
    </section>
  );
}

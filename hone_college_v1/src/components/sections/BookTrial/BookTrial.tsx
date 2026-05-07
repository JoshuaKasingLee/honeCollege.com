import React, { useState } from "react";
import styles from "./BookTrial.module.css";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "ed5d4931-dd16-4130-ac26-9b0e83dc5647";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  childName: "",
  childYear: "",
  subjects: "",
  message: "",
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export default function BookTrial() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setError("");
    setSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!formData.name || !formData.email || !formData.childName || !formData.childYear) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setError("Web3Forms access key is missing. Add REACT_APP_WEB3FORMS_ACCESS_KEY to your environment.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New free trial booking from Hone College Learning",
          from_name: "Hone College Learning Website",
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          "Child Name": formData.childName.trim(),
          "Year Level": formData.childYear,
          "Subjects of Interest": formData.subjects || "Not specified",
          message: formData.message.trim() || "No additional message provided.",
          botcheck: false,
        }),
      });

      let result: Web3FormsResponse = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Could not send your request. Please try again.");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.bookTrial} id="book-trial">
      <div className={styles.container}>
        <h2>Book Your Free Trial</h2>
        <p>Get started with a complimentary lesson. Fill out the form below and we'll be in touch.</p>

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
              required
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
              required
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
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="childYear">Year Level *</label>
            <select
              id="childYear"
              name="childYear"
              value={formData.childYear}
              onChange={handleChange}
              required
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

          {submitted && <div className={styles.success} role="status">Thank you! We'll contact you shortly to confirm your trial lesson.</div>}
          {error && <div className={styles.error} role="alert">{error}</div>}

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Book Your Free Trial"}
          </button>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

import "./ContactForm.css";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: [
      "Rudd Private Limited",
      "Ranisal, Purba Medinipur",
      "West Bengal – 721446, India",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [
      "+91 XXXXX XXXXX",
      "Mon – Sat, 9:00 AM – 6:00 PM",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      "info@ruddprivatelimited.com",
      "We'll respond within 24 hours",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [
      "Monday – Saturday",
      "9:00 AM – 6:00 PM (IST)",
    ],
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-section-label">
            <span />
            <span>GET IN TOUCH</span>
          </div>

          <h2>Get In Touch</h2>

          <p className="contact-info-intro">
            We'd love to hear from you. Reach out to us using the information
            below or fill out the contact form.
          </p>

          <div className="contact-details">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <motion.div
                  className="contact-detail"
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="contact-detail-icon">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>

                  <div className="contact-detail-content">
                    <h3>{detail.title}</h3>

                    {detail.lines.map((line, lineIndex) => (
                      <span key={lineIndex}>{line}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="contact-message-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-section-label">
            <span />
            <span>SEND US A MESSAGE</span>
          </div>

          <h2>Send Us a Message</h2>

          <p className="contact-message-intro">
            Fill out the form below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="subject">
                  Subject <span>*</span>
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select subject</option>
                  <option value="general">General Enquiry</option>
                  <option value="services">Services</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="contact-field contact-message-field">
              <label htmlFor="message">
                Your Message <span>*</span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div className="contact-form-actions">
              <motion.button
                type="submit"
                className="contact-submit-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                <span>Send Message</span>
                <ArrowRight size={17} />
              </motion.button>

              {submitted && (
                <motion.span
                  className="contact-form-success"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Message ready to be sent.
                </motion.span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
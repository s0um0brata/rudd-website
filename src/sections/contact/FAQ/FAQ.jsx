"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ArrowRight } from "lucide-react";

import "./FAQ.css";

const faqs = [
  {
    question: "How can I get a quote for your services?",
    answer:
      "Contact our team through the contact form or reach out using the details provided above. We'll understand your requirements and get back to you with the next steps.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We can provide ongoing technical support and maintenance after your project has been delivered.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across different industries and tailor our digital solutions according to their individual requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment arrangements can vary depending on the project. Our team will discuss the applicable payment terms with you before the project begins.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope and complexity of the work. After understanding your requirements, we'll provide an estimated timeline.",
  },
  {
    question: "How can I apply for a job at Rudd Private Limited?",
    answer:
      "You can contact us with your profile and relevant experience. We'll share available opportunities when they match your skills and requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="faq-label">
              <span />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2>Frequently Asked Questions</h2>

            <p>
              Find answers to common questions about our services, process and
              more.
            </p>
          </div>

          <a href="#" className="faq-view-all">
            <span>View All FAQs</span>
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <motion.span
                    className="faq-plus"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
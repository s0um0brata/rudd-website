"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

import "./ResumeCTA.css";

export default function ResumeCTA() {
  return (
    <section className="resume-cta-section" id="apply">
      <motion.div
        className="resume-cta"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="resume-cta-background" />

        <motion.div
          className="resume-cta-icon"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.06 }}
        >
          <Mail size={30} />
        </motion.div>

        <div className="resume-cta-content">
          <span>Don&apos;t See a Right Fit?</span>

          <h2>Send Us Your Resume</h2>

          <p>
            We&apos;re always looking for talented individuals who are
            passionate about making a difference. If you don&apos;t see a
            suitable role, feel free to send us your resume. We&apos;ll keep
            you in mind for future opportunities.
          </p>
        </div>

        <motion.a
          href="mailto:info@ruddprivatelimited.com?subject=Career%20Application"
          className="resume-cta-button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Send Resume</span>
          <ArrowRight size={17} />
        </motion.a>
      </motion.div>
    </section>
  );
}
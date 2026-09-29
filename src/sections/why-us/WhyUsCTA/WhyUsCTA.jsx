"use client";

import { motion } from "motion/react";
import { ArrowRight, Laptop } from "lucide-react";

import "./WhyUsCTA.css";

export default function WhyUsCTA() {
  return (
    <section className="why-us-cta-section">
      <motion.div
        className="why-us-cta"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="why-us-cta-bg" />

        <div className="why-us-cta-visual">
          <div className="cta-desk" />

          <div className="cta-laptop">
            <div className="cta-screen">
              <Laptop size={38} />
            </div>
            <div className="cta-laptop-base" />
          </div>

          <div className="cta-plant">
            <span />
            <span />
            <span />
            <span />
            <div />
          </div>
        </div>

        <div className="why-us-cta-content">
          <div className="why-us-cta-label">
            <span />
            <span>LET'S BUILD TOGETHER</span>
          </div>

          <h2>Your Success, Our Commitment</h2>

          <p>
            Partner with Rudd Private Limited and take your business to the
            next level with innovative digital solutions.
          </p>
        </div>

        <motion.a
          href="/contact"
          className="why-us-cta-button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Get In Touch</span>
          <ArrowRight size={17} />
        </motion.a>
      </motion.div>
    </section>
  );
}
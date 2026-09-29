"use client";

import { motion } from "motion/react";
import { ArrowRight, Laptop } from "lucide-react";

import "./ServicesCTA.css";

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta-container">
        <motion.div
          className="services-cta-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-cta-glow" />

          <div className="services-cta-device">
            <Laptop size={58} strokeWidth={1.4} />
          </div>

          <div className="services-cta-decoration decoration-one" />
          <div className="services-cta-decoration decoration-two" />
          <div className="services-cta-decoration decoration-three" />
        </motion.div>

        <motion.div
          className="services-cta-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-cta-label">
            <span />
            <span>READY TO GET STARTED?</span>
          </div>

          <h2>Let's Build Your Digital Future</h2>

          <p>
            Explore our eServices and take your business to the next level.
          </p>

          <motion.a
            href="/contact"
            className="services-cta-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
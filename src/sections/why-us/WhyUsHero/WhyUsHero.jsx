"use client";

import { motion } from "motion/react";
import { Laptop, Coffee, ArrowRight } from "lucide-react";

import "./WhyUsHero.css";

export default function WhyUsHero() {
  return (
    <section className="why-us-hero">
      <div className="why-us-hero-background" />

      <div className="why-us-hero-container">
        <motion.div
          className="why-us-hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="why-us-hero-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span />
            <span>WHY US</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Why Choose
            <br />
            <span>Rudd Private Limited?</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Success Is Our Priority
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We go beyond just delivering services — we build long-term
            partnerships. With a commitment to quality, innovation and
            customer satisfaction, we help businesses grow, adapt and
            succeed in the digital era.
          </motion.p>
        </motion.div>

        <motion.div
          className="why-us-hero-visual"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="why-us-glow" />

          <div className="why-us-desk">
            <div className="why-us-plant">
              <div className="plant-pot" />

              <span className="leaf leaf-1" />
              <span className="leaf leaf-2" />
              <span className="leaf leaf-3" />
              <span className="leaf leaf-4" />
              <span className="leaf leaf-5" />
              <span className="leaf leaf-6" />
            </div>

            <div className="why-us-notebook">
              <div />
            </div>

            <div className="why-us-pen" />

            <div className="why-us-laptop">
              <div className="why-us-laptop-screen">
                <div className="why-us-logo">
                  <div className="why-us-logo-mark">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div>
                    <strong>RUDD</strong>
                    <small>PRIVATE LIMITED</small>
                  </div>
                </div>
              </div>

              <div className="why-us-laptop-base" />
            </div>

            <div className="why-us-cup">
              <Coffee size={24} />
            </div>
          </div>

          <motion.div
            className="why-us-floating-icon floating-laptop"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Laptop size={20} />
          </motion.div>

          <motion.div
            className="why-us-floating-line line-one"
            animate={{ opacity: [0.35, 0.8, 0.35] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="why-us-floating-line line-two"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
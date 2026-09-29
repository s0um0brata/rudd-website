"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Coffee,
  Laptop,
} from "lucide-react";

import "./CareersHero.css";

export default function CareersHero() {
  return (
    <section className="careers-hero">
      <div className="careers-hero-bg" />

      <div className="careers-hero-container">
        <motion.div
          className="careers-hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="careers-hero-label">
            <span />
            <span>CAREERS</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Build Your Future
            <br />
            <span>With Rudd</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Great People Build Great Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            We believe that our people are our greatest asset. At Rudd
            Private Limited, we offer a supportive work culture, exciting
            opportunities and a platform to grow your career while making a
            real impact.
          </motion.p>

          <motion.a
            href="#open-positions"
            className="careers-hero-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Open Positions</span>
            <ArrowRight size={17} />
          </motion.a>
        </motion.div>

        <motion.div
          className="careers-hero-visual"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="careers-hero-glow" />

          <div className="career-desk">
            <div className="career-notebook">
              <span>CAREER</span>
            </div>

            <div className="career-pen" />

            <div className="career-plant">
              <span className="career-leaf leaf-a" />
              <span className="career-leaf leaf-b" />
              <span className="career-leaf leaf-c" />
              <span className="career-leaf leaf-d" />
              <span className="career-leaf leaf-e" />
              <div className="career-pot" />
            </div>

            <div className="career-laptop">
              <div className="career-screen">
                <div className="career-rudd-logo">
                  <div className="career-logo-mark">
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

              <div className="career-laptop-base" />
            </div>

            <div className="career-cup">
              <Coffee size={22} />
              <span>Better<br />Together</span>
            </div>
          </div>

          <motion.div
            className="career-floating-laptop"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Laptop size={19} />
          </motion.div>

          <motion.div
            className="career-check-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div>
              <Check size={14} />
              <span>Learn</span>
            </div>

            <div>
              <Check size={14} />
              <span>Grow</span>
            </div>

            <div>
              <Check size={14} />
              <span>Succeed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
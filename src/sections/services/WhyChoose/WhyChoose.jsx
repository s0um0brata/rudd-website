"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Gauge,
  BarChart3,
  Headphones,
  ArrowRight,
} from "lucide-react";

import "./WhyChoose.css";

const features = [
  {
    title: "Data Security",
    description: "Your data is always protected.",
    icon: ShieldCheck,
  },
  {
    title: "High Performance",
    description: "Fast, reliable and efficient.",
    icon: Gauge,
  },
  {
    title: "Scalable Solutions",
    description: "Grows with your business.",
    icon: BarChart3,
  },
  {
    title: "Expert Support",
    description: "Real people, real help.",
    icon: Headphones,
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose-pattern" />

      <div className="why-choose-container">
        <motion.div
          className="why-choose-intro"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="why-choose-label">
            <span />
            <span>WHY CHOOSE OUR eSERVICES</span>
          </div>

          <h2>Reliable. Secure. Scalable.</h2>

          <p>
            Our eServices are designed with your success in mind. We combine
            technology, expertise and customer support to deliver the best
            digital experience.
          </p>

          <motion.a
            href="#contact"
            className="why-choose-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn More</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <div className="why-choose-features">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                className="why-feature"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  className="why-feature-icon"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                >
                  <Icon size={30} strokeWidth={1.8} />
                </motion.div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
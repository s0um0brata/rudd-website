"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  Leaf,
  ArrowRight,
} from "lucide-react";

import "./WhyUsValues.css";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We turn ideas into impactful solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We build trust through honesty and transparency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We grow stronger together.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for quality in everything we do.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We create value for a better tomorrow.",
  },
];

export default function WhyUsValues() {
  return (
    <section className="why-us-values">
      <div className="why-us-values-container">
        <motion.div
          className="why-us-values-intro"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="why-us-values-label">
            <span />
            <span>OUR VALUES</span>
          </div>

          <h2>Our Core Values</h2>

          <p>
            These values guide our decisions, shape our culture, and help us
            deliver meaningful impact to our clients and partners.
          </p>

          <motion.a
            href="#"
            className="why-us-values-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn More</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <div className="why-us-values-list">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                className="why-us-value"
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <motion.div
                  className="why-us-value-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={27} strokeWidth={2} />
                </motion.div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
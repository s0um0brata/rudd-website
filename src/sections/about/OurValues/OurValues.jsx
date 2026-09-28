"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  Leaf,
} from "lucide-react";

import "./OurValues.css";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore new ideas and technologies to create smarter digital solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in honesty, transparency and building relationships based on trust.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients and partners to turn ideas into meaningful results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We focus on quality, reliability and delivering work that creates lasting value.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We believe technology should create long-term value for businesses, people and society.",
  },
];

export default function OurValues() {
  return (
    <section className="our-values">
      <div className="our-values-container">
        <motion.div
          className="our-values-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="our-values-label">OUR VALUES</span>

          <h2>What Drives Us</h2>

          <p>
            Our values shape the way we think, work and build meaningful
            technology for our clients.
          </p>
        </motion.div>

        <div className="our-values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                className="value-card"
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="value-card-number">
                  0{index + 1}
                </div>

                <div className="value-card-icon">
                  <Icon size={25} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <div className="value-card-line" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
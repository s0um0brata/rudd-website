"use client";

import { motion } from "motion/react";
import {
  Users,
  FileCheck,
  Clock3,
  Star,
  ArrowRight,
} from "lucide-react";

import "./OurImpact.css";

const impactStats = [
  {
    value: "100+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "500+",
    label: "Projects Delivered",
    icon: FileCheck,
  },
  {
    value: "24/7",
    label: "Support",
    icon: Clock3,
  },
  {
    value: "99%",
    label: "Customer Satisfaction",
    icon: Star,
  },
];

export default function OurImpact() {
  return (
    <section className="our-impact">
      <div className="impact-decoration impact-decoration-one" />
      <div className="impact-decoration impact-decoration-two" />

      <div className="our-impact-container">
        <motion.div
          className="impact-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="impact-label">
            <span />
            <span>OUR IMPACT</span>
          </div>

          <h2>
            Numbers That
            <br />
            Speak for Themselves
          </h2>

          <p>
            Our journey is powered by trust, innovation and the success of
            our clients.
          </p>

          <motion.a
            href="/contact"
            className="impact-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <div className="impact-stats">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="impact-stat"
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >
                <motion.div
                  className="impact-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={28} strokeWidth={2} />
                </motion.div>

                <motion.strong
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.12,
                  }}
                >
                  {stat.value}
                </motion.strong>

                <span>{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import {
  Users,
  BriefcaseBusiness,
  Headphones,
  Smile,
} from "lucide-react";

import "./AboutStats.css";

const stats = [
  {
    value: "100+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "500+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
  },
  {
    value: "24/7",
    label: "Support",
    icon: Headphones,
  },
  {
    value: "99%",
    label: "Customer Satisfaction",
    icon: Smile,
  },
];

export default function AboutStats() {
  return (
    <section className="about-stats">
      <div className="about-stats-container">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              className="about-stat"
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="about-stat-icon">
                <Icon size={24} />
              </div>

              <div className="about-stat-value">{stat.value}</div>

              <div className="about-stat-label">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  Settings,
  Headphones,
} from "lucide-react";

import "./OurAdvantages.css";

const advantages = [
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We stay ahead with modern technologies and creative solutions for a better tomorrow.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "Your data, your business, our responsibility. We ensure security and peace of mind.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A skilled and experienced team committed to delivering excellence in every project.",
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    description:
      "Your goals are our goals. We listen, understand and deliver solutions that fit your needs.",
  },
  {
    icon: Settings,
    title: "Scalable Solutions",
    description:
      "From startups to enterprises, our solutions grow with your business.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "We're always here for you — because your success never sleeps.",
  },
];

export default function OurAdvantages() {
  return (
    <section className="our-advantages">
      <div className="our-advantages-container">
        <motion.div
          className="advantages-intro"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="advantages-label">
            <span />
            <span>OUR ADVANTAGES</span>
          </div>

          <h2>What Makes Us Different?</h2>

          <p>
            We combine technology, talent and trust to deliver exceptional
            digital solutions.
          </p>
        </motion.div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <motion.article
                className="advantage-card"
                key={advantage.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="advantage-icon"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={29} strokeWidth={2} />
                </motion.div>

                <h3>{advantage.title}</h3>

                <p>{advantage.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
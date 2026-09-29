"use client";

import { motion } from "motion/react";
import {
  Users,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  Laptop,
  Star,
  ArrowRight,
} from "lucide-react";

import "./WhyJoinUs.css";

const benefits = [
  {
    icon: Users,
    title: "Supportive Team",
    description:
      "Work with talented, passionate and friendly colleagues.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Learn, develop and advance your career with us.",
  },
  {
    icon: Lightbulb,
    title: "Learning & Development",
    description:
      "Access to training and upskilling opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Wellbeing",
    description:
      "Your health and happiness matter to us.",
  },
  {
    icon: Laptop,
    title: "Modern Workspace",
    description:
      "Flexible and comfortable work environment.",
  },
  {
    icon: Star,
    title: "Recognition & Rewards",
    description:
      "Your hard work gets noticed and valued.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="why-join-us">
      <div className="why-join-us-container">
        <motion.div
          className="why-join-us-intro"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="why-join-us-label">
            <span />
            <span>WHY JOIN US</span>
          </div>

          <h2>More Than Just a Job</h2>

          <h3>We Offer a Place to Grow</h3>

          <p>
            At Rudd Private Limited, we value innovation, collaboration and
            continuous learning. We provide our team with the tools,
            resources and opportunities to build a successful and fulfilling
            career.
          </p>

          <motion.a
            href="#culture"
            className="why-join-us-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Our Culture</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <div className="why-join-us-benefits">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                className="why-join-us-card"
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="why-join-us-icon"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={27} strokeWidth={2} />
                </motion.div>

                <h4>{benefit.title}</h4>

                <p>{benefit.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
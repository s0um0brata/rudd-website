"use client";

import { motion } from "motion/react";
import {
  MessageSquare,
  Settings,
  CloudUpload,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your needs with our team.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Solution Design",
    description: "We create a plan that fits your goals.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Implementation",
    description: "We set it up for you, quickly and easily.",
    icon: CloudUpload,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "We're here whenever you need us.",
    icon: CircleCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <motion.div
          className="how-it-works-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="how-it-works-label">
            <span />
            <span>HOW IT WORKS</span>
          </div>

          <h2>Get Started in 4 Simple Steps</h2>

          <p>
            Our eServices process is designed to be easy, fast and
            hassle-free. Follow these simple steps and experience the power of
            digital solutions.
          </p>

          <motion.a
            href="#contact"
            className="how-it-works-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started Now</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <div className="how-it-works-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="how-step-wrapper"
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="how-step">
                  <motion.div
                    className="how-step-icon"
                    whileHover={{ scale: 1.08, rotate: 3 }}
                  >
                    <Icon size={31} strokeWidth={1.8} />
                  </motion.div>

                  <span className="how-step-number">{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="how-step-arrow">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
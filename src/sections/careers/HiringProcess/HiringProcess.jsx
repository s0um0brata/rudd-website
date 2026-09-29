"use client";

import { motion } from "motion/react";
import {
  FileText,
  Monitor,
  Users,
  CheckCircle2,
  Rocket,
  ArrowRight,
} from "lucide-react";

import "./HiringProcess.css";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply Online",
    description: "Submit your resume and cover letter.",
  },
  {
    icon: Monitor,
    number: "02",
    title: "Initial Screening",
    description: "Our team will review your profile.",
  },
  {
    icon: Users,
    number: "03",
    title: "Interview",
    description: "Meet with our hiring team (virtual or onsite).",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Offer",
    description: "If selected, you'll receive an offer from us.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Welcome Aboard",
    description: "Start your journey with Rudd!",
  },
];

export default function HiringProcess() {
  return (
    <section className="hiring-process">
      <div className="hiring-process-container">
        <motion.div
          className="hiring-process-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hiring-process-label">
            <span />
            <span>OUR HIRING PROCESS</span>
          </div>

          <h2>Simple Steps to Join Us</h2>

          <p>
            We keep the hiring process transparent, smooth and
            candidate-friendly.
          </p>
        </motion.div>

        <div className="hiring-process-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="hiring-process-step-wrap" key={step.number}>
                <motion.article
                  className="hiring-process-step"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <motion.div
                    className="hiring-process-icon"
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={27} strokeWidth={2} />
                  </motion.div>

                  <span className="hiring-process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </motion.article>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hiring-process-arrow"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.2,
                    }}
                  >
                    <ArrowRight size={21} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Megaphone,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";

import "./CurrentOpenings.css";

const jobs = [
  {
    icon: Code2,
    title: "Software Developer",
    location: "Hybrid / Remote",
    description:
      "Design and develop innovative solutions.",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    location: "On-site (Chennai)",
    description:
      "Create user-friendly and engaging designs.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Executive",
    location: "Remote",
    description:
      "Manage campaigns and grow our brand.",
  },
  {
    icon: Users,
    title: "Business Analyst",
    location: "On-site (Chennai)",
    description:
      "Analyze, solve and drive business growth.",
  },
];

export default function CurrentOpenings() {
  return (
    <section className="current-openings" id="open-positions">
      <div className="current-openings-container">
        <motion.div
          className="current-openings-intro"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="current-openings-label">
            <span />
            <span>OPEN POSITIONS</span>
          </div>

          <h2>Current Openings</h2>

          <p>
            Explore our latest job opportunities and take the next step in
            your career with Rudd Private Limited.
          </p>

          <motion.a
            href="#"
            className="current-openings-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Jobs</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <div className="current-openings-grid">
          {jobs.map((job, index) => {
            const Icon = job.icon;

            return (
              <motion.article
                className="job-card"
                key={job.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="job-card-icon">
                  <Icon size={25} strokeWidth={2} />
                </div>

                <h3>{job.title}</h3>

                <div className="job-location">
                  <MapPin size={12} />
                  <span>{job.location}</span>
                </div>

                <p>{job.description}</p>

                <a href="#apply">
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
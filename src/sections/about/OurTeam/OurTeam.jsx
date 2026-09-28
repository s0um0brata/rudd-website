"use client";

import { motion } from "motion/react";
import {
  Code2,
  Palette,
  BriefcaseBusiness,
  Headphones,
} from "lucide-react";

import "./OurTeam.css";

const teamMembers = [
  {
    icon: Code2,
    name: "Technology Team",
    role: "Development & Engineering",
    description:
      "Building reliable digital products and technology solutions with a focus on performance and scalability.",
  },
  {
    icon: Palette,
    name: "Creative Team",
    role: "Design & Experience",
    description:
      "Creating thoughtful interfaces and digital experiences that are simple, modern and engaging.",
  },
  {
    icon: BriefcaseBusiness,
    name: "Business Team",
    role: "Strategy & Operations",
    description:
      "Understanding business needs and transforming them into practical strategies and solutions.",
  },
  {
    icon: Headphones,
    name: "Support Team",
    role: "Customer Success",
    description:
      "Supporting our clients throughout their journey and helping them get lasting value from our solutions.",
  },
];

export default function OurTeam() {
  return (
    <section className="our-team">
      <div className="our-team-container">
        <motion.div
          className="our-team-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span>OUR TEAM</span>

          <h2>People Behind the Vision</h2>

          <p>
            Our people bring together technology, creativity, strategy and
            customer focus to turn ideas into meaningful digital solutions.
          </p>
        </motion.div>

        <div className="our-team-grid">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.article
                className="team-card"
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="team-card-top">
                  <div className="team-card-icon">
                    <Icon size={28} />
                  </div>

                  <span className="team-card-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{member.name}</h3>

                <div className="team-card-role">
                  {member.role}
                </div>

                <p>{member.description}</p>

                <div className="team-card-line" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="team-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="team-bottom-dot" />

          <p>
            One team. One vision. One commitment to building better
            technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
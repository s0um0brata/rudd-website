"use client";

import { motion } from "motion/react";
import { Target, Eye, ArrowUpRight } from "lucide-react";

import "./MissionVision.css";

const items = [
  {
    icon: Target,
    label: "OUR MISSION",
    title: "Turning Technology Into Real-World Value",
    description:
      "Our mission is to create practical, reliable and meaningful digital solutions that help businesses solve problems, improve operations and grow with confidence.",
  },
  {
    icon: Eye,
    label: "OUR VISION",
    title: "A Smarter Digital Future",
    description:
      "Our vision is to become a trusted technology partner known for innovation, quality and long-term impact while helping create a more connected digital world.",
  },
];

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">
        <motion.div
          className="mission-vision-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span>MISSION &amp; VISION</span>
          <h2>Where We Are Going</h2>
        </motion.div>

        <div className="mission-vision-grid">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`mission-card mission-card-${index + 1}`}
                key={item.label}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
              >
                <div className="mission-card-background">
                  <div className="mission-card-orbit mission-card-orbit-one" />
                  <div className="mission-card-orbit mission-card-orbit-two" />
                </div>

                <div className="mission-card-top">
                  <div className="mission-card-icon">
                    <Icon size={27} />
                  </div>

                  <ArrowUpRight
                    className="mission-card-arrow"
                    size={23}
                  />
                </div>

                <span className="mission-card-label">{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="mission-card-bottom">
                  <span>RUDD PRIVATE LIMITED</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
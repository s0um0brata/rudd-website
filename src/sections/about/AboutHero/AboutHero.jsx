"use client";

import { motion } from "motion/react";
import {
  Cloud,
  Code2,
  Globe2,
  ShieldCheck,
  Settings2,
  Smartphone,
} from "lucide-react";

import "./AboutHero.css";

const techItems = [
  {
    icon: Cloud,
    className: "tech-icon-cloud",
  },
  {
    icon: Code2,
    className: "tech-icon-code",
  },
  {
    icon: Globe2,
    className: "tech-icon-globe",
  },
  {
    icon: ShieldCheck,
    className: "tech-icon-shield",
  },
  {
    icon: Settings2,
    className: "tech-icon-settings",
  },
  {
    icon: Smartphone,
    className: "tech-icon-mobile",
  },
];

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Background lighting */}
      <div className="about-hero-glow about-hero-glow-one" />
      <div className="about-hero-glow about-hero-glow-two" />

      {/* Decorative blue curves */}
      <div className="about-hero-curve about-hero-curve-one" />
      <div className="about-hero-curve about-hero-curve-two" />

      {/* Technology background */}
      <div className="about-hero-tech">
        <motion.div
          className="about-hero-orbit orbit-one"
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="about-hero-orbit orbit-two"
          animate={{ rotate: -360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="about-hero-globe">
          <div className="globe-horizontal globe-horizontal-one" />
          <div className="globe-horizontal globe-horizontal-two" />
          <div className="globe-vertical globe-vertical-one" />
          <div className="globe-vertical globe-vertical-two" />
          <div className="globe-center" />
        </div>

        {techItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.className}
              className={`about-tech-icon ${item.className}`}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: [0.45, 1, 0.45],
                scale: [0.95, 1, 0.95],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: index * 0.45,
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="about-hero-container">
        <motion.div
          className="about-hero-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="about-hero-label"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            ABOUT US
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            RUDD Private Limited
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            Innovating Today for a Smarter Tomorrow
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.65,
            }}
          >
            We are a forward-thinking company committed to delivering
            innovative digital solutions and creating lasting value for our
            customers, partners and communities.
          </motion.p>

          <motion.div
            className="about-hero-accent"
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 90,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.85,
            }}
          />
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="about-hero-bottom-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,95 C260,170 450,20 700,70 C940,120 1120,155 1440,35 L1440,150 L0,150 Z"
          />
        </svg>
      </div>
    </section>
  );
}
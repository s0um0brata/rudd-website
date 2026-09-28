"use client";

import { motion } from "motion/react";
import {
  CloudUpload,
  Monitor,
  Globe2,
  Smartphone,
  Headphones,
  Settings2,
  ShieldCheck,
  FileBadge2,
  Building2,
} from "lucide-react";

import "./Hero.css";

const services = [
  {
    label: "Cloud App",
    icon: CloudUpload,
  },
  {
    label: "Desktop App",
    icon: Monitor,
  },
  {
    label: "Website",
    icon: Globe2,
  },
  {
    label: "Mobile App",
    icon: Smartphone,
  },
  {
    label: "Support",
    icon: Headphones,
  },
  {
    label: "Manage",
    icon: Settings2,
  },
  {
    label: "Lifetime Support",
    icon: ShieldCheck,
  },
];

const companyInfo = [
  {
    label: "GSTIN",
    value: "19AAPCR8000F1Z9",
    icon: FileBadge2,
  },
  {
    label: "CIN",
    value: "U477'OWR2026PTC293594",
    icon: Building2,
  },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative background */}
      <div className="hero-blue-shape hero-blue-shape-left" />
      <div className="hero-blue-shape hero-blue-shape-right" />

      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      {/* Animated globe */}
      <motion.div
        className="hero-globe"
        animate={{
          rotate: [0, 3, 0, -3, 0],
          scale: [1, 1.02, 1, 0.99, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="globe-ring globe-ring-one" />
        <div className="globe-ring globe-ring-two" />
        <div className="globe-ring globe-ring-three" />

        <div className="globe-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="globe-dot globe-dot-one" />
        <div className="globe-dot globe-dot-two" />
        <div className="globe-dot globe-dot-three" />
      </motion.div>

      <div className="hero-container">
        {/* Main Branding */}
        <motion.div
          className="hero-brand"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hero-logo-wrapper"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <img
              src="/brand/logo.png"
              alt="RUDD Private Limited"
              className="hero-logo"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <span>Build</span>

            <span className="tagline-divider">|</span>

            <span>Innovate</span>

            <span className="tagline-divider">|</span>

            <span>Grow</span>
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          className="hero-services"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.7,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="hero-service"
                key={service.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
              >
                <div className="hero-service-icon">
                  <Icon strokeWidth={2.1} />
                </div>

                <span>{service.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Company Information */}
        <motion.div
          className="hero-company-info"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.45,
          }}
        >
          <div className="company-line company-line-left" />

          <div className="company-details">
            {companyInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="company-detail"
                  key={item.label}
                  initial={{
                    opacity: 0,
                    x: index === 0 ? -15 : 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1.55 + index * 0.15,
                  }}
                >
                  <Icon className="company-detail-icon" />

                  <div className="company-detail-text">
                    <span className="company-detail-label">
                      {item.label}
                    </span>

                    <span className="company-detail-value">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="company-line company-line-right" />
        </motion.div>
      </div>

      {/* Floating particles */}
      <motion.span
        className="hero-particle particle-one"
        animate={{
          y: [0, -14, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="hero-particle particle-two"
        animate={{
          y: [0, 12, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.span
        className="hero-particle particle-three"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.65, 0.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
}
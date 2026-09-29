"use client";

import { motion } from "motion/react";
import {
  Cloud,
  Mail,
  Globe,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  UploadCloud,
} from "lucide-react";

import "./ServicesHero.css";

const techIcons = [
  {
    icon: Cloud,
    className: "service-tech-icon cloud-icon",
  },
  {
    icon: Mail,
    className: "service-tech-icon mail-icon",
  },
  {
    icon: ShieldCheck,
    className: "service-tech-icon shield-icon",
  },
  {
    icon: Smartphone,
    className: "service-tech-icon mobile-icon",
  },
  {
    icon: Globe,
    className: "service-tech-icon globe-icon",
  },
];

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay" />

      <div className="services-hero-container">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="services-hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span />
            <span>OUR SERVICES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="services-hero-highlight">e</span>
            Services
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Digital Solutions for a Smarter Tomorrow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We provide a wide range of eServices designed to make your
            business operations simpler, faster, and more efficient. From
            cloud solutions to digital support, we help you stay connected and
            ahead in the digital world.
          </motion.p>

          <motion.a
            href="#services-list"
            className="services-hero-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Our eServices</span>
            <ArrowRight size={19} />
          </motion.a>
        </motion.div>

        <motion.div
          className="services-hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="services-laptop-glow" />

          <div className="services-laptop">
            <div className="services-laptop-screen">
              <div className="services-screen-grid" />

              <motion.div
                className="services-cloud"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <UploadCloud size={62} />
              </motion.div>

              <div className="services-screen-particles">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="services-laptop-base" />
          </div>

          <div className="services-tech-network">
            {techIcons.map(({ icon: Icon, className }, index) => (
              <motion.div
                key={index}
                className={className}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.12,
                }}
                whileHover={{ scale: 1.08 }}
              >
                <Icon size={31} />
              </motion.div>
            ))}
          </div>

          <div className="services-network-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
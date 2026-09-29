"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Laptop,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay" />

      <div className="contact-hero-container">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="contact-hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span />
            <span>CONTACT US</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We're Here to
            <br />
            <span>Help You</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Have a question, need support, or want to discuss how we can work
            together? Get in touch with us.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Our team is always ready to assist you. Reach out through any of
            the channels below, and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="contact-hero-glow" />

          <div className="contact-laptop">
            <div className="contact-laptop-screen">
              <div className="contact-laptop-logo">
                <div className="contact-logo-mark">
                  <span />
                  <span />
                  <span />
                </div>

                <strong>RUDD</strong>
                <small>PRIVATE LIMITED</small>
              </div>
            </div>

            <div className="contact-laptop-base" />
          </div>

          <div className="contact-mug">
            <span>Let's</span>
            <strong>Connect</strong>
          </div>

          <motion.div
            className="contact-floating-icon icon-message"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageCircle size={24} />
          </motion.div>

          <motion.div
            className="contact-floating-icon icon-mail"
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Mail size={23} />
          </motion.div>

          <motion.div
            className="contact-floating-icon icon-phone"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Phone size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Image from "next/image";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Software Solutions",
  "Mobile Applications",
  "Digital Solutions",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-main">
            {/* Brand */}
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="footer-logo">
                <Image
                  src="/brand/logo.png"
                  alt="RUDD Private Limited"
                  width={170}
                  height={70}
                />
              </a>

              <p>
                Building innovative digital solutions that help businesses
                grow, adapt and succeed in a connected world.
              </p>

              <div className="footer-tagline">
                <span>Build</span>
                <i>|</i>
                <span>Innovate</span>
                <i>|</i>
                <span>Grow</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Quick Links</h3>

              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Our Services</h3>

              <ul>
                {services.map((service) => (
                  <li key={service}>
                    <a href="/services">
                      <span>{service}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="footer-column footer-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Get in Touch</h3>

              <a href="mailto:info@ruddprivatelimited.com">
                <span className="footer-contact-icon">
                  <Mail size={17} />
                </span>

                <span>info@ruddprivatelimited.com</span>
              </a>

              <a href="tel:+910000000000">
                <span className="footer-contact-icon">
                  <Phone size={17} />
                </span>

                <span>+91 XXXXX XXXXX</span>
              </a>

              <div className="footer-address">
                <span className="footer-contact-icon">
                  <MapPin size={17} />
                </span>

                <span>
                  Ranisal, Purba Medinipur,
                  <br />
                  West Bengal – 721446, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Company information */}
          <motion.div
            className="footer-company-info"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span>RUDD PRIVATE LIMITED</span>
              <small>Private Limited Company</small>
            </div>

            <div>
              <span>CIN</span>
              <small>U477'OWR2026PTC293594</small>
            </div>

            <div>
              <span>GSTIN</span>
              <small>19AAPCR8000F1Z9</small>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} RUDD Private Limited. All rights
            reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Cloud,
  Monitor,
  Globe,
  Smartphone,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import "./ServiceList.css";

const services = [
  {
    title: "Cloud Services",
    description: "Secure and scalable cloud solutions for your business.",
    icon: Cloud,
  },
  {
    title: "Desktop Solutions",
    description: "Powerful and flexible desktop services for seamless operations.",
    icon: Monitor,
  },
  {
    title: "Website Services",
    description: "Modern, responsive websites to grow your online presence.",
    icon: Globe,
  },
  {
    title: "Mobile Applications",
    description: "Custom mobile apps for better engagement.",
    icon: Smartphone,
  },
  {
    title: "Security Solutions",
    description: "Advanced security to keep your data safe.",
    icon: ShieldCheck,
  },
  {
    title: "Support Services",
    description: "24/7 technical support whenever you need it.",
    icon: Headphones,
  },
];

export default function ServiceList() {
  return (
    <section className="service-list" id="services-list">
      <div className="service-list-container">
        <motion.div
          className="service-list-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="service-list-label">
            <span />
            <span>OUR eSERVICES</span>
          </div>

          <h2>
            Digital Services for
            <br />
            Every Business Need
          </h2>

          <p>
            Our eServices are built to help you work smarter, save time and
            achieve more. We offer secure, reliable and scalable digital
            solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="service-list-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="service-card-icon">
                  <Icon size={31} strokeWidth={2} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact" className="service-card-arrow">
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
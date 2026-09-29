"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

import "./TeamTestimonials.css";

const testimonials = [
  {
    initials: "AS",
    name: "Team Member",
    role: "Technology Team",
    quote:
      "Rudd gives me the freedom to learn, experiment and work on meaningful projects with a supportive team.",
  },
  {
    initials: "RK",
    name: "Team Member",
    role: "Creative Team",
    quote:
      "The collaborative environment makes it easy to share ideas and turn creative thinking into real solutions.",
  },
  {
    initials: "PM",
    name: "Team Member",
    role: "Business Team",
    quote:
      "Every challenge here is an opportunity to grow. The team genuinely values initiative and new ideas.",
  },
];

export default function TeamTestimonials() {
  return (
    <section className="team-testimonials">
      <div className="team-testimonials-container">
        <motion.div
          className="team-testimonials-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="team-testimonials-label">
            <span />
            <span>WHAT OUR TEAM SAYS</span>
          </div>

          <h2>Life at Rudd</h2>

          <p>
            Great work starts with great people. Here is what our team values
            about working together at Rudd.
          </p>
        </motion.div>

        <div className="team-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="team-testimonial-card"
              key={testimonial.initials}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="team-testimonial-top">
                <Quote size={25} />
                <div className="team-testimonial-stars">
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                </div>
              </div>

              <p className="team-testimonial-quote">
                “{testimonial.quote}”
              </p>

              <div className="team-testimonial-person">
                <div className="team-testimonial-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
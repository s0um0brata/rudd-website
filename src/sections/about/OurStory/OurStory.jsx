"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";

import "./OurStory.css";

const journeyItems = [
  {
    icon: Lightbulb,
    title: "Ideas",
    description: "Understanding problems and discovering opportunities.",
  },
  {
    icon: Rocket,
    title: "Solutions",
    description: "Turning ideas into practical digital solutions.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Creating measurable value for our customers.",
  },
];

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story-container">
        {/* Left Content */}
        <motion.div
          className="our-story-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span className="our-story-label">OUR STORY</span>

          <h2>From a Vision to Reality</h2>

          <div className="our-story-line" />

          <p>
            RUDD Private Limited was founded with a simple vision — to make
            technology more accessible, practical and impactful for
            businesses and people.
          </p>

          <p>
            We believe great technology is not just about writing code. It is
            about understanding real-world challenges, creating meaningful
            solutions and building long-term relationships with the people
            who use them.
          </p>

          <p>
            From digital products and websites to applications, support and
            technology management, we aim to bring ideas to life through
            thoughtful innovation and dependable execution.
          </p>

          <motion.a
            href="#journey"
            className="our-story-button"
            whileHover={{
              x: 5,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>Our Journey</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="our-story-visual"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="our-story-image">
            <div className="story-image-glow" />

            <div className="story-orbit story-orbit-one" />
            <div className="story-orbit story-orbit-two" />

            <div className="story-center">
              <span>RUDD</span>
              <small>PRIVATE LIMITED</small>
            </div>

            <div className="story-node story-node-one">
              <Lightbulb size={20} />
              <span>Ideas</span>
            </div>

            <div className="story-node story-node-two">
              <Rocket size={20} />
              <span>Solutions</span>
            </div>

            <div className="story-node story-node-three">
              <Target size={20} />
              <span>Impact</span>
            </div>
          </div>

          {/* Journey cards */}
          <div className="journey-cards" id="journey">
            {journeyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="journey-card"
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <div className="journey-card-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import {
  MapPin,
  ArrowRight,
  Navigation,
} from "lucide-react";

import "./OfficeLocation.css";

export default function OfficeLocation() {
  return (
    <section className="office-location">
      <div className="office-location-container">
        <motion.div
          className="office-map"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="map-water" />

          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-road road-three" />
          <div className="map-road road-four" />

          <div className="map-area area-one">Industrial Area</div>
          <div className="map-area area-two">Main Road</div>
          <div className="map-area area-three">Tech Park</div>

          <div className="map-marker">
            <MapPin size={22} fill="currentColor" />
            <span>Rudd Private Limited</span>
          </div>

          <div className="map-controls">
            <button type="button">+</button>
            <button type="button">−</button>
          </div>

          <div className="map-google-label">
            <span>Map</span>
            <strong>View larger map</strong>
          </div>
        </motion.div>

        <motion.div
          className="office-info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="office-section-label">
            <span />
            <span>OUR LOCATION</span>
          </div>

          <h2>Visit Our Office</h2>

          <p>
            We're located in a convenient area and always happy to welcome
            you. Feel free to drop by for a discussion.
          </p>

          <div className="office-address">
            <div className="office-address-icon">
              <MapPin size={25} />
            </div>

            <div>
              <strong>Rudd Private Limited</strong>

              <span>Ranisal, Purba Medinipur</span>

              <span>West Bengal – 721446, India</span>
            </div>
          </div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Ranisal%2C%20Purba%20Medinipur%2C%20West%20Bengal%20721446%2C%20India"
            target="_blank"
            rel="noreferrer"
            className="office-directions-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Navigation size={16} />
            <span>Get Directions</span>
            <ArrowRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
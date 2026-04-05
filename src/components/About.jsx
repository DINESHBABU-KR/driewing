import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import aboutImg from "../assets/agency_about_bg_1775404043431.png";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="portfolio-header">
            <h2 className="card-title">
              About<span className="period">.</span>
            </h2>
            <p className="portfolio-subtitle">Expertise that scales.</p>
          </div>

          <div className="about-cinematic-grid">
            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={aboutImg} alt="Driewing Agency" className="about-main-img" />
              <div className="about-img-overlay">
                <div className="about-badge">Digital Excellence &mdash;</div>
                <h3 className="about-img-title">Driewing Technologies</h3>
              </div>
            </motion.div>

            <motion.div
              className="about-text-manifesto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="manifesto-heading">Small Team. Serious Work.</h3>
              <p className="manifesto-p">
                Driewing Technologies We're a lean engineering team building digital products across Web, Mobile, and Blockchain. No bloated teams, no outsourcing — just focused people who care deeply about what they ship.
              </p>
              <p className="manifesto-p">
                We work closely with startup founders and product teams to turn complex ideas into clean, scalable products — from first wireframe to final deployment.
              </p>

              <div className="about-stats-row">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2020</span>
                  <span className="stat-label">Year Founded</span>
                </div>
              </div>

              <div className="manifesto-footer">
                <div className="manifesto-tags">
                  {["NATIVE ENGINEERING", "UI/UX ARCHITECTURE", "WEB3 PROTOCOLS"].map(
                    (tag, i) => (
                      <span key={i} className="manifesto-tag">
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

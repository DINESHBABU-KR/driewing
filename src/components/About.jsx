import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="portfolio-header">
            <h2 className="card-title">
              About<span className="period">.</span>
            </h2>
            <p className="portfolio-subtitle">The mind behind the work.</p>
          </div>

          <div className="about-grid">
            <motion.div
              className="about-image-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="badge">Digital Agency</div>
              <h3 className="about-name">Driewing</h3>
              <p className="about-meta">Headquartered Worldwide</p>
            </motion.div>

            <motion.div className="about-content">
              <h3>Innovating the digital landscape.</h3>
              <p>
                Driewing is a multidisciplinary digital agency dedicated to
                crafting premium web experiences that drive growth. We believe
                in the power of clean code, intuitive design, and data-driven
                strategies to help brands excel in the modern marketplace.
              </p>
              <p>
                Our team of experts manages every aspect of your project—from
                initial strategy to final deployment—ensuring a seamless process
                and exceptional results. We are your partner in digital
                transformation.
              </p>

              <div className="about-stats">
                <motion.div
                  className="stat-box"
                  whileHover={{ y: -5, color: "#00f0ff" }}
                >
                  <h4>50+</h4>
                  <span>Projects Delivered</span>
                </motion.div>
                <motion.div
                  className="stat-box"
                  whileHover={{ y: -5, color: "#8a2be2" }}
                >
                  <h4>2020</h4>
                  <span>Year Founded</span>
                </motion.div>
              </div>

              <div className="about-tags">
                {["FULL-SERVICE DEV", "UI/UX STRATEGY", "SEO & GROWTH"].map(
                  (tag, i) => (
                    <motion.span
                      key={i}
                      className="tag"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

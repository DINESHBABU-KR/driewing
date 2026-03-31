import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaEdit, FaShieldAlt, FaRocket, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import Magnetic from './Magnetic';
import './Features.css';

const Features = () => {
  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        <div className="bento-container">
          <div className="portfolio-header">
            <h2 className="card-title">Services<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Digital solutions optimized for real measurable results.</p>
          </div>

          <div className="bento-grid">
            
            {/* Top Left: Graph */}
            <motion.div 
              className="bento-card span-2 relative-overflow glow-cyan"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.2)' }}
            >
              <Magnetic strength={0.1}>
                <div style={{ padding: '0 20px' }}>
                  <div className="card-header">
                    <div className="dots">
                      <div className="dot cyan"></div><div className="dot purple"></div>
                    </div>
                  </div>
                  <div className="graph-wrapper">
                    <svg className="neon-graph" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <motion.path 
                        d="M0 130 L50 100 L100 120 L150 70 L200 90 L250 50 L300 70 L350 30 L400 50" 
                        stroke="#00f0ff" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <circle cx="150" cy="70" r="6" fill="#00f0ff" className="pulse-circle"/>
                      <circle cx="250" cy="50" r="6" fill="#8a2be2" className="pulse-circle"/>
                      <circle cx="350" cy="30" r="6" fill="#00f0ff" className="pulse-circle"/>
                      <path d="M0 130 L50 100 L100 120 L150 70 L200 90 L250 50 L300 70 L350 30 L400 50 L400 150 L0 150 Z" fill="url(#grad1)" opacity="0.2"/>
                      <defs>
                        <linearGradient id="grad1" x1="200" y1="30" x2="200" y2="150" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00f0ff"/>
                          <stop offset="1" stopColor="#00f0ff" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Top Right: Core Results text block */}
            <motion.div 
              className="bento-card span-2 no-bg"
            >
              <h3 className="bento-big-title">Websites built for real business results</h3>
              <div className="bento-features-grid">
                {[
                  { icon: FaRocket, title: 'OnPage SEO', text: 'Ready to be found on Google and dominate search rankings.', color: 'icon-cyan' },
                  { icon: FaChartLine, title: 'Tracking & Analytics', text: 'Track user statistics, marketing cookies, and conversions.', color: 'icon-purple' },
                  { icon: FaLaptop, title: '100% Responsive', text: 'Optimized for desktop, tablet, mobile and everything in between.', color: 'icon-cyan' },
                  { icon: FaCheckCircle, title: 'ROI-First', text: 'So you get the absolute most out of your advertising budget.', color: 'icon-purple' },
                ].map((item, idx) => (
                  <Magnetic key={idx} strength={0.1}>
                    <motion.div 
                      className="bento-feature-item"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4><item.icon className={item.color}/> {item.title}</h4>
                      <p>{item.text}</p>
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

            {/* Middle Left: Full Service floating pills */}
            <motion.div 
              className="bento-card span-2 glow-purple flex-row-between"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(138, 43, 226, 0.2)' }}
            >
              <Magnetic strength={0.1}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 className="bento-heading-italic">Full-Service A to Z</h4>
                    <p className="bento-subtext">Benefit from top-notch service and comfort from start to finish.</p>
                  </div>
                  <div className="floating-pills-container">
                    <span className="float-pill p1">Copywriting</span>
                    <span className="float-pill p2">Development</span>
                    <span className="float-pill p3">Hosting</span>
                    <span className="float-pill p4">Strategy</span>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Middle Right: Lightning Fast */}
            <motion.div 
              className="bento-card span-2 glow-cyan flex-row-between"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 240, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <Magnetic strength={0.1}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 className="bento-heading-italic">Lightning-Fast Load Times</h4>
                    <p className="bento-subtext">Because nobody likes waiting. High-perf tech stacks only.</p>
                  </div>
                  <div className="score-circle">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                      <motion.circle 
                        cx="50" cy="50" r="45" stroke="#00f0ff" strokeWidth="6" fill="none" strokeDasharray="283"
                        animate={{ strokeDashoffset: 10 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round" 
                        className="score-circle-anim" 
                      />
                      <text x="50" y="55" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="bold">100</text>
                    </svg>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Bottom Row: 4 small cards */}
            {[
              { icon: FaLaptop, title: 'Perfectly Integrated' },
              { icon: 'inner-box', title: 'Built to Scale' },
              { icon: FaEdit, title: 'Easy to Edit' },
              { icon: FaShieldAlt, title: 'Secure & Compliant' },
            ].map((item, idx) => (
              <Magnetic key={idx} strength={0.2} className="span-1">
                <motion.div 
                  className="bento-card text-center small-card glow-hover" 
                  style={{ width: '100%' }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  {typeof item.icon === 'string' ? (
                    <div className="icon-box"><div className="inner-box"></div></div>
                  ) : (
                    <item.icon className="bento-icon big-icon"/>
                  )}
                  <h5>{item.title}</h5>
                </motion.div>
              </Magnetic>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

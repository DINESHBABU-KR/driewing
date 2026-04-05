import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import logoBrand from "../assets/gw_logo.png";
import Magnetic from "./Magnetic";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Logic preserved but you must fill in your EmailJS credentials
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_USER_ID",
      )
      .then(
        () => {
          setIsSent(true);
          setError(false);
          formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        () => setError(true),
      );
  };

  return (
    <section id="contact" className="agency-contact-section">
      <div className="container">
        <div className="contact-dashboard">
          <div className="dashboard-grid">

            {/* Left Side: The Pitch */}
            <div className="contact-pitch">
              <div className="availability-wrapper">
                <span className="pulse-dot"></span>
                <span className="availability-text">Actively accepting new projects</span>
              </div>

              <h2 className="dashboard-title">
                Let's Build Together. <br />
                <span className="gradient-text">
                  Got an idea?.</span>
              </h2>

              <p className="dashboard-desc">
                Tell us what you're working on — we'll figure out the best way to bring it to life.
              </p>

              <div className="contact-details-row">
                <div className="contact-detail-item">
                  <span className="detail-label">Office</span>
                  <span className="detail-value">Remote</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-label">Inquiries</span>
                  <span className="detail-value">driewingtech@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="contact-form-card">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="minimal-form"
              >
                <div className="form-row">
                  <div className="input-group">
                    <input type="text" name="user_name" required placeholder=" " id="name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="input-group">
                    <input type="email" name="user_email" required placeholder=" " id="email" />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>

                <div className="input-group">
                  <textarea name="message" rows="5" required placeholder=" " id="message"></textarea>
                  <label htmlFor="message">Project Details</label>
                </div>

                <Magnetic strength={0.2}>
                  <button type="submit" className="dashboard-send-btn">
                    Launch Project Inquiry
                  </button>
                </Magnetic>

                {isSent && <div className="form-success">Inquiry Sent Successfully!</div>}
                {error && <div className="form-error">Something went wrong. Please try again.</div>}
              </form>
            </div>

          </div>
        </div>
      </div>

      <footer className="agency-footer">
        <div className="container footer-bottom">
          <div className="footer-left">
            <span className="footer-brand">Driewing Technologies</span>
            <span className="footer-copy">&copy; {new Date().getFullYear()} Modern Digital Excellence.</span>
          </div>
          <div className="footer-right">
            <a href="#services">Capabilities</a>
            <a href="#portfolio">Work</a>
            <a href="#about">Story</a>
            <a href="#testimonials">Reviews</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

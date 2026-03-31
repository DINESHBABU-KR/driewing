import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import logoBrand from '../assets/logo-brand.png';
import Magnetic from './Magnetic';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then(() => {
          setIsSent(true); setError(false); formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
      }, () => setError(true));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="contact-badge">Get in touch</span>
              <h2 className="contact-title">Ready for your project?</h2>
              <p className="contact-desc">Let's build something exceptional together. Send us a request and our team will get back to you within 24 hours.</p>
              
              <div className="location-info">
                <strong>Our Location</strong>
                <p>Worldwide / Remote</p>
              </div>
            </div>

            <div className="contact-form-side">
              <div className="contact-form-box">
                <div className="contact-logo-wrapper">
                  <img src={logoBrand} alt="Adex Logo" className="contact-form-logo" />
                </div>
                <p className="form-box-subtitle">Web Design & Software Development</p>
                <span className="availability-badge">● Available for new projects</span>
                
                <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                  <input type="text" name="user_name" required placeholder="Name" />
                  <input type="email" name="user_email" required placeholder="Email" />
                  <textarea name="message" rows="4" required placeholder="Message"></textarea>
                  <Magnetic strength={0.3}>
                    <button type="submit" className="btn-accent" style={{width: '100%'}}>START PROJECT</button>
                  </Magnetic>
                  {isSent && <div className="form-msg success">Sent successfully!</div>}
                  {error && <div className="form-msg error">Failed to send.</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="simple-footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <img src={logoBrand} alt="Adex" className="footer-simple-logo" />
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#portfolio">Work</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

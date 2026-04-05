import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const reviewsData = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    content: 'An absolute game-changer. The website was delivered ahead of schedule and the attention to detail in the animations and dark mode styling was beyond our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Elevate Fitness',
    content: 'We saw a 40% increase in conversion rate within the first month. The new architecture is blazing fast and the sleek design perfectly matches our brand identity.',
    rating: 5,
  },
  {
    name: 'Emma Rossi',
    role: 'Marketing Director, Lumiere',
    content: 'Communication was flawless throughout the entire process. They took our vague ideas and turned them into a stunning, high-performing digital experience.',
    rating: 5,
  },
  {
    name: 'Liam O’Brien',
    role: 'Founder, Nexus Labs',
    content: 'Driewing Technologies delivered a Web3 product that was secure, audited, and incredibly intuitive for our users. Their understanding of the Solana ecosystem is unparalleled.',
    rating: 5,
  }
];

const Testimonials = () => {
  // Triple the data for smooth marquee looping
  const marqueeData = [...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <section id="testimonials" className="testimonials-marquee-section">
      <div className="container">
        <div className="portfolio-header center-text">
          <h2 className="card-title">Client Success Stories<span className="period">.</span></h2>
          <p className="portfolio-subtitle">Trusted by founders and product teams globally.</p>
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track-horizontal">
          {marqueeData.map((review, i) => (
            <div className="review-marquee-card" key={i}>
              <div className="review-top">
                <div className="stars">
                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
                </div>
              </div>
              <p className="review-content">"{review.content}"</p>
              <div className="review-author">
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

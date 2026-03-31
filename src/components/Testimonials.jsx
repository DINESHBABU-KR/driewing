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
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-wrapper">
      <div className="container">
        <div className="card-container testimonials-container">
          <div className="portfolio-header">
            <h2 className="card-title">Reviews<span className="period">.</span></h2>
            <p className="portfolio-subtitle">What our clients are saying about our design and development partnerships.</p>
          </div>

          <div className="testimonials-grid">
            {reviewsData.map((review, i) => (
              <motion.div 
                className="review-card"
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stars">
                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
                </div>
                <p className="review-content">"{review.content}"</p>
                <div className="review-author">
                  <div className="author-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

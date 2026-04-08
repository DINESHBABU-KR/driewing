import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const reviewsData = [
  {
    name: "Saravanan",
    role: "Owner of Priyam Digital Studio",
    content:
      "Working with this team completely elevated our digital presence. From branding to website design, every detail was crafted with creativity and precision. The modern UI, smooth animations, and performance-focused development truly set our studio apart.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  // {
  //   name: 'Michael Chen',
  //   role: 'Founder, Elevate Fitness',
  //   content: 'We saw a 40% increase in conversion rate within the first month. The new architecture is blazing fast and the sleek design perfectly matches our brand identity.',
  //   rating: 5,
  //   avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  // },
  // {
  //   name: 'Emma Rossi',
  //   role: 'Marketing Director, Lumiere',
  //   content: 'Communication was flawless throughout the entire process. They took our vague ideas and turned them into a stunning, high-performing digital experience.',
  //   rating: 5,
  //   avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80'
  // },
  // {
  //   name: 'Liam O’Brien',
  //   role: 'Founder, Nexus Labs',
  //   content: 'Driewing Technologies delivered a Web3 product that was secure, audited, and incredibly intuitive for our users. Their understanding of the Solana ecosystem is unparalleled.',
  //   rating: 5,
  //   avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  // },
  // {
  //   name: 'Sophia Wright',
  //   role: 'Product Lead, Velocity',
  //   content: 'The team at Driewing is incredibly talented. They helped us scale our MVP to 50k users without a hitch. Their engineering standards are world-class.',
  //   rating: 5,
  //   avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  // },
  // {
  //   name: 'David Kim',
  //   role: 'CTO, Quantum AI',
  //   content: 'Brilliant execution. The integration of our AI models into the frontend was seamless and the performance gains from their optimization were significant.',
  //   rating: 5,
  //   avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  // }
];

const ReviewCard = ({ review }) => (
  <div className="review-marquee-card">
    <div className="quote-icon">
      <FaQuoteLeft />
    </div>
    <div className="review-top">
      <div className="stars">
        {[...Array(review.rating)].map((_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
      </div>
    </div>
    <p className="review-content">"{review.content}"</p>
    <div className="review-author">
      <img src={review.avatar} alt={review.name} className="author-avatar" />
      <div className="author-info">
        <h4>{review.name}</h4>
        <span>{review.role}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const row1 = [
    ...reviewsData.slice(0, 3),
    ...reviewsData.slice(0, 3),
    ...reviewsData.slice(0, 3),
  ];
  const row2 = [
    ...reviewsData.slice(3, 6),
    ...reviewsData.slice(3, 6),
    ...reviewsData.slice(3, 6),
  ];

  return (
    <section id="testimonials" className="testimonials-marquee-section">
      <div className="testimonials-bg-glow"></div>

      <div className="container">
        <div className="portfolio-header center-text">
          <motion.h2
            className="card-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Success Stories<span className="period">.</span>
          </motion.h2>
          <motion.p
            className="portfolio-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted by founders and product teams globally. Join 50+ partners
            who chose excellence.
          </motion.p>
        </div>
      </div>

      <div className="marquee-container">
        {/* Row 1 - Left to Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track-horizontal track-row-1">
            {row1.map((review, i) => (
              <ReviewCard key={`row1-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track-horizontal track-row-2">
            {row2.map((review, i) => (
              <ReviewCard key={`row2-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

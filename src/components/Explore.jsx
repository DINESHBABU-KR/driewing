import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPause, FaInfoCircle } from 'react-icons/fa';
import Magnetic from './Magnetic';
import './Explore.css';
import priyamImg from '../assets/priyam.png';

const portfolioData = [
  // {
  //   title: 'Web3 NFT Marketplace',
  //   desc: 'Uncompromising backend services for a high-volume blockchain application running on Ethereum.',
  //   imgUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  //   tags: ['Web3', 'Ethereum']
  // },
  {
    title: 'Priyam Digital Studio',
    desc: 'An immersive digital storefront developed exclusively for Priyam Photography Studio. Engineered from the ground up natively with Next.js, this platform features an automated media pipeline that seamlessly delivers high-resolution gallery images via direct Google Drive API integration—ensuring zero-friction live updates for the client.',
    imgUrl: priyamImg,
    tags: ['Next.js', 'Google Drive API', 'UI/UX Design', 'React'],
    projectUrl: 'https://priyam-digital-stilllifestudio.netlify.app/'
  },
  // {
  //   title: 'Solana DApp Engine',
  //   desc: 'Lightning-fast architecture and robust Rust blockchain components for Solana ecosystem.',
  //   imgUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f4fc8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  //   tags: ['Rust', 'Solana']
  // },
  // {
  //   title: 'Global E-Commerce',
  //   desc: 'Massively scalable online store with deep Stripe API integrations for frictionless checkout.',
  //   imgUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  //   tags: ['React', 'Stripe']
  // }
];

const Explore = () => {
  const dataLength = portfolioData.length;

  const renderEmptyState = () => (
    <div className="container">
      <div className="no-projects-wrapper">
        <p>Exciting new projects are currently under construction. Check back soon!</p>
      </div>
    </div>
  );

  const renderSingleProject = () => (
    <div className="container">
      <div className="single-project-wrapper">
        <MarqueeCard project={portfolioData[0]} index={0} isSingle={true} />
      </div>
    </div>
  );

  const renderMarquee = () => {
    // We dynamically pad the array only for the marquee so it doesn't break on ultra-wide screens
    // if there are 2 or 3 items. We need roughly 5 items per group to confidently span any display.
    const paddedData = [...portfolioData];
    while (paddedData.length > 0 && paddedData.length < 5) {
      paddedData.push(...portfolioData);
    }

    return (
      <div className="marquee-full-width-wrapper">
        <div className="marquee-track">
          {/* Group 1 */}
          <div className="marquee-group">
            {paddedData.map((project, index) => (
              <MarqueeCard key={`g1-${index}`} project={project} index={index} />
            ))}
          </div>

          {/* Group 2 (Clone) */}
          <div className="marquee-group" aria-hidden="true">
            {paddedData.map((project, index) => (
              <MarqueeCard key={`g2-${index}`} project={project} index={index} />
            ))}
          </div>

          {/* Group 3 (Clone) */}
          <div className="marquee-group" aria-hidden="true">
            {paddedData.map((project, index) => (
              <MarqueeCard key={`g3-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="marquee-section">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <h2 className="card-title">Selected Projects<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Explore our latest work across web, mobile, and Web3 platforms.</p>
          </div>
          {dataLength > 1 && (
            <div className="carousel-instructions">
              <span>Hover to Pause</span> <FaPause size={12} style={{ marginLeft: '6px' }} />
            </div>
          )}
          {dataLength === 1 && (
            <div className="carousel-instructions">
              <span>Featured Showcase</span> <FaInfoCircle size={14} style={{ marginLeft: '6px' }} />
            </div>
          )}
        </div>
      </div>

      {dataLength === 0 && renderEmptyState()}
      {dataLength === 1 && renderSingleProject()}
      {dataLength > 1 && renderMarquee()}

    </section>
  );
};

/* Reusable Component for individual cards */
const MarqueeCard = ({ project, index, isSingle }) => (
  <div className={`marquee-card${isSingle ? ' marquee-card--single' : ''}`}>
    <img src={project.imgUrl} className="marquee-img" alt={project.title} draggable="false" />
    <div className="marquee-overlay">
      <div className="marquee-content">
        <div className="marquee-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="marquee-tag">{tag}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="marquee-action">
          <Magnetic strength={0.1}>
            <a
              href={project.projectUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-btn"
            >
              Explore Project <FaExternalLinkAlt size={10} />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  </div>
);

export default Explore;

import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamData = [
  {
    name: 'Alex D.',
    role: 'Lead Full-Stack Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    tags: ['Architecture', 'Scaling']
  },
  {
    name: 'Sarah M.',
    role: 'Senior Full-Stack Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    tags: ['Cloud', 'DevOps']
  },
  {
    name: 'James K.',
    role: 'Full-Stack Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    tags: ['Back-end', 'API Design']
  },
  {
    name: 'Elena R.',
    role: 'Lead Mobile Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    tags: ['React Native', 'Flutter']
  },
  {
    name: 'Jason T.',
    role: 'Lead Frontend Engineer',
    imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    tags: ['Motion', 'UX/UI Design']
  },
  {
    name: 'Mia S.',
    role: 'Lead UI/UX Designer',
    imgUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    tags: ['Brand', 'Strategy']
  }
];

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="portfolio-header center-text">
          <h2 className="card-title">
            Our Elite Collective<span className="period">.</span>
          </h2>
          <p className="portfolio-subtitle">
            6 engineering specialists. Hundreds of high-performance products.
          </p>
        </div>

        <div className="team-grid-layout">
          {teamData.map((member, index) => (
            <motion.div
              className="elite-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="elite-img-box">
                <img src={member.imgUrl} alt={member.name} className="elite-img" />
                <div className="elite-img-filter"></div>
                <div className="elite-hover-content">
                  <div className="elite-tags">
                    {member.tags.map((tag, i) => (
                      <span key={i} className="elite-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="elite-info-box">
                <h3 className="elite-name">{member.name}</h3>
                <p className="elite-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

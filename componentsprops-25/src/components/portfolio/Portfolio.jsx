import React from 'react';
import '../portfolios/Portfolios.css'; 

const Portfolio = ({ image, title, desc }) => {
  return (
    <div className="portfolio-card">
      <div className="image-wrapper">
        <img src={image} alt="" style={{ width: '24rem', height: '19rem' }} />
        <div className="overlay">
          <span className="plus">+</span>
        </div>
      </div>
      <h3 style={{ fontSize: '2rem', color: '#212529' }}>{title}</h3>
      <p style={{ color: '#6C757D', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: '500' }}>{desc}</p>
    </div>
  );
};

export default Portfolio;

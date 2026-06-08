import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Vishnu Mohan. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/VishnumohanS" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vishnu-mohan-02487528b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

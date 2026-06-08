import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.div 
      className="bento-card col-span-2 hero-bento"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content-bento">
        <div className="hero-profile-container">
          <img 
            src="/profile-photo.jpg" 
            alt="Vishnu Mohan" 
            className="hero-avatar"
            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Vishnu+Mohan&background=f4f4f5&color=000&size=120" }} 
          />
          <div className="availability-badge">
            <span className="pulse-dot"></span> Available for work
          </div>
        </div>
        
        <h1 className="hero-name">Hi, I'm Vishnu 👋</h1>
        <h2 className="hero-tagline">
          Full Stack Developer & System Design Enthusiast
        </h2>
        <p className="hero-bio">
          I build scalable web applications with the MERN stack. I've solved 200+ LeetCode problems in C++ and have a strong foundation in Software Architecture and Cloud computing.
        </p>
        
        <div className="hero-btn-group">
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          <a href="/23cs191_Vishnu Mohan S pro.pdf" download className="btn btn-outline">Resume</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

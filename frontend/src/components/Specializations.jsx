import React from 'react';
import { motion } from 'framer-motion';
import './Specializations.css';

const Specializations = () => {
  return (
    <motion.div 
      className="bento-card col-span-1 spec-bento"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="spec-icon-large">🏗️</div>
      <h3 className="bento-title">System Design</h3>
      <p className="spec-desc">
        Scalable Architecture, Database Optimization, Client-Server models, and Cloud Infrastructure Fundamentals.
      </p>
    </motion.div>
  );
};

export default Specializations;

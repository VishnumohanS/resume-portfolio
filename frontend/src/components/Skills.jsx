import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 
  'AWS Cloud Basics', 'HTML/CSS', 'C++', 'Java', 'Python', 
  'REST APIs', 'AWS Basics', 'Docker', 'Git'
];

const Skills = () => {
  return (
    <motion.div 
      className="bento-card col-span-2 skills-bento"
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="bento-title">Core Skills & Tools</h3>
      <div className="skills-marquee-container">
        <div className="skills-grid-bento">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-pill-bento">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

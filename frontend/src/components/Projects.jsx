import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    title: '🎨 Art E-Commerce Platform',
    description: 'Full-stack MERN app for artwork with auth, cart, & UI.',
    tags: ['MERN', 'Auth', 'UI','JWT'],
    span: 'col-span-1'
  },
  {
    title: '🤖 AI Summary Notes Generator',
    description: 'AI-powered application generating concise notes to improve learning efficiency.',
    tags: ['React', 'RAG', 'Node'],
    span: 'col-span-2'
  },
  {
    title: '🏠 House Price Prediction',
    description: 'Machine learning project predicting prices using data-driven models.',
    tags: ['Python', 'ML', 'Data'],
    span: 'col-span-1'
  }
];

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <motion.div 
          className={`bento-card project-bento ${project.span}`}
          key={index}
          id={index === 0 ? 'projects' : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Projects;

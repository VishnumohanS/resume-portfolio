import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      className="bento-card col-span-3 contact-bento"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-bento-content">
        <div className="contact-bento-info">
          <h2 className="contact-huge-title">Let's work together.</h2>
          <p className="contact-bento-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
          <div className="contact-links-bento">
            <a href="mailto:vishnumohan.s2023cse@sece.ac.in" className="bento-social-link">Email</a>
            <a href="https://www.linkedin.com/in/vishnu-mohan-02487528b/" target="_blank" rel="noreferrer" className="bento-social-link">LinkedIn</a>
            <a href="https://github.com/VishnumohanS" target="_blank" rel="noreferrer" className="bento-social-link">GitHub</a>
          </div>
        </div>
        
        <div className="contact-bento-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-bento-form">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="4"
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
            <button type="submit" className="btn btn-primary bento-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="bento-status success">Sent successfully!</p>}
            {status === 'error' && <p className="bento-status error">Failed to send.</p>}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

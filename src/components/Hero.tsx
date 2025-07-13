import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Star size={16} />
              <span>Premium Fashion Designer</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting Excellence in
              <span className="highlight"> Every Stitch</span>
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Meet Adeleke Abass, your premier fashion designer specializing in custom designs, 
              any material, any style. From traditional Agbada to contemporary fashion, 
              we bring your vision to life with unmatched craftsmanship.
            </motion.p>

            <motion.div 
              className="hero-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="feature">
                <Award size={20} />
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <Star size={20} />
                <span>Custom Designs</span>
              </div>
              <div className="feature">
                <Award size={20} />
                <span>Any Material</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a href="#gallery" className="btn btn-primary">
                View Our Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Quote
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <img 
                src="/abs 1.jpg" 
                alt="Adeleke Abass - A.B.S Stiches Fashion Designer"
                className="designer-image"
              />
              <div className="image-overlay">
                <div className="experience-badge">
                  <span className="years">5+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-dot"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero; 
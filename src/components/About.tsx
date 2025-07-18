import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Phone } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About A.B.S Stitches</h2>
          <p className="section-subtitle">
            Discover the story behind our premium fashion design and the mastermind behind every creation
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img 
                src="/abs 2.jpg" 
                alt="Adeleke Abass - Fashion Designer at Work"
                className="about-designer-image"
              />
              <div className="image-badge">
                <Award size={24} />
                <span>Master Designer</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Meet Adeleke Abass</h3>
            <p className="about-description">
              Adeleke Abass is a passionate and skilled fashion designer with over 5 years of experience 
              in creating exceptional garments. Specializing in custom designs, he works with any material 
              and any style to bring your vision to life.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={20} />
                </div>
                <div className="feature-content">
                  <h4>Premium Quality</h4>
                  <p>Every garment is crafted with attention to detail and premium materials</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={20} />
                </div>
                <div className="feature-content">
                  <h4>Custom Designs</h4>
                  <p>Personalized designs tailored to your unique style and preferences</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={20} />
                </div>
                <div className="feature-content">
                  <h4>Any Material</h4>
                  <p>Working with all types of fabrics and materials to suit your needs</p>
                </div>
              </div>
            </div>

            <div className="about-contact">
              <div className="contact-item">
                <MapPin size={18} />
                <span>Sabo opposite central mosque, Ibadan</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+234 706 937 5511</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
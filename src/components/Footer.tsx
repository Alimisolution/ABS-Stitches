import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>A.B.S Stitches</h3>
            <p>Premium fashion design by Adeleke Abass. Crafting excellence in every stitch with custom designs, any material, any style.</p>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Sabo opposite central mosque, Ibadan, Nigeria</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+234 706 937 5511</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <ul>
              <li>Agbada Design</li>
              <li>Custom Suits</li>
              <li>Casual Wear</li>
              <li>Wedding Attire</li>
              <li>Traditional Wear</li>
              <li>Fashion Consultation</li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Contact</h4>
            <div className="footer-cta">
              <a 
                href="https://wa.me/2347069375511" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-line"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2025 A.B.S Stitches. All rights reserved.</p>
            <p className="made-with">
              Made with <Heart size={14} /> for Adeleke Abass
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Zap, Star } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors size={32} />,
      title: "Agbada Design",
      description: "Traditional Nigerian Agbada with modern twists. Perfect for special occasions and ceremonies.",
      features: ["Premium fabrics", "Custom embroidery", "Perfect fit"]
    },
    {
      icon: <Palette size={32} />,
      title: "Custom Suits",
      description: "Elegant suits tailored to perfection. From business wear to formal events.",
      features: ["Italian fabrics", "Hand-stitched", "Multiple fittings"]
    },
    {
      icon: <Zap size={32} />,
      title: "Casual Wear",
      description: "Comfortable and stylish everyday clothing. From shirts to trousers and everything in between.",
      features: ["Comfortable fit", "Durable materials", "Modern styles"]
    },
    {
      icon: <Star size={32} />,
      title: "Wedding Attire",
      description: "Stunning wedding garments for the most special day. Traditional and contemporary designs.",
      features: ["Luxury materials", "Detailed work", "Perfect timing"]
    },
    {
      icon: <Scissors size={32} />,
      title: "Traditional Wear",
      description: "Authentic traditional Nigerian clothing. Preserving culture with modern comfort.",
      features: ["Cultural accuracy", "Modern comfort", "Quality materials"]
    },
    {
      icon: <Palette size={32} />,
      title: "Fashion Consultation",
      description: "Professional advice on style, fabric selection, and design choices for any occasion.",
      features: ["Style advice", "Fabric guidance", "Design consultation"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From traditional Agbada to contemporary fashion, we offer a complete range of design services
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Contact us for a consultation and let's bring your vision to life</p>
          <a href="#contact" className="btn btn-primary">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 
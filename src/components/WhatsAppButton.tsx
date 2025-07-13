import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello Adeleke Abass! I'm interested in your fashion design services. I found you through your website.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347069375511?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="whatsapp-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
    >
      <MessageCircle size={28} />
      <span className="tooltip">Chat with us on WhatsApp</span>
    </motion.div>
  );
};

export default WhatsAppButton; 
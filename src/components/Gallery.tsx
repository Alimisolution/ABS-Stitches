import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      alt: "Traditional Agbada Design",
      category: "Traditional"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      alt: "Modern Business Suit",
      category: "Business"
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      alt: "Elegant Wedding Attire",
      category: "Wedding"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
      alt: "Casual Fashion Collection",
      category: "Casual"
    },
    {
      src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      alt: "Traditional Nigerian Wear",
      category: "Traditional"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      alt: "Formal Evening Suit",
      category: "Formal"
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      alt: "Custom Embroidery Work",
      category: "Custom"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
      alt: "Contemporary Fashion Design",
      category: "Contemporary"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Explore our collection of stunning designs and exceptional craftsmanship
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <div className="category-badge">{image.category}</div>
                  <div className="view-button">View</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div 
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="close-button"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                
                <button className="nav-button prev" onClick={prevImage}>
                  <ChevronLeft size={24} />
                </button>
                
                <button className="nav-button next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>

                <div className="lightbox-image">
                  <img 
                    src={galleryImages[selectedImage].src} 
                    alt={galleryImages[selectedImage].alt} 
                  />
                  <div className="image-info">
                    <h3>{galleryImages[selectedImage].alt}</h3>
                    <span className="category">{galleryImages[selectedImage].category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 
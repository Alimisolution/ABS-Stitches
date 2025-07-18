import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  {
    src: '/agbada.jpg',
    alt: 'Agbada Design 1',
    category: 'Agbada',
  },
  {
    src: '/another-agbada.jpg',
    alt: 'Agbada Design 2',
    category: 'Agbada',
  },
  {
    src: '/style1.jpg',
    alt: 'Fashion Style 1',
    category: 'Style',
  },
  {
    src: '/style2.jpg',
    alt: 'Fashion Style 2',
    category: 'Style',
  },
  {
    src: '/style3.jpg',
    alt: 'Fashion Style 3',
    category: 'Style',
  },
  {
    src: '/style4.jpg',
    alt: 'Fashion Style 4',
    category: 'Style',
  },
  {
    src: '/style5.jpg',
    alt: 'Fashion Style 5',
    category: 'Style',
  },
  {
    src: '/style6.jpg',
    alt: 'Fashion Style 6',
    category: 'Style',
  },
  {
    src: '/style7.jpg',
    alt: 'Fashion Style 7',
    category: 'Style',
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
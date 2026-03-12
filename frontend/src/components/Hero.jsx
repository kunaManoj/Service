import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Home, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <motion.div 
          className="hero-content-side"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Expert <span className="hl">AC Servicing</span> & <span className="hl">Repairs</span> in Hyderabad
          </h1>
          <p className="hero-desc">
            Professional repair, deep cleaning, gas refilling, and installation for all AC brands. Certified technicians with genuine spare parts at your doorstep.
          </p>

          <div className="hero-cta-group">
            <div className="cta-row-main">
              <a href="tel:9772134944" className="btn-hero-call">
                <Phone size={20} /> Call: 9772134944
              </a>
              <a href="https://wa.me/919772134944" className="btn-hero-wa" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={22} className="wa-icon" fill="#22c55e" color="#22c55e" /> WhatsApp
              </a>
            </div>
          </div>

          <motion.div 
            className="floating-bottom-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="f-part">
              <Home size={18} color="#f59e0b" /> Home Visit ₹350
            </div>
            <div className="f-divider"></div>
            <div className="f-part f-hl">
              <Zap size={18} fill="#7c3aed" color="#7c3aed" /> SAME-DAY
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-side"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/IMG_3208.JPG.jpeg" alt="AC Technician" className="hero-img-main" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

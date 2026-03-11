import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-glass padding-y">
      <div className="container grid-4 footer-grid text-muted">
        <div>
          <div className="nav-logo pb-3">
             <span style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: '1.2', color: 'var(--primary-color)' }}>CoolBreeze AC</span>
          </div>
          <p className="text-sm">Expert air conditioning repairs, deep cleaning, and installation services across Hyderabad.</p>
          <div className="socials flex gap mt-3">
             
          </div>
        </div>
        
        <div className="footer-links">
           <h4 className="text-dark">Quick Links</h4>
           <ul>
             <li><a href="#about">About Us</a></li>
             <li><a href="#services">Our Services</a></li>
             <li><a href="#brands">Brands Served</a></li>
             <li><a href="#pricing">Pricing</a></li>
             <li><a href="#contact">Contact Us</a></li>
           </ul>
        </div>
        <div className="footer-links">
           <h4 className="text-dark">Services</h4>
           <ul>
             <li><a href="#service">AC Repair</a></li>
             <li><a href="#service">AC Gas Refilling</a></li>
             <li><a href="#service">AC Installation</a></li>
             <li><a href="#service">Refrigerator Repair</a></li>
             <li><a href="#service">Washing Machine</a></li>
           </ul>
        </div>
        <div className="footer-contact">
           <h4 className="text-dark">Contact Info</h4>
           <div className="text-sm mb-2">📞 9772134944</div>
           <div className="text-sm mb-2">✉️ info@coolbreeze.com</div>
           <div className="text-sm mb-2">📍 Road No. 10, Banjara Hills, Hyderabad, Telangana 500034</div>
        </div>
      </div>
      <div className="footer-bottom text-center text-sm text-muted pt-4 border-top">
         <p>© {new Date().getFullYear()} CoolBreeze AC Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

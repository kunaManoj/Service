import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Droplet, PenTool, Home, Thermometer, Wind, MonitorSmartphone, Fan } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  { id: 1, title: 'AC Repair', desc: 'Expert diagnosis and repair of all AC faults.', currentImg: '/images/IMG_3212.JPG.jpeg', icon: <Settings /> },
  { id: 2, title: 'AC Service / Cleaning', desc: 'Thorough cleaning for better cooling and efficiency.', currentImg: '/images/IMG_3213.JPG.jpeg', icon: <Wind /> },
  { id: 3, title: 'AC Gas Refilling', desc: 'Detect leaks and refill refrigerant for max cooling.', currentImg: '/images/IMG_3214.JPG.jpeg', icon: <Droplet /> },
  { id: 4, title: 'AC Installation', desc: 'Safe and proper installation of Window & Split ACs.', currentImg: '/images/IMG_3216.JPG.jpeg', icon: <Home /> },
  { id: 5, title: 'AC Rent (Window & Split)', desc: 'Affordable AC rentals for homes and offices.', currentImg: '/images/IMG_3217.JPG.jpeg', icon: <Thermometer /> },
  { id: 6, title: 'Cassette AC Service', desc: 'Specialized care for ceiling-mounted Cassette ACs.', currentImg: '/images/IMG_3218.JPG.jpeg', icon: <Fan /> },
  { id: 7, title: 'VRF & VRV Services', desc: 'Commercial level Variable Refrigerant Flow repairs.', currentImg: '/images/IMG_3210.JPG.jpeg', icon: <Settings /> },
  { id: 8, title: 'Chiller Plant Maintenance', desc: 'End-to-end maintenance of industrial Chiller Plants.', currentImg: '/images/IMG_3220.JPG.jpeg', icon: <Settings /> },
  { id: 9, title: 'AHU (Air Handling Unit)', desc: 'Servicing systems that regulate and circulate air.', currentImg: '/images/IMG_3208.JPG.jpeg', icon: <Wind /> },
  { id: 10, title: 'Water Cooler Repair', desc: 'Commercial and residential water cooler servicing.', currentImg: '/images/IMG_3211.JPG.jpeg', icon: <Droplet /> },
  { id: 11, title: 'Refrigerator Service', desc: 'Get your fridge cooling like new again.', currentImg: '/images/IMG_3216.JPG.jpeg', icon: <Thermometer /> },
  { id: 12, title: 'Washing Machine Repair', desc: 'Fully automatic and semi-automatic repairs.', currentImg: '/images/IMG_3212.JPG.jpeg', icon: <MonitorSmartphone /> },
];

const Services = () => {
  return (
    <section id="services" className="services-section bg-gradient-brand overlay-bg">
      <div className="container">
        <div className="text-center padding-bottom-large">
          <h4 className="section-subtitle text-primary">OUR SERVICES</h4>
          <h2 className="section-title text-dark">Expert <span className="text-primary">Appliance Repairs</span></h2>
          <p className="text-muted text-max-width">We offer a wide range of services for air conditioning units and household appliances. Professional work backed by warranty.</p>
        </div>

        <div className="grid-3">
          {servicesList.map((svc) => (
            <motion.div 
              key={svc.id} 
              className="service-card glass-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="service-img-wrap">
                <img src={svc.currentImg} alt={svc.title} className="service-img" />
                <div className="service-icon glass-icon">
                  {svc.icon}
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc text-muted">{svc.desc}</p>
                
                <div className="service-actions flex-between mt-2">
                   <button className="btn btn-outline small-btn text-sm">Learn More</button>
                   <Link to="/book" className="btn btn-primary small-btn text-sm">Book Now</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import PageTransition from '../components/PageTransition';

const servicesOptions = [
  "AC Repair", "AC Service & Deep Cleaning", "AC Gas Refilling", 
  "AC Installation / Uninstallation", "AC Rent", "Cassette AC Service", 
  "VRF & VRV Services", "Chiller Plant Maintenance", "Refrigerator Repair", 
  "Washing Machine Repair"
];

const Booking = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [booked, setBooked] = useState(false);

  const onSubmit = (data) => {
    console.log("Booking Confirmed:", data);
    setBooked(true);
  };

  return (
    <PageTransition>
    <section className="page-gradient-bg" style={{ paddingTop: '150px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        <div className="text-center padding-bottom-large">
          <h4 className="section-subtitle text-primary">FAST & RELIABLE</h4>
          <h2 className="section-title text-dark">Book Service Online</h2>
          <p className="text-muted text-max-width" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Schedule an expert visit right now. Our certified technician will reach your location within 2 hours anywhere in Hyderabad.
          </p>
        </div>

        <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', borderRadius: '24px', position: 'relative', zIndex: 1 }}>
          {booked ? (
             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-5">
               <div style={{ width: '80px', height: '80px', background: '#e0fcf0', color: '#10b981', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', margin: '0 auto 20px', fontSize: '2rem' }}>
                  ✓
               </div>
               <h3 className="text-dark mb-2">Booking Confirmed!</h3>
               <p className="text-muted mb-4">Your service request has been logged. Our technician will contact you shortly to confirm the exact location.</p>
               <button onClick={() => setBooked(false)} className="btn btn-outline">Book Another</button>
             </motion.div>
          ) : (
             <form onSubmit={handleSubmit(onSubmit)} className="grid-2-sm align-start">
               <div className="input-group" style={{ gridColumn: 'span 2' }}>
                  <label className="input-label">Select Service Needed</label>
                  <select className="form-control" {...register('service', { required: 'Please select a service' })}>
                    <option value="">-- Choose what needs fixing --</option>
                    {servicesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.service && <span className="error-msg">{errors.service.message}</span>}
               </div>
               
               <div className="input-group">
                  <label className="input-label">Full Name</label>
                  <input type="text" className="form-control" {...register('name', { required: 'Name is required' })} placeholder="e.g. Rahul Sharma" />
                  {errors.name && <span className="error-msg">{errors.name.message}</span>}
               </div>
               
               <div className="input-group">
                  <label className="input-label">Mobile Number</label>
                  <input type="tel" className="form-control" {...register('phone', { required: 'Phone is required', pattern: { value: /^[0-9]{10}$/, message: '10 digit number only' } })} placeholder="Phone Number" />
                  {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
               </div>
               
               <div className="input-group" style={{ gridColumn: 'span 2' }}>
                  <label className="input-label">Complete Address Details (House No, Street, Area)</label>
                  <textarea className="form-control" rows="3" {...register('address', { required: 'Address is required to dispatch technician' })} placeholder="Where should we send our technician?"></textarea>
                  {errors.address && <span className="error-msg">{errors.address.message}</span>}
               </div>
               
               <div className="input-group" style={{ gridColumn: 'span 2' }}>
                  <label className="input-label">Specific Issue Details (Optional)</label>
                  <input type="text" className="form-control" {...register('details')} placeholder="e.g. AC not cooling, making loud noise, getting error code..." />
               </div>
               
               <div className="input-group pt-4" style={{ gridColumn: 'span 2', textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary lg" style={{ padding: '1rem 3rem', fontSize: '1.1rem', color: 'white' }}>
                    Confirm Booking • ₹350 Visit
                  </button>
                  <p className="text-sm text-muted mt-3">Charges for replacement parts will be provided after inspection.</p>
               </div>
             </form>
          )}
        </div>
      </div>
    </section>
    </PageTransition>
  );
};

export default Booking;

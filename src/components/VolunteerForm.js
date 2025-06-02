import React, { useState } from 'react';
import { registrations } from '../data/data';
import './VolunteerForm.css';

const VolunteerForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const registration = createVolunteerRegistration(event.id, {
        ...formData,
        date: new Date().toISOString()
      });
      
      console.log('Registration created:', registration);
      alert(`Thank you for signing up for ${event.title}!`);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error creating registration:', error);
      alert('There was an error submitting your registration. Please try again.');
    }
  };

  return (
    <div className="volunteer-form">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Volunteer for {event.title}</h2>
      <p className="event-info">
        <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}<br />
        <strong>Time:</strong> {event.time.replace(/-/g, ' - ')}<br />
        <strong>Location:</strong> {event.location.name}<br />
        <strong>Requirements:</strong> {event.requirements.join(', ')}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default VolunteerForm;

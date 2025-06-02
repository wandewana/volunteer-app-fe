import React, { useState } from 'react';
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
    // In a real app, this would submit to a backend
    console.log('Form submitted for event:', event.title, '\nVolunteer data:', formData);
    alert(`Thank you for signing up for ${event.title}!`);
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="volunteer-form">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Volunteer for {event.title}</h2>
      <p className="event-info">
        <strong>Date:</strong> {event.date}<br />
        <strong>Time:</strong> {event.time}<br />
        <strong>Location:</strong> {event.location}
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

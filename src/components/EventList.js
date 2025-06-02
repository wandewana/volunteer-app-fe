import React, { useState } from 'react';
import { VolunteerForm } from '.';
import './EventList.css';

const mockEvents = [
  {
    id: 1,
    title: 'Community Clean-up Day',
    date: 'June 10, 2025',
    time: '9:00 AM - 12:00 PM',
    location: 'Central Park',
    description: 'Join us for a community clean-up event to help keep our city beautiful!',
    requiredVolunteers: 20,
    enrolled: 15
  },
  {
    id: 2,
    title: 'Food Bank Distribution',
    date: 'June 15, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'City Food Bank',
    description: 'Help distribute food to those in need in our community.',
    requiredVolunteers: 15,
    enrolled: 8
  },
  {
    id: 3,
    title: 'Senior Center Activity Day',
    date: 'June 20, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'Sunshine Senior Center',
    description: 'Organize activities and spend time with senior citizens.',
    requiredVolunteers: 10,
    enrolled: 4
  }
];

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
  };

  if (selectedEvent) {
    return <VolunteerForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />;
  }

  return (
    <div className="event-list">
      <h2>Upcoming Volunteer Events</h2>
      <div className="events-container">
        {mockEvents.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <div className="event-details">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Volunteers Needed:</strong> {event.requiredVolunteers - event.enrolled} / {event.requiredVolunteers}</p>
            </div>
            <p className="event-description">{event.description}</p>
            <button 
              className="register-btn" 
              onClick={() => handleRegisterClick(event)}
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;

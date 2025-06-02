import React, { useState } from 'react';
import { VolunteerForm } from '.';
import { events } from '../data/data';
import './EventList.css';

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterClick = (eventId) => {
    const event = events.find(e => e.id === eventId);
    setSelectedEvent(event);
  };

  if (selectedEvent) {
    return <VolunteerForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />;
  }

  return (
    <div className="event-list">
      <h2>Upcoming Volunteer Events</h2>
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <div className="event-details">
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {event.time.replace(/-/g, ' - ')}</p>
              <p><strong>Location:</strong> {event.location.name}</p>
              <p><strong>Volunteers Needed:</strong> {event.requiredVolunteers - event.enrolledVolunteers} / {event.requiredVolunteers}</p>
            </div>
            <p className="event-description">{event.description}</p>
            <button 
              className="register-btn" 
              onClick={() => handleRegisterClick(event.id)}
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

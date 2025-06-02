// Event data structure
export const events = [
  {
    id: 1,
    title: 'Community Clean-up Day',
    date: '2025-06-10',
    time: '09:00-12:00',
    location: {
      name: 'Central Park',
      address: '123 Park Ave, City',
      coordinates: {
        lat: 40.7653,
        lng: -73.9797
      }
    },
    description: 'Join us for a community clean-up event to help keep our city beautiful!',
    requiredVolunteers: 20,
    enrolledVolunteers: 15,
    status: 'upcoming',
    organizer: {
      id: 1,
      name: 'Community Services',
      contact: {
        email: 'info@communityservices.org',
        phone: '555-1234'
      }
    },
    requirements: [
      'Wear comfortable clothing',
      'Bring reusable water bottle',
      'Wear closed-toe shoes'
    ],
    createdAt: '2025-05-20T14:30:00Z',
    updatedAt: '2025-06-01T10:00:00Z'
  },
  {
    id: 2,
    title: 'Food Bank Distribution',
    date: '2025-06-15',
    time: '14:00-17:00',
    location: {
      name: 'City Food Bank',
      address: '456 Food St, City',
      coordinates: {
        lat: 40.7829,
        lng: -73.9654
      }
    },
    description: 'Help distribute food to those in need in our community.',
    requiredVolunteers: 15,
    enrolledVolunteers: 8,
    status: 'upcoming',
    organizer: {
      id: 2,
      name: 'Local Food Bank',
      contact: {
        email: 'volunteer@foodbank.org',
        phone: '555-5678'
      }
    },
    requirements: [
      'Must be 18 years or older',
      'Wear comfortable clothing',
      'Background check required'
    ],
    createdAt: '2025-05-25T09:45:00Z',
    updatedAt: '2025-06-02T11:00:00Z'
  },
  {
    id: 3,
    title: 'Senior Center Activity Day',
    date: '2025-06-20',
    time: '10:00-14:00',
    location: {
      name: 'Sunshine Senior Center',
      address: '789 Senior Way, City',
      coordinates: {
        lat: 40.7712,
        lng: -73.9834
      }
    },
    description: 'Organize activities and spend time with senior citizens.',
    requiredVolunteers: 10,
    enrolledVolunteers: 4,
    status: 'upcoming',
    organizer: {
      id: 3,
      name: 'Senior Services',
      contact: {
        email: 'activities@seniorservices.org',
        phone: '555-9012'
      }
    },
    requirements: [
      'Must be patient and kind',
      'Wear comfortable clothing',
      'Willing to listen and engage'
    ],
    createdAt: '2025-05-30T13:15:00Z',
    updatedAt: '2025-06-01T14:30:00Z'
  }
];

// Volunteer data structure
export const volunteers = [
  {
    id: 1,
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '555-0123',
      dateOfBirth: '1990-01-01',
      address: {
        street: '123 Main St',
        city: 'City',
        state: 'NY',
        zipCode: '10001'
      }
    },
    availability: {
      preferredDays: ['saturday', 'sunday'],
      preferredTimes: ['morning', 'afternoon'],
      flexible: true
    },
    skills: ['communication', 'organizing', 'teaching'],
    preferences: {
      eventTypes: ['community', 'senior_care', 'food_distribution'],
      distance: '50km',
      notificationPreferences: {
        email: true,
        sms: true,
        push: true
      }
    },
    status: 'active',
    createdAt: '2025-05-15T10:00:00Z',
    updatedAt: '2025-06-01T14:30:00Z'
  },
  {
    id: 2,
    personalInfo: {
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '555-4567',
      dateOfBirth: '1985-03-15',
      address: {
        street: '456 Oak Ave',
        city: 'City',
        state: 'NY',
        zipCode: '10002'
      }
    },
    availability: {
      preferredDays: ['monday', 'wednesday', 'friday'],
      preferredTimes: ['afternoon', 'evening'],
      flexible: false
    },
    skills: ['first_aid', 'translation', 'event_planning'],
    preferences: {
      eventTypes: ['emergency_response', 'language_services', 'community'],
      distance: '30km',
      notificationPreferences: {
        email: true,
        sms: false,
        push: true
      }
    },
    status: 'active',
    createdAt: '2025-05-20T11:30:00Z',
    updatedAt: '2025-06-02T09:15:00Z'
  }
];

// Registration data structure
export const registrations = [
  {
    id: 1,
    eventId: 1,
    volunteerId: 1,
    status: 'confirmed',
    registrationDate: '2025-05-30T14:00:00Z',
    notes: 'Available for full duration',
    roles: ['team_leader', 'participant'],
    checkIn: {
      status: 'pending',
      time: null
    }
  },
  {
    id: 2,
    eventId: 2,
    volunteerId: 2,
    status: 'pending',
    registrationDate: '2025-06-01T10:15:00Z',
    notes: 'Available from 2:30 PM',
    roles: ['participant'],
    checkIn: {
      status: 'pending',
      time: null
    }
  }
];

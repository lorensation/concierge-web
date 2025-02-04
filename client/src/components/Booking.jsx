import axios from 'axios';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startTime: '',
    endTime: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Book Calendar Event
      const bookingResponse = await axios.post('/api/book-meeting', formData);
      
      // Send Confirmation Email
      await axios.post('/api/send-email', {
        to: formData.email,
        subject: 'Meeting Confirmation',
        text: `Your meeting is scheduled for ${formData.startTime}`
      });

      alert('Meeting booked successfully!');
    } catch (error) {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="datetime-local"
        required
        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
      />
      <input
        type="datetime-local"
        required
        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
      />
      <button type="submit">Book Now</button>
    </form>
  );
}
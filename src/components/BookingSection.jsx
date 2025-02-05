// src/components/BookingSection.jsx
"use client"

import React, { useState } from 'react'

export default function BookingSection() {
  // placeholder states
  const [selectedDateTime, setSelectedDateTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // placeholder handler
  const handleBooking = (e) => {
    e.preventDefault()
    // TODO: Integrate with Google Calendar API & send email confirmation
    console.log('Booking request:', selectedDateTime)
    setSubmitted(true)
  }

  return (
    <section 
      id="booking-section" 
      className="py-12 px-6 bg-gray-100"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Book a Meeting
        </h2>
        <p className="text-gray-600 mb-6">
          Select a time slot that suits you, and I’ll send a confirmation email 
          with all the details. 
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded">
            Thank you! Your request has been received.
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <input 
              type="datetime-local"
              className="block w-full border border-gray-300 rounded p-2"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {/* Later, you’d integrate Google Calendar & email logic here */}
      </div>
    </section>
  )
}

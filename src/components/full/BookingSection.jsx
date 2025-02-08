// src/components/BookingSection.jsx
"use client"

import React, { useState, useEffect } from 'react'

export default function BookingSection() {
  const [availableSlots, setAvailableSlots] = useState([])
  const [selectedSlot, setSelectedSlot] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetchAvailableSlots()
  }, [])

  const fetchAvailableSlots = async () => {
    try {
      const response = await fetch('/api/getAvailableSlots')
      if (!response.ok) throw new Error('Failed to fetch slots')
      const data = await response.json()
      setAvailableSlots(data)
    } catch (error) {
      console.error('Error fetching slots:', error)
    }
  }

  const handleBooking = async (e) => {
    e.preventDefault()
    if (!selectedSlot) return
    
    try {
      const response = await fetch('/api/bookSlot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slot: selectedSlot })
      })
      
      if (!response.ok) throw new Error('Booking failed')

      setSubmitted(true)
    } catch (error) {
      console.error('Booking error:', error)
    }
  }

  return (
    <section id="booking-section" className="py-12 px-6 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Book a Meeting</h2>
        <p className="text-gray-600 mb-6">
          Select a time slot that suits you, and I’ll send a confirmation email with all the details.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded">
            Thank you! Your request has been received.
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <select
              className="block w-full border border-gray-300 rounded p-2"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              required
            >
              <option value="">Select a Time Slot</option>
              {availableSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <button 
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

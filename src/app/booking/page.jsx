// src/app/booking/page.jsx
import React from 'react'
import BookingSection from '@/components/full/BookingSection'  // Your existing booking logic

export const metadata = {
  title: 'Booking | Truchic Experiences',
  description: 'Schedule a meeting to discuss your luxury travel plans.'
}

export default function BookingPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Schedule Your Consultation</h1>
      <BookingSection />
      {/* Possibly more details or instructions about the process */}
    </main>
  )
}

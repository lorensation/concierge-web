// src/components/BookingPreview.jsx
import React from 'react'
import Link from 'next/link'

export default function BookingPreview() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule a Call</h2>
        <p className="text-gray-600 mb-6">
          Quickly reserve a slot for a personalized travel consultation...
        </p>
        <Link href="/booking">
          <button 
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Book Now
          </button>
        </Link>
      </div>
    </section>
  )
}

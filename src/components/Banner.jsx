// src/components/Banner.jsx
import React from 'react'
import Image from 'next/image'
// Example: if you have a background image in /public folder

export default function Banner() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image (optional) 
          You could use Image with fill layout or a background via Tailwind classes */}
      
      {/* Example using a Tailwind background. You can also do <Image> if you prefer. */}
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Exclusive Travel & Concierge Service
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          30+ Years of Experience Across 20+ Countries
        </p>
        <button
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          onClick={() => {
            // Example: you could direct them to /booking or open a modal
            window.location.href = '/booking'
          }}
        >
          Schedule a Call
        </button>
      </div>
    </section>
  )
}

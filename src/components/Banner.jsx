// src/components/Banner.jsx
"use client"  // Needed because we use onClick

import React from 'react'

export default function Banner() {
  // Generic scroll function
  const handleScrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gray-200">
      {/* Background image (Tailwind approach). 
         You can swap this for <Image> if you prefer the Next Image component. 
      */}
      <div
        className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center brightness-75"
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Exclusive Travel & Concierge Service
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8">
          30+ Years of Experience in 20+ Countries
        </p>

        {/* Example: Two CTA buttons (add more if needed) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Scroll to Booking Section */}
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 
                       rounded-full text-lg transition"
            onClick={() => handleScrollToSection('booking-section')}
          >
            Schedule a Call
          </button>
          
          {/* Scroll to About Section */}
          <button
            className="bg-transparent border border-white text-white py-3 px-6 
                       rounded-full text-lg hover:bg-white hover:text-indigo-600 
                       transition"
            onClick={() => handleScrollToSection('about')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}



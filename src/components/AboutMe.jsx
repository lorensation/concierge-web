// src/components/AboutMe.jsx
"use client" // If you have no event handlers, you can remove this, but let's keep in case we add toggles

import React from 'react'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about" className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Photo or Video */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          {/* If you have a photo: */}
          <Image
            src="/expert-photo.jpg"
            alt="Travel Expert"
            fill
            className="object-cover"
          />

          {/* If you prefer a video, you could comment out <Image> and embed a video:
           <video
             src="/intro-video.mp4"
             controls
             className="rounded-md"
           />
          */}
        </div>
        
        {/* Bio */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Meet Your Luxury Travel Expert
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a seasoned travel professional with over <strong>30 years of experience</strong> 
            organizing exclusive trips in <strong>20+ countries</strong>. 
            My VIP concierge network spans the globe, ensuring you get the 
            most luxurious, stress-free experience possible. Let me create your next 
            unforgettable journey!
          </p>
          
          {/* Social Links */}
          <div className="mt-4 space-x-4">
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com/your-profile" 
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:underline"
            >
              Instagram
            </a>
            <a 
              href="https://pinterest.com/your-profile" 
              target="_blank"
              rel="noreferrer"
              className="text-red-600 hover:underline"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

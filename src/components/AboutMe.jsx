// src/components/AboutMe.jsx
import React from 'react'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Replace with your actual image or remove <Image> in favor of <img> if you prefer */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/my-profile.jpg" // Replace with your actual image path
            alt="Truchic Founder"
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Meet Your Luxury Travel Expert
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            With over 30 years of experience organizing exclusive trips in 20+ countries,
            I provide VIP services, insider access, and a global network of luxury partners.
            I can’t wait to plan your next unforgettable journey!
          </p>
          
          <div className="mt-4 space-x-3">
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Instagram
            </a>
            <a 
              href="https://pinterest.com/your-profile"
              target="_blank" 
              rel="noopener noreferrer"
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

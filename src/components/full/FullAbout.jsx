// src/components/FullAbout.jsx
import React from 'react'
import Image from 'next/image'

export default function FullAbout() {
  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto">
        <Image
          src="/your-profile.jpg"
          alt="Your Photo"
          fill
          className="object-cover"
        />
      </div>
      <p>
        Lorem ipsum about your extensive travel background, VIP networks, 
        recommended spots, personal anecdotes, etc.
      </p>
      {/* ... more details, pictures, stats, etc. */}
    </section>
  )
}

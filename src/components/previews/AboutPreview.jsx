// src/components/AboutPreview.jsx
import React from 'react'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 mb-6">
          30+ years of experience, 20+ countries visited, and a global VIP network...
        </p>
        <Link href="/about">
          <button 
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Learn More
          </button>
        </Link>
      </div>
    </section>
  )
}

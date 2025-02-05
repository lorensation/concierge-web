// src/components/Navbar.jsx
"use client"  // If you plan to use client-side React features (like menu toggles)

import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-white shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">
          Truchic Experiences
        </Link>
      </div>
      <div className="space-x-6">
        <Link href="/about" className="hover:text-gray-500 transition">
          About
        </Link>
        <Link href="/booking" className="hover:text-gray-500 transition">
          Booking
        </Link>
        <Link href="/reviews" className="hover:text-gray-500 transition">
          Reviews
        </Link>
        <Link href="/contact" className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>
    </nav>
  )
}

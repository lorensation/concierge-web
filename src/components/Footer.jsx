// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-4 px-8 bg-gray-50 border-t mt-6">
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Truchic Experiences – All Rights Reserved
      </div>
    </footer>
  )
}

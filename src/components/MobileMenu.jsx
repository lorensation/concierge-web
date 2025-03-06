"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button className="menu-button text-white" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="mobile-menu bg-[#1B263B] w-4/5 h-full p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-xl font-bold">Menu</h2>
              <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/booking"
                className="text-white hover:text-gray-300 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/corporate"
                className="text-white hover:text-gray-300 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                Corporate
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-gray-300 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#1B263B] px-6 py-2 rounded-full hover:bg-gray-200 transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}


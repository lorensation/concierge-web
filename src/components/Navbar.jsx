"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1B263B] py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/TruchicExperiencesFinalLogo.jpg" alt="Truchic Experience" width={180} height={100} className="h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-white hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/booking" className="text-white hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="/corporate" className="text-white hover:text-gray-300 transition">
            Corporate
          </Link>
          <Link href="/contact" className="bg-white text-[#1B263B] px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
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
      </div>
    </nav>
  )
}








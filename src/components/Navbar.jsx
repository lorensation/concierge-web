"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full bg-[#1B263B] py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/TruchicExperiencesFinalLogo.jpg"
            alt="Truchic Experience"
            width={180}
            height={100}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/booking">Services</NavLink>
          <NavLink href="/corporate">Corporate</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Link href="/contact" className="bg-white text-[#1B263B] px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1B263B] z-40 flex flex-col items-center justify-center">
          <NavLink href="/about" mobile onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink href="/booking" mobile onClick={toggleMenu}>
            Services
          </NavLink>
          <NavLink href="/corporate" mobile onClick={toggleMenu}>
            Corporate
          </NavLink>
          <NavLink href="/blog" mobile onClick={toggleMenu}>
            Blog
          </NavLink>
          <Link
            href="/contact"
            className="bg-white text-[#1B263B] px-6 py-2 rounded-full hover:bg-gray-200 transition mt-4"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, mobile, onClick }) {
  return (
    <Link
      href={href}
      className={`text-white hover:text-gray-300 transition ${mobile ? "text-2xl my-4" : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}










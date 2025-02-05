// src/app/layout.js

import './globals.css'  // Tailwind and any global styling
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Truchic Experiences - Conciergerie',
  description: 'Luxury travel and concierge services by a professional with 30+ years of experience.'
}

// If you want client-side interactions in the layout (like toggling a menu),
// you can add "use client" at the top. But if it's static, it's not necessary.

// "children" is the content of whatever page is currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800"> 
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


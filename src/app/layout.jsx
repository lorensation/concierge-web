// src/app/layout.js

import './globals.css'  // Tailwind and any global styling
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: 'Truchic Experiences - Conciergerie',
  description: 'Luxury travel and concierge services by a professional with 30+ years of experience.'
}

// "children" is the content of whatever page is currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800"> 
        ;<Toaster position="top-center" />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


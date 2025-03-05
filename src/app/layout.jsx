// src/app/layout.js
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Truchic Experiences - Conciergerie',
  description: 'Luxury travel and concierge services by a professional with 30+ years of experience.'
}

// "children" is the content of whatever page is currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800"> 
        <Navbar />
        <main className="min-h-screen">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  )
}


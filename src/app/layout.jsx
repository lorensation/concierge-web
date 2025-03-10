import { verifyEnv } from "@/utils/verifyEnv"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import SkipToContent from "@/components/SkipToContent"
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper"
import CookieConsent from "@/components/CookieConsent"

export const metadata = {
  title: "Truchic Experiences - Luxury Travel & Concierge Services",
  description: "Exclusive luxury travel and concierge services by a professional with 30+ years of experience.",
}

export default function RootLayout({ children }) {
  if (!verifyEnv()) {
    console.error("Missing required environment variables. Please check your configuration.")
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
        <GoogleAnalyticsWrapper GA_MEASUREMENT_ID="G-W1SJJ0L1K4" />
        <CookieConsent />
      </body>
    </html>
  )
}


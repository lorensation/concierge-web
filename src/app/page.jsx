// src/app/page.js

import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      {/* Banner (Hero) */}
      <Banner />

      {/* About Me Section */}
      <AboutMe />

      {/* Optionally add more sections here:
          - Booking (Calendar integration)
          - Reviews
          - etc.
      */}
      <Footer />
    </div>
  )
}

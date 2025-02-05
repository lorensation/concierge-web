// src/app/page.jsx

import Banner from '@/components/Banner'
import AboutPreview from '@/components/previews/AboutPreview'
import BookingPreview from '@/components/previews/BookingPreview'
import ReviewsPreview from '@/components/previews/ReviewsPreview'
import ContactPreview from '@/components/previews/ContactPreview'

export default function Home() {
  return (
    <main>
      <Banner />
      {/* Minimal representations */}
      <AboutPreview />
      <BookingPreview />
      <ReviewsPreview />
      <ContactPreview />
    </main>
  )
}



// src/app/reviews/page.jsx
import React from 'react'
import ReviewsSection from '@/components/ReviewsSection'

export const metadata = {
  title: 'Reviews | Truchic Experiences',
  description: 'Read real testimonials from previous clients.'
}

export default function ReviewsPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Client Reviews</h1>
      <ReviewsSection />
    </main>
  )
}

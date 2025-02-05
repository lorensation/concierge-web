// src/app/about/page.jsx
import React from 'react'
import FullAbout from '@/components/FullAbout'  // If you want a separate, detailed component
// or you could just inline the content in this page

export const metadata = {
  title: 'About | Truchic Experiences',
  description: 'Meet your luxury travel expert, with 30+ years of experience...'
}

export default function AboutPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      {/* Insert more detailed content about your experience, or reuse a component */}
      <FullAbout />
    </main>
  )
}

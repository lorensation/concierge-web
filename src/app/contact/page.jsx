// src/app/contact/page.jsx
import React from 'react'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'Contact | Truchic Experiences',
  description: 'Get in touch to plan your next VIP travel experience.'
}

export default function ContactPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <ContactSection />
    </main>
  )
}

"use client"

import React, { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // TODO: send the data to an API endpoint that sends an email
    // For now, just log and show a success state
    console.log('Contact form submission:', formData)
    setSubmitted(true)

    // Reset
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-12 px-6 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Me
        </h2>
        
        {/* WhatsApp & Phone */}
        <p className="mb-4">
          WhatsApp: <a href="https://wa.me/0034649880864" className="text-indigo-600 hover:underline">+34 649 88 08 64</a> <br />
          Phone: <span className="text-gray-800">+34 913 51 69 92</span>
        </p>

        {/* Contact Form */}
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => 
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => 
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => 
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

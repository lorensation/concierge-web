"use client"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contactSubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      console.log("Form submitted successfully:", data)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B263B] mb-4">Get in Touch</h2>
          <p className="text-gray-600">We're here to help plan your perfect luxury experience</p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#1B263B] mb-4">Contact Details</h3>
            <p className="mb-2">
              <span className="font-medium">WhatsApp:</span>{" "}
              <a href="https://wa.me/0034649880864" className="text-[#1B263B] hover:underline">
                +34 649 88 08 64
              </a>
            </p>
            <p className="mb-2">
              <span className="font-medium">Phone:</span> <span className="text-gray-600">+34 913 51 69 92</span>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:infotruchic@gmail.com" className="text-[#1B263B] hover:underline">
                infotruchic@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#1B263B] mb-4">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (CET)</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM (CET)</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`mb-6 p-4 rounded-md ${
              submitStatus === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {submitStatus === "success"
              ? "Thank you! Your message has been sent successfully."
              : "There was an error sending your message. Please try again."}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#1B263B] text-white px-8 py-3 rounded-md transition
                ${isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:bg-[#2d3b50]"}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}




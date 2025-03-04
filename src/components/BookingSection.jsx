"use client"

import { useState, useEffect } from "react"
import BookingCalendar from "./BookingCalendar"
import { format } from "date-fns"
import esES from "date-fns/locale/es"

export default function BookingSection() {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  })

  // Reset form after submission
  useEffect(() => {
    let timeoutId
    if (submitted) {
      timeoutId = setTimeout(() => {
        setSubmitted(false)
        setSelectedSlot(null)
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
        })
      }, 60000) // 60 seconds = 1 minute
    }

    // Cleanup timeout on component unmount or when submitted changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [submitted])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBooking = async (e) => {
    e.preventDefault()

    if (!selectedSlot || !formData.name || !formData.surname || !formData.email || !formData.phone) {
      alert("All fields are required!")
      return
    }

    try {
      const response = await fetch("/api/bookSlot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slot: selectedSlot.start.toISOString(),
          user: { ...formData },
        }),
      })

      if (!response.ok) throw new Error("Error processing booking")

      setSubmitted(true)
    } catch (error) {
      console.error("Booking error:", error)
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-serif mb-6 text-center">Book Your Luxury Consultation</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded text-center">
            <p>Thank you! Your request has been processed. We'll be in touch shortly to confirm your appointment.</p>
            <p className="text-sm mt-2">This message will disappear in 60 seconds.</p>
          </div>
        ) : (
          <>
            <BookingCalendar onSelectSlot={setSelectedSlot} />

            {selectedSlot && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Selected Time Slot</h3>
                <p className="text-gray-700">
                  <strong>Date:</strong> {format(selectedSlot.start, "EEEE, dd MMMM yyyy", { locale: esES })}
                </p>
                <p className="text-gray-700">
                  <strong>Time:</strong> {format(selectedSlot.start, "HH:mm", { locale: esES })} -{" "}
                  {format(selectedSlot.end, "HH:mm", { locale: esES })}
                </p>
              </div>
            )}

            {selectedSlot && (
              <form onSubmit={handleBooking} className="mt-8 space-y-6">
                <h3 className="text-2xl font-serif mb-4">Your Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="surname">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#1B263B] text-white px-8 py-3 rounded-md hover:bg-[#2d3b50] transition font-semibold"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  )
}


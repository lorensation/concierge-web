"use client"

import { useState } from "react"

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // null, 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Subscription failed")
      }

      setStatus("success")
      setEmail("")
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-serif mb-4">Stay Updated</h3>

      {status === "success" ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
          Thank you for subscribing to our newsletter!
        </div>
      ) : status === "error" ? (
        <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
          There was an error processing your subscription. Please try again.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#1B263B] text-white px-6 py-2 rounded-md hover:bg-[#2d3b50] transition disabled:opacity-70"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  )
}


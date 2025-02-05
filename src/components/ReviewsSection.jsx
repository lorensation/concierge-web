// src/components/ReviewsSection.jsx
"use client"

import React, { useState } from 'react'

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Alice', rating: 5, text: 'Amazing service!' },
    { id: 2, name: 'Bob', rating: 4, text: 'Great experience overall.' }
  ])
  
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just add to local state:
    const reviewToAdd = {
      ...newReview,
      id: Date.now() // unique ID
    }
    setReviews([...reviews, reviewToAdd])
    setNewReview({ name: '', rating: 5, text: '' })
    // In production, you’d send this to an API for approval
  }

  return (
    <section id="reviews" className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reviews</h2>
        
        {/* Existing reviews */}
        <div className="space-y-4 mb-8">
          {reviews.map((rev) => (
            <div key={rev.id} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{rev.name || 'Anonymous'}</span>
                <span className="text-yellow-500">
                  {('★').repeat(rev.rating)}{('☆').repeat(5 - rev.rating)}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{rev.text}</p>
            </div>
          ))}
        </div>
        
        {/* New review form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Submit a Review</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name (optional)
            </label>
            <input 
              className="mt-1 block w-full border rounded p-2"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              placeholder="Your Name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Rating (1-5)
            </label>
            <input 
              type="number" 
              min="1" 
              max="5"
              className="mt-1 block w-20 border rounded p-2"
              value={newReview.rating}
              onChange={(e) => 
                setNewReview({ ...newReview, rating: Number(e.target.value) })
              }
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Testimonial
            </label>
            <textarea
              className="mt-1 block w-full border rounded p-2"
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              placeholder="Share your experience..."
              required
            />
          </div>
          
          <button 
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  )
}

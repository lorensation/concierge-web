"use client"

import { useState } from "react"
import Link from "next/link"

export default function SubscribersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [subscribers, setSubscribers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      fetchSubscribers()
    } else {
      alert("Invalid password")
    }
  }

  const fetchSubscribers = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/subscribers")
      if (!response.ok) throw new Error("Failed to fetch subscribers")

      const data = await response.json()
      setSubscribers(data.subscribers)
    } catch (err) {
      console.error("Error fetching subscribers:", err)
      setError("Failed to load subscribers. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Subscribers Dashboard Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B263B] text-white px-4 py-2 rounded-md hover:bg-[#2d3b50] transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Email Subscribers</h1>
          <div className="space-x-4">
            <Link
              href="/admin/seo-dashboard"
              className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              SEO Dashboard
            </Link>
            <button
              onClick={fetchSubscribers}
              className="bg-[#1B263B] text-white px-4 py-2 rounded-md hover:bg-[#2d3b50] transition"
            >
              Refresh List
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B263B] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading subscribers...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-800 p-4 rounded-md">{error}</div>
        ) : subscribers.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600">
              No subscribers found. Start collecting emails by sharing your newsletter signup form.
            </p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Added
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscribers.map((subscriber, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{subscriber.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{subscriber.name || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                          subscriber.source === "newsletter"
                            ? "bg-blue-100 text-blue-800"
                            : subscriber.source === "booking"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {subscriber.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(subscriber.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Email Export</h2>
          <p className="text-gray-600 mb-4">Export your subscriber list for use in email marketing tools.</p>
          <button
            onClick={() => {
              const csvContent =
                "data:text/csv;charset=utf-8," +
                "Email,Name,Source,Date\n" +
                subscribers
                  .map((s) => `${s.email},"${s.name || ""}",${s.source},"${new Date(s.date).toLocaleDateString()}"`)
                  .join("\n")

              const encodedUri = encodeURI(csvContent)
              const link = document.createElement("a")
              link.setAttribute("href", encodedUri)
              link.setAttribute("download", "truchic-subscribers.csv")
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
            className="bg-[#1B263B] text-white px-4 py-2 rounded-md hover:bg-[#2d3b50] transition"
            disabled={subscribers.length === 0}
          >
            Export CSV
          </button>
        </div>
      </div>
    </div>
  )
}


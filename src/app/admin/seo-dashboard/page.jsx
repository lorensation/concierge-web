"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SeoDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  // Mock data - in a real implementation, this would come from your analytics API
  const performanceData = [
    { name: "Homepage", score: 92, visitors: 1200 },
    { name: "About", score: 88, visitors: 450 },
    { name: "Services", score: 90, visitors: 780 },
    { name: "Corporate", score: 85, visitors: 320 },
    { name: "Blog", score: 95, visitors: 890 },
    { name: "Contact", score: 87, visitors: 230 },
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    // In a real implementation, you would validate against a secure backend
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">SEO Dashboard Login</h1>
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
        <h1 className="text-3xl font-bold mb-8">SEO Performance Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard title="Total Visitors" value="3,870" change="+12%" positive={true} />
          <MetricCard title="Avg. Page Load Time" value="1.2s" change="-0.3s" positive={true} />
          <MetricCard title="Bounce Rate" value="32%" change="+2%" positive={false} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Page Performance Scores</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#1B263B" name="SEO Score" />
                <Bar dataKey="visitors" fill="#4A6FA5" name="Visitors" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Top Keywords</h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">Keyword</th>
                  <th className="text-left py-2">Position</th>
                  <th className="text-left py-2">Traffic</th>
                </tr>
              </thead>
              <tbody>
                <KeywordRow keyword="luxury travel services" position="3" traffic="420" />
                <KeywordRow keyword="VIP concierge spain" position="2" traffic="385" />
                <KeywordRow keyword="bespoke travel experiences" position="5" traffic="310" />
                <KeywordRow keyword="luxury corporate events" position="4" traffic="275" />
                <KeywordRow keyword="exclusive travel planning" position="7" traffic="190" />
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">SEO Recommendations</h2>
            <ul className="space-y-3">
              <RecommendationItem text="Add more internal links to the Corporate page" priority="High" />
              <RecommendationItem text="Improve mobile page speed on Blog pages" priority="Medium" />
              <RecommendationItem text="Add FAQ schema to Services page" priority="Medium" />
              <RecommendationItem text="Create more content targeting 'luxury travel planning'" priority="High" />
              <RecommendationItem text="Fix 2 broken links on About page" priority="High" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, positive }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex items-end mt-2">
        <span className="text-3xl font-bold">{value}</span>
        <span className={`ml-2 text-sm ${positive ? "text-green-500" : "text-red-500"}`}>{change}</span>
      </div>
    </div>
  )
}

function KeywordRow({ keyword, position, traffic }) {
  return (
    <tr className="border-t">
      <td className="py-2">{keyword}</td>
      <td className="py-2">{position}</td>
      <td className="py-2">{traffic}</td>
    </tr>
  )
}

function RecommendationItem({ text, priority }) {
  const priorityColor =
    priority === "High"
      ? "bg-red-100 text-red-800"
      : priority === "Medium"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-green-100 text-green-800"

  return (
    <li className="flex items-start">
      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${priorityColor} mr-2`}>{priority}</span>
      <span>{text}</span>
    </li>
  )
}


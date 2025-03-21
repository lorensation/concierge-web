"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  setConsentCookie,
  getConsentCookie,
  setAnalyticsCookie,
  setMarketingCookie,
  ANALYTICS_COOKIE,
  MARKETING_COOKIE,
} from "@/utils/cookieManager"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = getConsentCookie()
    if (consent === undefined) {
      setShowBanner(true)
    } else if (consent === "true") {
      const analyticsPref = localStorage.getItem(ANALYTICS_COOKIE)
      const marketingPref = localStorage.getItem(MARKETING_COOKIE)
      setAnalyticsCookie(analyticsPref === "true" ? "true" : "false")
      setMarketingCookie(marketingPref === "true" ? "true" : "false")
    }
  }, [])

  const acceptCookies = () => {
    setConsentCookie("true")
    setAnalyticsCookie(preferences.analytics ? "true" : "false")
    setMarketingCookie(preferences.marketing ? "true" : "false")
    localStorage.setItem(ANALYTICS_COOKIE, preferences.analytics ? "true" : "false")
    localStorage.setItem(MARKETING_COOKIE, preferences.marketing ? "true" : "false")
    setShowBanner(false)
    window.location.reload()
  }

  const declineCookies = () => {
    setConsentCookie("false")
    setAnalyticsCookie("false")
    setMarketingCookie("false")
    localStorage.removeItem(ANALYTICS_COOKIE)
    localStorage.removeItem(MARKETING_COOKIE)
    setShowBanner(false)
    window.location.reload()
  }

  const handlePreferenceChange = (cookieType) => {
    setPreferences((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-700 mb-4">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <Link href="/cookie-policy" className="text-[#1B263B] hover:underline ml-1">
            Learn more
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-0">
            <label className="flex items-center mr-4 mb-2 sm:mb-0">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handlePreferenceChange("analytics")}
                className="mr-2"
              />
              Analytics Cookies
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handlePreferenceChange("marketing")}
                className="mr-2"
              />
              Marketing Cookies
            </label>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={acceptCookies}
              className="bg-[#1B263B] text-white px-4 py-2 rounded hover:bg-[#2d3b50] transition"
            >
              Accept Selected
            </button>
            <button
              onClick={declineCookies}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Decline All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


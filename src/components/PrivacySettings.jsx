"use client"

import { useState, useEffect } from "react"
import {
  setConsentCookie,
  setAnalyticsCookie,
  setMarketingCookie,
  getAnalyticsCookie,
  getMarketingCookie,
  ANALYTICS_COOKIE,
  MARKETING_COOKIE,
} from "@/utils/cookieManager"

export default function PrivacySettings() {
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const analyticsPref = getAnalyticsCookie()
    const marketingPref = getMarketingCookie()
    setPreferences({
      analytics: analyticsPref === "true",
      marketing: marketingPref === "true",
    })
  }, [])

  const handlePreferenceChange = (cookieType) => {
    setPreferences((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }))
  }

  const savePreferences = () => {
    setConsentCookie("true")
    setAnalyticsCookie(preferences.analytics ? "true" : "false")
    setMarketingCookie(preferences.marketing ? "true" : "false")
    localStorage.setItem(ANALYTICS_COOKIE, preferences.analytics ? "true" : "false")
    localStorage.setItem(MARKETING_COOKIE, preferences.marketing ? "true" : "false")
    alert("Your preferences have been saved.")
    // Optionally, reload the page to apply new settings
    window.location.reload()
  }

  return (
    <div>
      <p className="mb-4">Manage your cookie preferences below:</p>
      <div className="space-y-4">
        <label className="flex items-center">
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
      <button
        onClick={savePreferences}
        className="mt-6 bg-[#1B263B] text-white px-4 py-2 rounded hover:bg-[#2d3b50] transition"
      >
        Save Preferences
      </button>
    </div>
  )
}


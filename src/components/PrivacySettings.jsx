"use client"

import { useState } from "react"
import { Switch } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function PrivacySettings() {
  const [settings, setSettings] = useState({
    marketing: true,
    analytics: true,
    sharing: false,
  })

  const handleToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B263B] sm:text-4xl">Privacy Settings</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Manage your privacy preferences to control how we use and protect your personal information.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            {Object.entries(settings).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1B263B]">
                  {key.charAt(0).toUpperCase() + key.slice(1)} Preferences
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    {key === "marketing"
                      ? "Allow us to send you personalized offers and updates about our luxury services."
                      : key === "analytics"
                        ? "Allow us to collect anonymous data to improve our website and services."
                        : "Allow us to share your information with our trusted partners for enhanced experiences."}
                  </p>
                  <div className="mt-6 flex items-center">
                    <Switch
                      checked={value}
                      onChange={() => handleToggle(key)}
                      className={classNames(
                        value ? "bg-[#1B263B]" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1B263B] focus:ring-offset-2",
                      )}
                    >
                      <span className="sr-only">Enable {key} settings</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          value ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        )}
                      />
                    </Switch>
                    <span className="ml-3 text-sm">{value ? "Enabled" : "Disabled"}</span>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}




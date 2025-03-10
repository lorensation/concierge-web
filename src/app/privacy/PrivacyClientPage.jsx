"use client"

import PrivacySettings from "@/components/PrivacySettings"
import PrivacyContent from "./PrivacyContent"

export default function PrivacyClientPage() {
  return (
    <main className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-[#1B263B]">Privacy Policy</h1>

        <PrivacyContent />

        {/* Privacy Settings Section */}
        <div id="settings" className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-6 text-[#1B263B]">Privacy Settings</h2>
          <PrivacySettings />
        </div>
      </div>
    </main>
  )
}

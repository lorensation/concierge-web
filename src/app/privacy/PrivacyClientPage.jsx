"use client"
import PrivacySettings from "@/components/PrivacySettings"
import PrivacyContent from "./PrivacyContent"

export default function PrivacyClientPage() {
  return (
    <main className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#1B263B]">Privacy Policy</h1>

        <PrivacyContent />

        {/* Privacy Settings Section */}
        <div id="settings" className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#1B263B]">Privacy Settings</h2>
          <PrivacySettings />
        </div>
      </div>
    </main>
  )
}




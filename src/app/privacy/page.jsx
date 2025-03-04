import PrivacySettings from "@/components/PrivacySettings"

export const metadata = {
  title: "Privacy Settings | Truchic Experiences",
  description: "Manage your privacy preferences for Truchic Experiences luxury travel services.",
}

export default function PrivacyPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#1B263B]">Privacy Settings</h1>
      <PrivacySettings />
    </main>
  )
}


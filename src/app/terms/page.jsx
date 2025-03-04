import TermsAndConditions from "@/components/TermsAndConditions"

export const metadata = {
  title: "Terms and Conditions | Truchic Experiences",
  description: "Read our Terms and Conditions for using Truchic Experiences luxury travel and concierge services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <TermsAndConditions />
    </main>
  )
}


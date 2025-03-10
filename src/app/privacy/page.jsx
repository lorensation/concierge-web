import { Suspense } from "react"
import PrivacyClientPage from "./PrivacyClientPage"

export const metadata = {
  title: "Privacy Policy | Truchic Experiences",
  description:
    "Learn about our privacy practices and manage your privacy preferences for Truchic Experiences luxury travel services.",
}

export default function PrivacyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivacyClientPage />
    </Suspense>
  )
}



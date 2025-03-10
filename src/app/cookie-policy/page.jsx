import { Suspense } from "react"
import CookiePolicyContent from "./CookiePolicyContent"

export const metadata = {
  title: "Cookie Policy | Truchic Experiences",
  description: "Learn about how Truchic Experiences uses cookies to enhance your browsing experience.",
}

export default function CookiePolicyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CookiePolicyContent />
    </Suspense>
  )
}


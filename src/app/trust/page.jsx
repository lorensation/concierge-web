import TrustAndSafety from "@/components/TrustAndSafety"

export const metadata = {
  title: "Trust and Safety | Truchic Experiences",
  description: "Learn about our commitment to trust and safety in luxury travel experiences.",
}

export default function TrustPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#1B263B]">Trust and Safety</h1>
      <TrustAndSafety />
    </main>
  )
}


import HelpCenter from "@/components/HelpCenter"

export const metadata = {
  title: "Help Center | Truchic Experiences",
  description: "Find answers to frequently asked questions about our luxury travel and concierge services.",
}

export default function HelpPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#1B263B]">Help Center</h1>
      <HelpCenter />
    </main>
  )
}


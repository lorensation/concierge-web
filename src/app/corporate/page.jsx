import Image from "next/image"
import Link from "next/link"
import { Plane, Users, Building2 } from "lucide-react"

export const metadata = {
  title: "Corporate Services | Truchic Experiences",
  description: "Exclusive corporate event planning and luxury business travel services.",
}

export default function CorporatePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image src="/corporate-banner.jpg" alt="Luxury Corporate Event" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Corporate Excellence
            <br />
            Beyond Expectations
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            From intimate board meetings to large-scale corporate events, we deliver seamless luxury experiences that
            elevate your business gatherings.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Comprehensive Corporate Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Plane className="w-8 h-8" />}
              title="Travel & Logistics"
              features={[
                "Private jet arrangements",
                "Executive ground transportation",
                "VIP airport services",
                "Group travel coordination",
              ]}
            />
            <ServiceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Venue Selection"
              features={[
                "Luxury hotel partnerships",
                "Unique event spaces",
                "Technical requirements",
                "Capacity optimization",
              ]}
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Event Staffing"
              features={[
                "Professional event teams",
                "Multilingual personnel",
                "Technical specialists",
                "On-site coordination",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Notable Collaborations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <CaseStudyCard
              image="/spain-south-summit.jpg"
              title="Global Tech Summit"
              company="Leading Technology Corporation"
              description="Coordinated a 3-day conference for 500 executives, including travel arrangements, luxury accommodations, and exclusive events."
            />
            <CaseStudyCard
              image="/loreal-event.jpg"
              title="Cosmetic Industry Event"
              company="International Cosmetic Brand"
              description="Organized a high-profile event (5 days) with specialized staffing, celebrity management, and seamless logistics across multiple venues."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-[#1B263B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="200+" text="Corporate Events Annually" />
            <StatCard number="50+" text="Global Partners" />
            <StatCard number="1000+" text="Flight Arrangements" />
            <StatCard number="98%" text="Client Retention" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Our Corporate Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Consultation"
              description="Understanding your corporate needs and objectives"
            />
            <ProcessStep number="02" title="Planning" description="Detailed logistics and timeline development" />
            <ProcessStep number="03" title="Execution" description="Seamless coordination and management" />
            <ProcessStep number="04" title="Follow-up" description="Post-event analysis and future optimization" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 px-4">
        <Image src="/corporate-table-interior.jpg" alt="Luxury Corporate Interior" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
          <h2 className="text-4xl font-serif mb-12">What Our Clients Say</h2>
          <blockquote className="text-2xl font-serif italic mb-8">
            "Truchic Experiences transformed our annual leadership summit into an unforgettable experience. Their
            attention to detail and luxury service standards are unmatched."
          </blockquote>
          <cite className="text-xl">— Sarah Johnson, CEO of Global Innovations Inc.</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Elevate Your Corporate Events</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us handle the complexities while you focus on what matters most - your business and guests.
          </p>
          <Link
            href="/booking"
            className="bg-[#1B263B] text-white px-8 py-3 rounded-full hover:bg-[#2d3b50] transition inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, features }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#1B263B] text-white rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-[#1B263B] rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CaseStudyCard({ image, title, company, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif mb-2">{title}</h3>
        <p className="text-[#1B263B] font-semibold mb-4">{company}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function StatCard({ number, text }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm opacity-80">{text}</div>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-serif text-[#1B263B] mb-4">{number}</div>
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Building2, Globe2, Clock, Shield } from "lucide-react"

export const metadata = {
  title: "About | Truchic Experiences",
  description: "Meet your luxury travel expert, with 30+ years of experience...",
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image src="/banner-about.jpg" alt="Luxury Resort" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Crafting Bespoke
            <br />
            Luxury Experiences
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Exclusive travel and concierge services, delivering seamless luxury and personalized journey beyond.
          </p>
        </div>
      </section>

      {/* Meet the Visionary Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image src="/profile-photo.jpg" alt="Waterfall" fill className="object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6">
              Meet the Visionary
              <br />
              Truchic Experiences
            </h2>
            <p className="text-gray-600 mb-8">
              Meet the visionary behind Truchic Experiences, whose passion for travel and over 30 years of
              industry expertise drives every journey we create. As a premier provider of exclusive travel and corporate
              services, they are committed to curating bespoke experiences that combine elegance, comfort, and
              unforgettable moments.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1B263B]">30+</div>
                <div className="text-sm text-gray-600">Years Of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1B263B]">250+</div>
                <div className="text-sm text-gray-600"> Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1B263B]">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Why Choose Truchic Experiences?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Building2 className="w-8 h-8" />}
              title="Unmatched Expertise"
              description="Our 30+ years of experience ensures every travel and concierge service tailored to perfection."
            />
            <FeatureCard
              icon={<Globe2 className="w-8 h-8" />}
              title="Personalized Journeys"
              description="Each itinerary is crafted to match your style and preferences."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Global Connections"
              description="Access to 500+ premium hotels and resorts worldwide."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Seamless Service"
              description="From planning to return, we ensure every experience lives up to luxury standards."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image src="/banner-about-2.jpg" alt="Coastal View" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Start Your Luxury
            <br />
            Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Truchic Experiences turn your dream destinations into reality with bespoke elegance, exclusive
            destinations, and seamless concierge services.
          </p>
          <Link href="/booking" className="bg-white text-[#1B263B] px-8 py-3 rounded-full hover:bg-gray-200 transition">
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">A Glimpse of Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-[300px] transform hover:scale-105 transition duration-500">
              <Image src="/glimpse-work-1.jpg" alt="Glimpse of Work" fill className="object-cover rounded-lg" />
            </div>
            <div className="relative h-[300px] transform hover:scale-105 transition duration-500">
              <Image src="/glimpse-work-2.jpg" alt="Glimpse of Work" fill className="object-cover rounded-lg" />
            </div>
            <div className="relative h-[300px] transform hover:scale-105 transition duration-500">
              <Image src="/glimpse-work-3.jpg" alt="Glimpse of Work" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 px-4 bg-[#1B263B]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-serif mb-6">
            Making The Unimaginable
            <br />
            Come to Life
          </h2>
          <p className="text-lg mb-8">
            Connect Truchic Experiences has represented some of the most exclusive properties worldwide and is proud to
            have worked alongside a variety of brands to help make the unimaginable come to life by partnering with top
            companies such as Aman, Apple, Dior and many more.
          </p>
          <Link
            href="/booking"
            className="bg-white text-[#1B263B] px-8 py-3 rounded-full hover:bg-gray-200 transition inline-block"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#1B263B] text-white rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}




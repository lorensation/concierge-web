import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Contact | Truchic Experiences",
  description: "Get in touch to plan your next VIP travel experience.",
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image src="/castle.jpg" alt="Luxury Castle" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Contact Us</h1>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Let's Plan Your
            <br />
            Next Journey
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            We specialize in crafting luxury experiences, offering highly personalized travel and concierge services
            designed to meet your desires with elegance and precision.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Booking Section */}
          <div>
            <h2 className="text-4xl font-serif mb-6">
              Book Your
              <br />
              Luxury Escape
            </h2>
            <h3 className="text-xl text-gray-600 mb-4">Let's Plan Your Next Journey</h3>
            <p className="text-gray-600 mb-8">Choose a time that suits you and let us turn your vision into reality.</p>
            <Link href="/booking" className="border border-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              Schedule a Call
            </Link>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Have questions or special requests? We'd love to hear from you.</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                    placeholder="Type Here"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B263B] focus:border-transparent"
                    placeholder="Type Here"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B263B] focus:border-transparent h-32"
                    placeholder="Type Here"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1B263B] text-white px-8 py-3 rounded-lg hover:bg-[#2d3b50] transition"
                >
                  Contact Us
                </button>
              </form>
            </div>
            {/* Background Image */}
            <div className="absolute -z-10 top-1/2 right-0 w-3/4 h-full">
              <Image src="/palm-sunset.jpg" alt="Palm trees at sunset" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



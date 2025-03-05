import Image from "next/image"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Contact | Truchic Experiences",
  description: "Get in touch to plan your next VIP travel experience.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/contact-banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              Contact Us
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              We will resolve any inquiries you have and provide any help we can. Our mission is to ensure your travel experience is seamless and unforgettable.
            </p>
          </div>
        </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <ContactSection />
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="relative py-16 px-4">
        <Image
          src="/background-house-section.jpg?height=800&width=1600"
          alt="Luxury Travel Experience"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Truchic Experiences?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
              <p>We tailor every experience to your unique preferences and desires.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Luxury Expertise</h3>
              <p>With over 30 years of experience, we know luxury travel inside and out.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p>Our team is always available to assist you, no matter where you are in the world.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



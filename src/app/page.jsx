"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const servicesRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (servicesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = servicesRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scroll = (direction) => {
    if (servicesRef.current) {
      const scrollAmount = 300 // Adjust this value to change scroll distance
      const newScrollPosition = servicesRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      servicesRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="bg-[#0B0F15] text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/mountain-lake-reflection-landscape.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-light mb-4">Truchic Experiences</h1>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Exclusive Travel & <br />
            Concierge Services
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            Exclusive travel and concierge services. Delivering bespoke luxury and personalized journey beyond.
          </p>
          <div className="flex gap-4">
            <Link href="/booking" className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
              Schedule a Call
            </Link>
            <Link href="/about" className="border border-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-serif">Our Curated Luxury Services</h2>
            <p className="text-gray-400 max-w-md">
              Bespoke travel and concierge solutions, tailored for unforgettable luxury experiences.
            </p>
          </div>
          <div className="relative">
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full ${!canScrollLeft && "opacity-50 cursor-not-allowed"}`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div ref={servicesRef} className="flex gap-6 overflow-x-auto pb-6 scroll-smooth" onScroll={checkScroll}>
              <ServiceCard
                image="/corporate-event-tables.jpg"
                title="Corporate Travel & Events"
                description="Seamless business travel solutions adapted to your liking."
              />
              <ServiceCard
                image="/corporate-event-design.jpg"
                title="Corporate Event Design & Production"
                description="Innovative and seamless design and execution for high-end corporate events"
              />
              <ServiceCard
                image="/luxury-villa-water.jpg"
                title="Luxury Travel Planning"
                description="Tailored itineraries for the discerning traveler"
              />
              <ServiceCard
                image="/vip-concierge.jpg"
                title="VIP Concierge Services"
                description="Exclusive access and personalized assistance"
              />
            </div>
            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full ${!canScrollRight && "opacity-50 cursor-not-allowed"}`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Luxury Travel Section */}
      <section className="py-20 px-4 bg-[#0D1218]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image src="/luxury-pool-infinite.jpg" alt="Luxury pool" fill className="object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6">
              Luxury Travel.
              <br />
              Bespoke Moments.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Experience the art of refined travel with our exclusive concierge services. With 30+ years of experience,
              partnering with 50+ premium hotel portfolios, we craft journeys that reflect your individual style. Every
              itinerary is curated with the utmost precision, ensuring comfort, and seamless service.
            </p>
          </div>
        </div>
      </section>

      {/* Travel & Enjoy Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-6">
                Travel & Enjoy
                <br />
                Your Holiday
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Discover the extraordinary. Travel to explore beautiful places, try delicious foods, and enjoy new
                experiences. Be part of special moments with the expert guidance of our team.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/luxury-travel-plane.jpg"
                alt="Travel destination"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <Image
                src="/travel-holiday-2.jpg"
                alt="Travel destination"
                width={300}
                height={400}
                className="rounded-lg mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crafted Experiences Section */}
      <section className="py-20 px-4 bg-[#0D1218]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif mb-6">
              Crafted Luxury
              <br />
              Experiences For You
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Experience luxury crafted exclusively for you. From bespoke travel itineraries to VIP concierge services,
              every moment is designed to reflect your unique style and preferences. Let us transform your journey into
              unforgettable experiences, where elegance, comfort, and personalized service meet.
            </p>
          </div>
          <div className="relative h-[500px] order-1 md:order-2">
            <Image src="/santorini.jpg" alt="Santorini" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-8">
              <div>
                <span className="text-5xl font-bold">100+</span>
                <p className="text-gray-400">Customer Love For Our Services</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial cards would go here */}
            <TestimonialCard
              name="John Newell"
              image="/client-review.jpg"
              text="Exceptional service and attention to detail. The team went above and beyond."
              rating={5}
            />
            <TestimonialCard
              name="Alice Johnson"
              image="/client-review.jpg"
              text="Outstanding quality and superb customer service. Truly a pleasure to work with."
              rating={5}
            />
            <TestimonialCard
              name="Carlos Ramirez"
              image="/client-review.jpg"
              text="Their professionalism and efficiency exceeded my expectations in every way."
              rating={5}
            />
            <TestimonialCard
              name="Samantha Lee"
              image="/client-review.jpg"
              text="Absolutely wonderful! Every detail was carefully considered, making it a delightful experience."
              rating={5}
            />
            <TestimonialCard
              name="Michael Thompson"
              image="/client-review.jpg"
              text="A five-star experience from start to finish. I couldn’t be more pleased."
              rating={5}
            />
            <TestimonialCard
              name="Emily Davis"
              image="/client-review.jpg"
              text="Truly remarkable service with an attention to detail that truly impressed me."
              rating={5}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ image, title, description }) {
  return (
    <div className="min-w-[300px] group">
      <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 p-6">
          <h3 className="text-2xl font-serif mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ name, image, text, rating }) {
  return (
    <div className="bg-[#0D1218] p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex text-yellow-400">{"★".repeat(rating)}</div>
        </div>
      </div>
      <p className="text-gray-400">{text}</p>
    </div>
  )
}

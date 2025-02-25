import BookingSection from "@/components/BookingSection"

export const metadata = {
  title: "Booking | Truchic Experiences",
  description: "Schedule a luxury consultation for your bespoke travel experience.",
}

export default function BookingPage() {
  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/luxury-booking.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Schedule Your Consultation</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Begin your journey to an extraordinary travel experience with a personalized consultation.
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Select Your Preferred Time</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose a time that suits you best, and our luxury travel experts will be ready to craft your bespoke
                journey.
              </p>
            </div>
            <BookingSection />
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">What to Expect</h2>
            <p className="text-gray-600 mb-8">
              During your consultation, our expert travel advisors will discuss your preferences, desires, and dreams
              for your luxury experience. We'll explore destinations, accommodations, and unique experiences tailored
              just for you.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-serif mb-4">Personalized Attention</h3>
                <p className="text-gray-600">
                  One-on-one discussion to understand your unique travel style and preferences.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-serif mb-4">Expert Insights</h3>
                <p className="text-gray-600">
                  Gain access to our wealth of knowledge about luxury destinations and experiences.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-serif mb-4">Tailored Proposals</h3>
                <p className="text-gray-600">Receive a customized travel plan designed to exceed your expectations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}



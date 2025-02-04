export default function Banner() {
    return (
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Exclusive Travel & Concierge Service</h1>
            <p className="text-xl mb-8">30+ Years of Experience</p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    );
  }
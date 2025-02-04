export default function About() {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="/profile.jpg" alt="Profile" className="w-48 h-48 rounded-full object-cover" />
            <div>
              <p className="text-lg mb-4">
                With over 30 years of experience in luxury travel and VIP concierge services, I have worked in 20+ countries, delivering unforgettable experiences to my clients.
              </p>
              <a href="#" className="text-blue-500 hover:underline">LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
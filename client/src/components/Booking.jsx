export default function Booking() {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Schedule a Meeting</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Calendly Embed */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/your-username"
              style={{ minWidth: '320px', height: '630px' }}
            />
          </div>
        </div>
      </section>
    );
  }
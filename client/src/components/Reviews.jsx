export default function Reviews() {
    const testimonials = [
      { name: "John Doe", rating: 5, text: "Amazing service! Highly recommended." },
      { name: "Jane Smith", rating: 4, text: "Great experience, very professional." },
    ];
  
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Client Reviews</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <span className="ml-2 font-bold">{testimonial.name}</span>
                </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
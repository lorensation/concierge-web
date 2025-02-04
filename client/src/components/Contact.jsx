export default function Contact() {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="5"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
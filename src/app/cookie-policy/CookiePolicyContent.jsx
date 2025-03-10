import { Cookie, Shield, Clock, Settings } from "lucide-react"

export default function CookiePolicyContent() {
  return (
    <main className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-[#1B263B]">Cookie Policy</h1>

        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              This Cookie Policy explains how Truchic Experiences ("we", "us", or "our") uses cookies and similar
              technologies to recognize you when you visit our website. It explains what these technologies are and why
              we use them, as well as your rights to control our use of them.
            </p>
          </div>

          {/* Key Cookie Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <CookieInfoCard
              icon={<Cookie className="w-6 h-6" />}
              title="What are cookies?"
              description="Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
              as well as to provide reporting information."
            />
            <CookieInfoCard
              icon={<Shield className="w-6 h-6" />}
              title="Why do we use cookies?"
              description="We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons
              in order for our Website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies."
            />
            <CookieInfoCard
              icon={<Clock className="w-6 h-6" />}
              title="How long will cookies stay on my device?"
              description="The length of time that a cookie remains on your computer or mobile device depends on whether it is a
              'persistent' or 'session' cookie. Session cookies last until you stop browsing and persistent cookies last
              until they expire or are deleted."
            />
            <CookieInfoCard
              icon={<Settings className="w-6 h-6" />}
              title="How to control cookies"
              description="You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting
              your preferences in the Cookie Consent Manager. You can also set or amend your web browser controls to accept or refuse cookies."
            />
          </div>

          {/* Detailed Sections */}
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-serif mb-4 text-[#1B263B]">Types of cookies we use</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services
                  available through our Website and to use some of its features.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our
                  Website, helping us to improve our services.
                </li>
                <li>
                  <strong>Marketing cookies:</strong> These cookies are used to make advertising messages more relevant
                  to you.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-[#1B263B]">Changes to this Cookie Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this
                Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4 text-[#1B263B]">Contact us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies or other technologies, please email us at{" "}
                <a href="mailto:infotruchic@gmail.com" className="text-[#1B263B] hover:underline">
                  infotruchic@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

function CookieInfoCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-[#1B263B] text-white rounded-lg mr-4">{icon}</div>
        <h2 className="text-xl font-serif text-[#1B263B]">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}


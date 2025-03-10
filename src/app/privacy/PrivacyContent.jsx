import { Shield, Lock, UserCog, Bell } from "lucide-react"

export default function PrivacyContent() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          At Truchic Experiences, we are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use
          our website and services.
        </p>
      </div>

      {/* Key Privacy Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <PrivacyCard
          icon={<Shield className="w-6 h-6" />}
          title="Information We Collect"
          description="We collect personal information that you provide directly to us, such as your name, email address, phone
          number, and travel preferences when you use our services or contact us."
        />
        <PrivacyCard
          icon={<Lock className="w-6 h-6" />}
          title="How We Use Your Information"
          description="We use the information we collect to provide, maintain, and improve our services, to communicate with you,
          and to personalize your experience with Truchic Experiences."
        />
        <PrivacyCard
          icon={<UserCog className="w-6 h-6" />}
          title="Your Rights and Choices"
          description="You have the right to access, correct, or delete your personal information. You can also choose to opt-out
          of certain data collection and use practices."
        />
        <PrivacyCard
          icon={<Bell className="w-6 h-6" />}
          title="Security Measures"
          description="We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, processing, and accidental loss."
        />
      </div>

      {/* Detailed Sections */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-serif mb-4 text-[#1B263B]">Cookies and Similar Technologies</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic,
            and personalize content. For more information about our use of cookies, please see our{" "}
            <a href="/cookie-policy" className="text-[#1B263B] hover:underline">
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4 text-[#1B263B]">Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4 text-[#1B263B]">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:infotruchic@gmail.com" className="text-[#1B263B] hover:underline">
              infotruchic@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}

function PrivacyCard({ icon, title, description }) {
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


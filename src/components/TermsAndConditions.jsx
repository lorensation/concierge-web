import Link from "next/link"

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using Truchic Experiences' services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services.",
  },
  {
    title: "2. Description of Services",
    content:
      "Truchic Experiences provides luxury travel planning and concierge services. Our services include, but are not limited to, travel arrangements, accommodation bookings, experience curation, and personalized itinerary creation.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "You are responsible for providing accurate and complete information necessary for your travel arrangements. This includes personal details, travel preferences, and any special requirements. Failure to provide accurate information may result in service disruptions for which Truchic Experiences cannot be held liable.",
  },
  {
    title: "4. Booking and Payments",
    content:
      "All bookings are subject to availability and confirmation. Payments are due as per the schedule provided in your personalized quote. Failure to make payments on time may result in cancellation of bookings.",
  },
  {
    title: "5. Cancellations and Refunds",
    content:
      "Cancellation policies vary depending on the specific services booked. Refunds, if applicable, will be processed according to our partners' policies and may be subject to cancellation fees. We strongly recommend purchasing travel insurance to cover unforeseen circumstances.",
  },
  {
    title: "6. Privacy and Data Protection",
    content:
      "We collect and process personal data in accordance with our Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate. We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of data processing.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content on the Truchic Experiences website and in our communications is the property of Truchic Experiences or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of Truchic Experiences.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Truchic Experiences acts as an intermediary between clients and service providers. While we exercise due diligence in selecting our partners, we cannot be held liable for the actions, errors, omissions, representations, warranties, breaches or negligence of any such suppliers or for any personal injuries, death, property damage, or other damages or expenses resulting therefrom.",
  },
  {
    title: "9. Force Majeure",
    content:
      "Truchic Experiences shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including but not limited to, acts of God, war, terrorism, strikes, lockouts, riots, epidemics, governmental regulations, fire, communication line failures, power failures, earthquakes, floods, or other disasters.",
  },
  {
    title: "10. Client Service Agreement",
    content:
      "We strive to provide exceptional service to all our clients. Our basic service level agreement includes: 24/7 support during your travel, personalized itinerary planning, access to our network of luxury partners, and a dedicated travel consultant. Response times for non-urgent queries may be up to 24 hours during business days.",
  },
  {
    title: "11. Dispute Resolution",
    content:
      "Any disputes arising out of or related to these Terms and Conditions shall be resolved through amicable negotiations. If no resolution is reached, the dispute shall be submitted to binding arbitration in accordance with the rules of the International Chamber of Commerce.",
  },
  {
    title: "12. Modifications to Terms",
    content:
      "Truchic Experiences reserves the right to modify these terms at any time. We will notify registered users of any material changes via email. Your continued use of our services after such modifications will constitute your acknowledgment of the modified terms.",
  },
  {
    title: "13. Governing Law",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.",
  },
  {
    title: "14. Contact Information",
    content:
      "For any questions or concerns regarding these Terms and Conditions, please contact us at infotruchic@gmail.com.",
  },
]

export default function TermsAndConditions() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-[#1B263B] sm:text-4xl mb-8 text-center">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-[#1B263B] mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            By using our services, you acknowledge that you have read and understood these Terms and Conditions and
            agree to be bound by them.
          </p>
          <p className="mt-4 text-gray-600">
            For more information about how we handle your personal data, please read our{" "}
            <Link href="/privacy" className="text-[#1B263B] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}


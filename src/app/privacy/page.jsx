import PrivacySettings from "@/components/PrivacySettings"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Truchic Experiences",
  description:
    "Learn about our privacy practices and manage your privacy preferences for Truchic Experiences luxury travel services.",
}

export default function PrivacyPage() {
  return (
    <main className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#1B263B]">Privacy Policy</h1>

        <div className="prose prose-lg mb-12">
          <p>
            At Truchic Experiences, we are committed to protecting your privacy and ensuring the security of your
            personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data
            when you use our website and services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect personal information that you provide directly to us, such as your name, email address, phone
            number, and travel preferences when you use our services or contact us.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you,
            and to personalize your experience with Truchic Experiences.
          </p>

          <h2>Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic,
            and personalize content. For more information about our use of cookies, please see our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link>.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can also choose to opt-out
            of certain data collection and use practices.
          </p>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing and against accidental loss, destruction, or damage.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at infotruchic@gmail.com.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-[#1B263B]">Privacy Settings</h2>
        <PrivacySettings />
      </div>
    </main>
  )
}


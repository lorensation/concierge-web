import Image from "next/image"
import Link from "next/link"
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-[#1B263B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Background watermark text */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <span className="text-[200px] font-serif text-white whitespace-nowrap">Truchic Experiences</span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/TruchicExperiencesFinalLogo.jpg"
              alt="Truchic Experiences"
              width={200}
              height={80}
              className="mb-6"
            />
            <p className="text-gray-300 max-w-sm">
              Exclusive Travel And Event Services, Delivering Seamless Luxury And Personalized Journeys Backed By 30+
              Years Of Expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-300 hover:text-white transition">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-xl font-serif mb-6">Help</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-gray-300 hover:text-white transition">
                  Trust And Safety
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                  Privacy Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif mb-6">Follow Us On</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
              >
                <SiFacebook className="w-5 h-5 text-[#1B263B]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
              >
                <SiInstagram className="w-5 h-5 text-[#1B263B]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
              >
                <SiX className="w-5 h-5 text-[#1B263B]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
              >
                <SiLinkedin className="w-5 h-5 text-[#1B263B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2025 - All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition">
              Terms and Conditions
            </Link>
            <Link href="/privacy#settings" className="text-gray-300 hover:text-white text-sm transition">
              Privacy settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

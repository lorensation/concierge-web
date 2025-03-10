import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | Truchic Experiences",
  description: "Learn about how Truchic Experiences uses cookies to enhance your browsing experience.",
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-[#1B263B] sm:text-4xl mb-8 text-center">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            This Cookie Policy explains how Truchic Experiences ("we", "us", or "our") uses cookies and similar
            technologies to recognize you when you visit our website at{" "}
            <Link href="/">https://www.truchicexperiences.com</Link> ("Website"). It explains what these technologies
            are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>

          <h2>Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary"
            cookies. Other cookies also enable us to track and target the interests of our users to enhance the
            experience on our Website. Third parties serve cookies through our Website for advertising, analytics and
            other purposes.
          </p>

          <h2>Types of cookies we use</h2>
          <ul>
            <li>
              <strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services
              available through our Website and to use some of its features.
            </li>
            <li>
              <strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our
              Website, helping us to improve our services.
            </li>
            <li>
              <strong>Marketing cookies:</strong> These cookies are used to make advertising messages more relevant to
              you.
            </li>
          </ul>

          <h2>How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
            setting your preferences in the Cookie Consent Banner. You can also set or amend your web browser controls
            to accept or refuse cookies.
          </p>

          <h2>Changes to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at
            infotruchic@gmail.com.
          </p>
        </div>
      </div>
    </div>
  )
}


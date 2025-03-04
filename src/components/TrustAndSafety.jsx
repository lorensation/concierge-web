import { ShieldCheckIcon, LockClosedIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const features = [
  {
    name: "Verified Luxury Partners",
    description:
      "We work exclusively with verified, high-end partners to ensure the quality and authenticity of your luxury experience.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Secure Transactions",
    description:
      "All financial transactions are processed through secure, encrypted channels to protect your sensitive information.",
    icon: LockClosedIcon,
  },
  {
    name: "Privacy Protection",
    description:
      "We respect your privacy and adhere to strict data protection policies to safeguard your personal information.",
    icon: UserGroupIcon,
  },
]

export default function TrustAndSafety() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B263B] sm:text-4xl">Trust and Safety</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Truchic Experiences, we prioritize your trust and safety throughout your luxury journey.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B263B] text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-[#1B263B]">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


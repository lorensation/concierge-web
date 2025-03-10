import Image from "next/image"
import Link from "next/link"
import NewsletterSubscribe from "@/components/NewsletterSubscribe"

export const metadata = {
  title: "Luxury Travel Blog | Truchic Experiences",
  description:
    "Discover luxury travel insights, destination guides, and exclusive experiences curated by our travel experts with 30+ years of experience.",
  keywords: [
    "luxury travel blog",
    "VIP travel tips",
    "exclusive destinations",
    "luxury accommodation",
    "travel inspiration",
  ],
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: "luxury-travel-trends-2023",
      title: "Top Luxury Travel Trends for 2025",
      excerpt:
        "Discover the emerging trends shaping luxury travel experiences this year, from private villa retreats to sustainable luxury initiatives.",
      image: "/santorini.jpg",
      date: "June 15, 2024",
      category: "Travel Trends",
    },
    {
      id: "hidden-gems-mediterranean",
      title: "Hidden Gems of the Mediterranean",
      excerpt:
        "Explore the lesser-known luxury destinations along the Mediterranean coastline that offer exclusive experiences away from the crowds.",
      image: "/amalfi-coast.jpg",
      date: "July 22, 2024",
      category: "Destinations",
    },
    {
      id: "corporate-retreat-planning",
      title: "The Ultimate Guide to Corporate Retreat Planning",
      excerpt:
        "Learn how to create memorable and productive corporate retreats that combine luxury accommodations with team-building activities.",
      image: "/corporate-people-gathering.jpg",
      date: "October 10, 2024",
      category: "Corporate Events",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/banner-about-2.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Luxury Travel Insights</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert perspectives, destination guides, and insider knowledge from our luxury travel specialists.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest luxury travel insights, exclusive offers, and destination inspiration.
          </p>
          <NewsletterSubscribe />
        </div>
      </section>
    </main>
  )
}

function BlogPostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image
          src={post.image || "/placeholder.svg?height=400&width=600"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <h2 className="text-xl font-serif font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`} className="text-[#1B263B] font-medium hover:underline inline-flex items-center">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

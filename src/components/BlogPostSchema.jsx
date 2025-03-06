export default function BlogPostSchema({
    title,
    description,
    datePublished,
    dateModified,
    authorName,
    imageUrl,
    slug,
  }) {
    const baseUrl = process.env.FRONTEND_URL || "https://www.truchicexperiences.com"
    const blogPostUrl = `${baseUrl}/blog/${slug}`
  
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: description,
      image: imageUrl,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        "@type": "Person",
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        name: "Truchic Experiences",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/TruchicExperiencesFinalLogo.jpg`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": blogPostUrl,
      },
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  }
  
  
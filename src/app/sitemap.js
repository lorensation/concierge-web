async function getBlogPosts() {
    // This is a placeholder. In a real application, you would fetch this from your database or CMS
    return [
      { slug: "top-luxury-destinations-2023", lastModified: new Date() },
      { slug: "exclusive-travel-tips", lastModified: new Date() },
      { slug: "vip-concierge-services-explained", lastModified: new Date() },
    ]
  }
  
  export default async function sitemap() {
    const blogPosts = await getBlogPosts()
  
    const baseUrl = process.env.FRONTEND_URL || "https://www.truchicexperiences.com"
  
    const routes = ["", "/about", "/booking", "/contact", "/corporate", "/terms", "/privacy", "/trust", "/help"].map(
      (route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      }),
    )
  
    const blogRoutes = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  
    return [...routes, ...blogRoutes]
  }
  
  
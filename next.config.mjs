/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "truchicexperiences.com",
      },
    ],
  },
  // Add this line to disable the use of React.useId()
  reactStrictMode: false,
}

export default nextConfig;
  

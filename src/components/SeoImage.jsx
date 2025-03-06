import Image from "next/image"

export default function SeoImage({ src, alt, width, height, priority = false, className = "", fill = false }) {
  const safeAlt = alt || "Truchic Experiences luxury travel and concierge services"

  const imageProps = {
    src,
    alt: safeAlt,
    loading: priority ? "eager" : "lazy",
    className,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  }

  if (fill) {
    return <Image {...imageProps} fill />
  }

  return <Image {...imageProps} width={width} height={height} />
}


"use client"

import { useState } from "react"

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <a
      href="#main-content"
      className={`
        absolute left-0 top-0 p-2 -translate-y-full transition-transform duration-200 ease-in-out
        bg-blue-500 text-white font-bold
        ${isFocused ? "translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400" : ""}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to main content
    </a>
  )
}


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        
        {/* Profile Photo */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/expert-photo.jpg"
            alt="Luxury Travel Expert"
            fill
            className="object-cover"
          />
        </div>

        {/* About Preview Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Your Luxury Travel Expert
          </h2>
          <p className="text-gray-700 mt-2">
            With <strong>30+ years of experience</strong> and a **global VIP network** spanning
            <strong> Europe, LATAM, USA, Asia, Oceania, Africa, and the Middle East</strong>,
            I create bespoke travel experiences tailored to perfection.
          </p>

          {/* Learn More Button */}
          <div className="mt-4">
            <Link href="/about">
              <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


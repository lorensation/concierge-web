import React from "react";
import FullAbout from "@/components/full/FullAbout";

export const metadata = {
  title: "About | Truchic Experiences",
  description: "Meet your luxury travel expert, with 30+ years of experience..."
};

export default function AboutPage() {
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <FullAbout />
    </main>
  );
}


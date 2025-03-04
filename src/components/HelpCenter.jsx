"use client"

import { useState } from "react"
import { ChevronUpIcon } from "@heroicons/react/20/solid"

const faqs = [
  {
    question: "How do I book a luxury travel experience?",
    answer:
      "To book a luxury travel experience, navigate to our 'Services' page and select the type of experience you're interested in. Then, use our booking calendar to choose an available consultation slot. We'll get in touch to discuss your preferences and create a tailored itinerary.",
  },
  {
    question: "What types of luxury experiences do you offer?",
    answer:
      "We offer a wide range of luxury experiences, including exclusive resort stays, private yacht charters, personalized city tours, culinary journeys, and bespoke adventure trips. Our services span across Europe, LATAM, USA, Asia, Oceania, Africa, and the Middle East.",
  },
  {
    question: "How far in advance should I book my travel?",
    answer:
      "For the best availability and to ensure we can secure the most exclusive experiences, we recommend booking at least 3-6 months in advance, especially for peak travel seasons. However, we also specialize in last-minute luxury arrangements for our clients.",
  },
  {
    question: "Do you offer corporate event planning services?",
    answer:
      "Yes, we provide comprehensive corporate event planning services. From high-profile business meetings to large-scale conferences and incentive trips, we can handle all aspects of your corporate event needs.",
  },
  {
    question: "What languages do you offer services in?",
    answer:
      "Our primary consultant is fluent in Spanish, English, and French. We can also arrange for interpreters or guides in other languages as needed for your travel experience.",
  },
]

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <button className="flex w-full justify-between items-center text-left" onClick={onClick} aria-expanded={isOpen}>
        <span className="font-medium text-[#1B263B] text-lg">{question}</span>
        <ChevronUpIcon
          className={`${
            isOpen ? "-rotate-180" : "rotate-0"
          } h-6 w-6 transform transition-transform duration-200 text-gray-400`}
        />
      </button>
      <div
        className={`mt-2 pr-12 transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-base text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1B263B] sm:text-4xl text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}




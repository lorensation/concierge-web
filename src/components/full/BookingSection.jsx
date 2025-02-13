"use client";

import React, { useState } from "react";
import BookingCalendar from "../BookingCalendar";
import { format } from "date-fns";
import esES from "date-fns/locale/es";

export default function BookingSection() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    
    if (!selectedSlot || !formData.name || !formData.surname || !formData.email || !formData.phone) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("/api/bookSlot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slot: selectedSlot.start.toISOString(),
          user: { ...formData },
        }),
      });

      if (!response.ok) throw new Error("Error processing booking");

      setSubmitted(true);
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Book a Meeting (GMT+1)</h2>
        <p className="text-gray-600 mb-6">
          Select an available time that suits you and we will send a confirmation email.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded">
            Thank you! Your request has been processed.
          </div>
        ) : (
          <>
            {/* Calendario para seleccionar la franja horaria */}
            <BookingCalendar onSelectSlot={setSelectedSlot} />

            {selectedSlot && (
              <div className="mt-4 text-gray-800 text-lg font-semibold bg-white shadow-md p-4 rounded-md">
                <p>
                  <strong>Selected Slot:</strong>{" "}
                  {format(selectedSlot.start, "eeee, dd MMM yyyy HH:mm", { locale: esES })} -{" "}
                  {format(selectedSlot.end, "HH:mm", { locale: esES })}
                </p>
              </div>
            )}

            {/* Formulario solo aparece si el usuario ha seleccionado un slot */}
            {selectedSlot && (
              <form 
                onSubmit={handleBooking} 
                className="mt-6 bg-white shadow-lg rounded-lg p-6 text-left max-w-md mx-auto"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter your details</h3>

                {/* Nombre */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Apellido */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Botón de confirmar */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  );
}




"use client";

import React, { useState } from "react";
import BookingCalendar from "../BookingCalendar";
import { format } from "date-fns";
import esES from "date-fns/locale/es";

export default function BookingSection() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = async () => {
    if (!selectedSlot) return alert("¡Por favor, seleccione un espacio de tiempo!");

    try {
      const response = await fetch("/api/bookSlot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: selectedSlot.start.toISOString(),
          end: selectedSlot.end.toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Error al realizar la reserva");

      setSubmitted(true);
    } catch (error) {
      console.error("Error en la reserva:", error);
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Book a Meeting</h2>
        <p className="text-gray-600 mb-6">
          Select an available time that suits you and we will send a confirmation email.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded">
            Thank you! Your request has been processed.
          </div>
        ) : (
          <>
            <BookingCalendar onSelectSlot={setSelectedSlot} />
            
            {selectedSlot && (
              <div className="mt-4 text-gray-800">
                <p>
                  <strong>Selected Slot:</strong>{" "}
                  {format(selectedSlot.start, "eeee, dd MMM yyyy HH:mm", { locale: esES })} -{" "}
                  {format(selectedSlot.end, "HH:mm", { locale: esES })}
                </p>
              </div>
            )}

            <button
              onClick={handleBooking}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
              disabled={!selectedSlot}
            >
              Confirm Booking
            </button>
          </>
        )}
      </div>
    </section>
  );
}



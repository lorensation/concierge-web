"use client";

import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addHours } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import esES from "date-fns/locale/es";

const locales = { es: esES };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function BookingCalendar({ onSelectSlot }) {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await fetch("/api/getAvailableSlots");
        if (!response.ok) throw new Error("Error al obtener los espacios disponibles");

        const slots = await response.json();

        const formattedEvents = slots.map((slot) => ({
          start: new Date(slot.start),
          end: new Date(slot.end),
          title: "Reservado",
          allDay: false,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error al obtener los espacios:", error);
      }
    };

    fetchAvailableSlots();
  }, []);

  const handleSelectSlot = (slotInfo) => {
    const selectedStart = new Date(slotInfo.start);
    const selectedEnd = addHours(selectedStart, 1);

    // Verificar si el slot seleccionado está ocupado
    const isOverlapping = events.some(
      (event) =>
        (selectedStart >= event.start && selectedStart < event.end) ||
        (selectedEnd > event.start && selectedEnd <= event.end)
    );

    if (isOverlapping) {
      alert("Este horario ya está reservado. Selecciona otro.");
      return;
    }

    const newSlot = { start: selectedStart, end: selectedEnd };
    setSelectedSlot(newSlot);
    onSelectSlot(newSlot);
  };

  return (
    <div style={{ height: "500px", margin: "20px auto" }}>
      <Calendar
        localizer={localizer}
        events={[
          ...events,
          ...(selectedSlot
            ? [{ start: selectedSlot.start, end: selectedSlot.end, title: "Seleccionado", isSelected: true }]
            : []),
        ]}
        startAccessor="start"
        endAccessor="end"
        selectable
        defaultView="week"
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
        eventPropGetter={(event) => {
          if (event.isSelected) {
            return { style: { backgroundColor: "#FFD700", border: "2px solid #DAA520", color: "#000" } }; // Dorado
          }
          if (event.title === "Reservado") {
            return { style: { backgroundColor: "#007BFF", color: "#FFF" } }; // Azul para los ocupados
          }
          return {};
        }}
      />
    </div>
  );
}



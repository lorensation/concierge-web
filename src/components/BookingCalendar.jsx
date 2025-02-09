"use client";

import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import esES from "date-fns/locale/es";

const locales = { "es": esES };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function BookingCalendar({ onSelectSlot }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await fetch("/api/getAvailableSlots");
        if (!response.ok) throw new Error("Error al obtener los espacios disponibles");

        const slots = await response.json();

        const formattedEvents = slots.map((slot) => ({
          start: new Date(slot.start),
          end: new Date(slot.end),
          title: "Disponible",
          allDay: false,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error al obtener los espacios:", error);
      }
    };

    fetchAvailableSlots();
  }, []);

  return (
    <div style={{ height: "500px", margin: "20px auto" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        defaultView="week"
        onSelectSlot={onSelectSlot}
        style={{ height: 500 }}
      />
    </div>
  );
}

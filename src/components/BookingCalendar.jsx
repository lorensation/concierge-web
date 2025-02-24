"use client"

import { useState, useEffect } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay, addHours } from "date-fns"
import "react-big-calendar/lib/css/react-big-calendar.css"
import esES from "date-fns/locale/es"

const locales = { es: esES }
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function BookingCalendar({ onSelectSlot }) {
  const [events, setEvents] = useState([])
  const [selectedSlot, setSelectedSlot] = useState(null)

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await fetch("/api/getAvailableSlots")
        if (!response.ok) throw new Error("Error al obtener los espacios disponibles")

        const slots = await response.json()

        const formattedEvents = slots.map((slot) => ({
          start: new Date(slot.start),
          end: new Date(slot.end),
          title: "Unavailable",
          allDay: false,
        }))

        setEvents(formattedEvents)
      } catch (error) {
        console.error("Error al obtener los espacios:", error)
      }
    }

    fetchAvailableSlots()
  }, [])

  const handleSelectSlot = (slotInfo) => {
    const selectedStart = new Date(slotInfo.start)
    const selectedEnd = addHours(selectedStart, 1)

    const isOverlapping = events.some(
      (event) =>
        (selectedStart >= event.start && selectedStart < event.end) ||
        (selectedEnd > event.start && selectedEnd <= event.end),
    )

    if (isOverlapping) {
      alert("Este horario ya está reservado. Selecciona otro.")
      return
    }

    const newSlot = { start: selectedStart, end: selectedEnd }
    setSelectedSlot(newSlot)
    onSelectSlot(newSlot)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Calendar
        localizer={localizer}
        events={[
          ...events,
          ...(selectedSlot
            ? [{ start: selectedSlot.start, end: selectedSlot.end, title: "Selected", isSelected: true }]
            : []),
        ]}
        startAccessor="start"
        endAccessor="end"
        selectable
        defaultView="week"
        min={new Date(new Date().setHours(8, 0, 0, 0))}
        max={new Date(new Date().setHours(22, 0, 0, 0))}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
        eventPropGetter={(event) => {
          if (event.isSelected) {
            return {
              className: "selected",
              style: {
                backgroundColor: "#1B263B",
                color: "#FFF",
                fontWeight: "bold",
                padding: "5px",
              },
            }
          }
          if (event.title === "Unavailable") {
            return {
              style: {
                backgroundColor: "#E0E0E0",
                color: "#666",
                fontSize: "0.9rem",
                padding: "5px",
              },
            }
          }
          return {}
        }}
      />
    </div>
  )
}


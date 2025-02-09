import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { slot } = await req.json()

    if (!slot) {
      return NextResponse.json({ error: 'Missing slot information' }, { status: 400 })
    }

    const SCOPES = ['https://www.googleapis.com/auth/calendar']

    // Load credentials from environment variable
    const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: SCOPES
    })

    const calendar = google.calendar({ version: 'v3', auth })
    const calendarId = process.env.GOOGLE_CALENDAR_ID  // Use env variable

    const event = {
      summary: 'Booked Meeting',
      start: { dateTime: slot, timeZone: 'UTC' },
      end: { dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(), timeZone: 'UTC' },
      attendees: [{ email: process.env.BOOKING_NOTIFICATION_EMAIL }],  // Notify yourself or clients
    }

    await calendar.events.insert({
      calendarId,
      resource: event
    })

    return NextResponse.json({ success: true, message: 'Booking confirmed' }, { status: 200 })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Failed to book slot' }, { status: 500 })
  }
}


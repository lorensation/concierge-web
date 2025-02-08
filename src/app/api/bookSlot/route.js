import { google } from 'googleapis'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req) {
  try {
    const { slot } = await req.json()

    if (!slot) {
      return NextResponse.json({ error: 'Missing slot information' }, { status: 400 })
    }

    const SCOPES = ['https://www.googleapis.com/auth/calendar']
    const keyPath = path.join(process.cwd(), 'src/config/google-calendar.json')

    if (!fs.existsSync(keyPath)) {
      return NextResponse.json({ error: 'Google Calendar credentials not found' }, { status: 500 })
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: SCOPES
    })

    const calendar = google.calendar({ version: 'v3', auth })
    const calendarId = 'your_calendar_id@group.calendar.google.com'  // Replace with your Google Calendar ID

    const event = {
      summary: 'Booked Meeting',
      start: { dateTime: slot, timeZone: 'UTC' },
      end: { dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(), timeZone: 'UTC' },
      attendees: [{ email: 'your-email@example.com' }],  // Replace with your email
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

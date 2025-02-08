import { google } from 'googleapis'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
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

    const now = new Date().toISOString()
    const response = await calendar.events.list({
      calendarId,
      timeMin: now,
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    })

    const slots = response.data.items.map(event => ({
      id: event.id,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      summary: event.summary
    }))

    return NextResponse.json(slots, { status: 200 })
  } catch (error) {
    console.error('Error fetching slots:', error)
    return NextResponse.json({ error: 'Failed to fetch slots' }, { status: 500 })
  }
}

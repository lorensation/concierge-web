import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']

    const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)

    // Fix private key formatting (convert escaped `\n` to actual newlines)
    serviceAccountKey.private_key = serviceAccountKey.private_key.replace(/\\n/g, '\n')

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ['https://www.googleapis.com/auth/calendar']
    })

    const calendar = google.calendar({ version: 'v3', auth })
    const calendarId = process.env.GOOGLE_CALENDAR_ID  // Use env variable

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


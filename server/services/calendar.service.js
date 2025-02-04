import { google } from 'googleapis';
import config from '../config/env.js';

const oAuth2Client = new google.auth.OAuth2(
  config.google.clientId,
  config.google.clientSecret,
  config.google.redirectUri
);

oAuth2Client.setCredentials({
  refresh_token: config.google.refreshToken
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

export const createCalendarEvent = async (eventDetails) => {
  try {
    const event = {
      summary: `Meeting with ${eventDetails.name}`,
      description: `Client: ${eventDetails.email}`,
      start: { dateTime: eventDetails.startTime, timeZone: 'UTC' },
      end: { dateTime: eventDetails.endTime, timeZone: 'UTC' },
      attendees: [{ email: eventDetails.email }],
      reminders: { useDefault: true }
    };

    const response = await calendar.events.insert({
      calendarId: config.google.calendarId,
      requestBody: event
    });

    return response.data;
  } catch (error) {
    throw new Error(`Calendar service error: ${error.message}`);
  }
};
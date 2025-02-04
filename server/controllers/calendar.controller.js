import { google } from 'googleapis';
import { createCalendarEvent } from '../services/calendar.service.js';

export const bookMeeting = async (req, res, next) => {
  try {
    const { startTime, endTime, email, name } = req.body;
    
    const event = await createCalendarEvent({
      startTime,
      endTime,
      email,
      name
    });

    res.status(201).json({
      success: true,
      data: event
    });
  } catch (error) {
    next(error);
  }
};
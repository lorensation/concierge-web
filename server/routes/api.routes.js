import { Router } from 'express';
import { bookMeeting } from '../controllers/calendar.controller.js';
import { sendEmail } from '../controllers/email.controller.js';

const router = Router();

// Calendar routes
router.post('/bookings', bookMeeting);

// Email routes
router.post('/emails', sendEmail);

export default router;
# Truchic Experiences - Luxury Travel Concierge

## About the Project

Truchic Experiences is a high-end luxury travel concierge service, offering bespoke travel experiences and personalized itineraries. This web application serves as the digital face of the business, allowing clients to learn about our services, book consultations, and get in touch with our expert travel advisors.

## Developer Information

**Name:** Lorenzo Sanz Trucharte
**Email:** lsanztrucharte@gmail.com
**LinkedIn:** [Lorenzo Sanz Trucharte](https://www.linkedin.com/in/lorenzo-sanz-trucharte-534467121/)
**GitHub:** [lorensanz](https://github.com/lorensation)

## Technologies Used

- Next.js 13 (App Router)
- React
- Tailwind CSS
- Node.js
- Nodemailer
- Google Calendar API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A Gmail account for sending emails
- A Google Cloud Platform account with Calendar API enabled

## Installation

1. Clone the repository:

git clone [https://github.com/lorensanz/truchic-experiences.git]

2. Install the dependencies:

npm install

3. Create a `.env.local` file in the root directory and add the following environment variables:


BOOKING_NOTIFICATION_EMAIL=[your_notification_email@example.com]
FRONTEND_URL=[http://localhost:3000] # Change this in production
EMAIL_USER=[your_gmail_username@gmail.com]
EMAIL_PASS=your_gmail_password
GOOGLE_SERVICE_ACCOUNT_KEY={"type": "service_account", ...} # Your full service account key JSON
GOOGLE_CALENDAR_ADMIN_EMAIL=[your_admin_email@example.com]
GOOGLE_CALENDAR_ID=[your_calendar_id@group.calendar.google.com]



4. Set up Google Calendar API:
- Go to the Google Cloud Console
- Create a new project
- Enable the Google Calendar API
- Create a service account and download the JSON key
- Share your Google Calendar with the service account email

## Running the Application

To run the application in development mode:

npm run dev

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

npm run build

To start the production server:

npm start


## Features

- Responsive design for all device sizes
- Interactive booking system integrated with Google Calendar
- Contact form with email notifications
- About page showcasing the luxury travel experiences
- Terms and Conditions page
- Privacy Policy page

## Deployment

This project is set up to be easily deployed on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

Remember to set up your environment variables in the Vercel dashboard.

## Contributing

As this is a personal project for Truchic Experiences, contributions are not currently being accepted. However, feedback and suggestions are always welcome.

## License

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this project, via any medium, is strictly prohibited.

Thank you for your interest in Truchic Experiences. For any questions or inquiries, please contact Lorenzo Sanz Trucharte at lsanztrucharte@gmail.com.


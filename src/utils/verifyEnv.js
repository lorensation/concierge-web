export function verifyEnv() {
    const requiredEnvVars = [
      "BOOKING_NOTIFICATION_EMAIL",
      "FRONTEND_URL",
      "EMAIL_USER",
      "EMAIL_PASS",
      "GOOGLE_SERVICE_ACCOUNT_KEY",
      "GOOGLE_CALENDAR_ADMIN_EMAIL",
      "GOOGLE_CALENDAR_ID",
    ]
  
    const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])
  
    if (missingEnvVars.length > 0) {
      console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`)
      return false
    }
  
    return true
  }
  
  
import { google } from "googleapis"

// Function to initialize Google Sheets client
export async function getGoogleSheetsClient() {
  try {
    const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    // Fix private key formatting (convert escaped `\n` to actual newlines)
    serviceAccountKey.private_key = serviceAccountKey.private_key.replace(/\\n/g, "\n")

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    return sheets
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error)
    throw error
  }
}

// Function to add an email to the Google Sheet
export async function addEmailToSheet(email, name = "", source = "newsletter") {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEET_ID environment variable is not set")
    }

    // Check if email already exists to avoid duplicates
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:C", // Assuming Sheet1 is your sheet name
    })

    const rows = response.data.values || []
    const emailExists = rows.some((row) => row[0] === email)

    if (emailExists) {
      console.log(`Email ${email} already exists in the sheet`)
      return { success: true, message: "Email already subscribed" }
    }

    // Add new row with email, name, and timestamp
    const currentDate = new Date().toISOString()
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[email, name, source, currentDate]],
      },
    })

    return { success: true, message: "Email added successfully" }
  } catch (error) {
    console.error("Error adding email to sheet:", error)
    throw error
  }
}


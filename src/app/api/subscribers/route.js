import { NextResponse } from "next/server"
import { getGoogleSheetsClient } from "@/utils/googleSheets"

export async function GET(req) {
  try {
    // Basic authentication check (in a real app, use a more secure method)
    // This is just a simple example - in production, use proper auth mechanisms
    const authHeader = req.headers.get("authorization")

    // Get the sheets client
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      return NextResponse.json({ error: "GOOGLE_SHEET_ID environment variable is not set" }, { status: 500 })
    }

    // Get data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:D", // Assuming Sheet1 is your sheet name with columns: Email, Name, Source, Date
    })

    const rows = response.data.values || []

    // Skip header row if it exists, and map data to objects
    const subscribers =
      rows.length > 0
        ? rows.slice(1).map((row) => ({
            email: row[0] || "",
            name: row[1] || "",
            source: row[2] || "newsletter",
            date: row[3] || new Date().toISOString(),
          }))
        : []

    return NextResponse.json({ success: true, subscribers }, { status: 200 })
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 })
  }
}


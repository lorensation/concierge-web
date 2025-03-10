import { NextResponse } from "next/server"
import { addEmailToSheet } from "@/utils/googleSheets"

export async function POST(req) {
  try {
    const { email, name = "" } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Add email to Google Sheet
    const result = await addEmailToSheet(email, name, "newsletter")

    return NextResponse.json({ success: true, message: "Subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}


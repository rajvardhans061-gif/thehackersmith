
import { NextResponse } from "next/server";
import { sendEnrollmentEmails } from "@/lib/mailer";

export const runtime = "nodejs";

const allowedExperienceLevels = [
  "Beginner",
  "Student",
  "IT or networking experience",
  "Cybersecurity experience",
  "Career changer",
];

type AppsScriptResponse = {
  success?: boolean;
  error?: string;
  message?: string;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    { success: false, error: message },
    { status }
  );
}

export async function POST(request: Request) {
  try {
    // 1. Read request body
    let body: Record<string, unknown>;

    try {
      body = await request.json();
    } catch {
      return errorResponse("Invalid request data.", 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return errorResponse("Invalid request format.", 400);
    }

    // 2. Honeypot protection
    const website =
      typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ success: true });
    }

    // 3. Extract fields
    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const contactNumber =
      typeof body.contactNumber === "string"
        ? body.contactNumber.trim()
        : "";

    const experienceLevel =
      typeof body.experienceLevel === "string"
        ? body.experienceLevel.trim()
        : "";

    // 4. Validate name
    if (name.length < 2 || name.length > 100) {
      return errorResponse("Please enter a valid name.", 400);
    }

    // 5. Validate email
    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return errorResponse("Please enter a valid email address.", 400);
    }

    // 6. Validate phone
    const normalizedPhone = contactNumber.replace(/[\s().-]/g, "");

    if (
      contactNumber.length > 25 ||
      !/^\+?[0-9]{7,15}$/.test(normalizedPhone)
    ) {
      return errorResponse(
        "Please enter a valid contact number, including country code if applicable.",
        400
      );
    }

    // 7. Validate experience
    if (!allowedExperienceLevels.includes(experienceLevel)) {
      return errorResponse(
        "Please select a valid experience level.",
        400
      );
    }

    // 8. Read Google configuration
    const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
    const secret = process.env.THS_ENROLLMENT_SECRET?.trim();

    if (!endpoint || !secret) {
      console.error("Enrollment configuration is missing.");

      return errorResponse(
        "Enrollment is temporarily unavailable.",
        503
      );
    }

    // 9. Validate Apps Script URL
    let endpointUrl: URL;

    try {
      endpointUrl = new URL(endpoint);
    } catch {
      return errorResponse(
        "Enrollment is temporarily unavailable.",
        503
      );
    }

    if (
      endpointUrl.protocol !== "https:" ||
      endpointUrl.hostname !== "script.google.com" ||
      !endpointUrl.pathname.includes("/macros/s/") ||
      !endpointUrl.pathname.endsWith("/exec")
    ) {
      return errorResponse(
        "Enrollment is temporarily unavailable.",
        503
      );
    }

    // 10. Save enrollment in Google Sheets
    let response: Response;

    try {
      response = await fetch(endpointUrl.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          secret,
          name,
          email,
          contactNumber,
          experienceLevel,
        }),
        cache: "no-store",
        redirect: "follow",
        signal: AbortSignal.timeout(15000),
      });
    } catch (error) {
      console.error("Apps Script connection failed:", error);

      return errorResponse(
        "Enrollment service is temporarily unavailable. Please try again.",
        502
      );
    }

    // 11. Parse Apps Script response
    const responseText = await response.text();

    let result: AppsScriptResponse;

    try {
      result = JSON.parse(responseText) as AppsScriptResponse;
    } catch {
      console.error("Apps Script returned non-JSON response.", {
        status: response.status,
      });

      return errorResponse(
        "The enrollment service returned an unexpected response.",
        502
      );
    }

    // 12. Confirm successful Google Sheets saving
    if (!response.ok || result.success !== true) {
      console.error("Apps Script submission failed:", {
        status: response.status,
        error: result.error || "Unknown error",
      });

      return errorResponse(
        result.error === "Unauthorized"
          ? "Enrollment authentication failed. Please contact support."
          : "We couldn't save your request. Please try again later.",
        502
      );
    }

    // 13. Send Zoho email notifications
    let emailSent = false;

    try {
      await sendEnrollmentEmails({
        name,
        email,
        contactNumber,
        experienceLevel,
      });

      emailSent = true;

      console.log("Enrollment email notifications sent.");
    } catch (emailError) {
      // Do not fail a successfully saved enrollment
      console.error("Enrollment saved, but email delivery failed:", emailError);
    }

    // 14. Return successful enrollment response
    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received.",
      emailSent,
    });

  } catch (error) {
    console.error("THS enrollment request failed:", error);

    return errorResponse(
      "We couldn't save your request. Please try again later.",
      500
    );
  }
}

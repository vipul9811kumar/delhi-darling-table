import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createLead } from "@/lib/airtable";
import {
  consultingThankYou,
  cateringThankYou,
  supperClubThankYou,
  pressThankYou,
  karunaNotification,
} from "@/lib/emails";

const resend = new Resend(process.env.RESEND_API_KEY);
const KARUNA_EMAIL = process.env.KARUNA_EMAIL!;
const FROM_EMAIL = process.env.FROM_EMAIL!;

type Intent = "consulting" | "catering" | "supper-club" | "press";

function getThankYouEmail(intent: Intent, name: string) {
  switch (intent) {
    case "consulting":   return consultingThankYou(name);
    case "catering":     return cateringThankYou(name);
    case "supper-club":  return supperClubThankYou(name);
    case "press":        return pressThankYou(name);
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ intent: string }> }
) {
  const { intent } = await params;
  const validIntents: Intent[] = ["consulting", "catering", "supper-club", "press"];

  if (!validIntents.includes(intent as Intent)) {
    return NextResponse.json({ error: "Invalid intent" }, { status: 400 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, website } = body;

  // Honeypot — bots fill this, humans don't see it
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  // 1. Save to Airtable
  try {
    await createLead({
      Name: name,
      Email: email,
      Intent: intent,
      Message: body.message,
      "Project Type": body.projectType,
      Timeline: body.timeline,
      Location: body.location,
      "Event Date": body.eventDate,
      "Guest Count": body.guestCount,
      City: body.city,
    });
  } catch (err) {
    console.error("Airtable error:", err);
    // Don't fail the request — still send emails
  }

  // 2. Thank-you email to lead + notification to Karuna (parallel)
  const thankYou = getThankYouEmail(intent as Intent, name);
  const notification = karunaNotification({
    Name: name,
    Email: email,
    Intent: intent,
    ...(body.message      && { Message: body.message }),
    ...(body.projectType  && { "Project Type": body.projectType }),
    ...(body.timeline     && { Timeline: body.timeline }),
    ...(body.location     && { Location: body.location }),
    ...(body.eventDate    && { "Event Date": body.eventDate }),
    ...(body.guestCount   && { "Guest Count": body.guestCount }),
    ...(body.city         && { City: body.city }),
  });

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: thankYou.subject,
        html: thankYou.html,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: KARUNA_EMAIL,
        subject: notification.subject,
        html: notification.html,
      }),
    ]);
  } catch (err) {
    console.error("Resend error:", err);
    // Lead is already saved — don't fail the response
  }

  return NextResponse.json({ success: true });
}

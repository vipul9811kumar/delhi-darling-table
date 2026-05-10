import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "next-sanity";
import { bookingConfirmation, karunaBookingNotification } from "@/lib/emails";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const resend = new Resend(process.env.RESEND_API_KEY!);
const FROM_EMAIL = process.env.FROM_EMAIL!;
const KARUNA_EMAIL = process.env.KARUNA_EMAIL!;

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { eventId, eventTitle, seats } = session.metadata ?? {};
    const guestEmail = session.customer_details?.email ?? "";
    const guestName = session.customer_details?.name ?? "Guest";
    const guestPhone = session.customer_details?.phone ?? "";
    const seatsBooked = parseInt(seats ?? "1", 10);
    const amountPaid = (session.amount_total ?? 0) / 100;
    const dietary = session.custom_fields?.find((f) => f.key === "dietary")?.text?.value ?? "";

    // 1. Decrement seats in Sanity
    if (eventId) {
      try {
        const current = await sanity.fetch<{ seatsRemaining: number } | null>(
          `*[_type == "supperClubEvent" && _id == $id][0]{ seatsRemaining }`,
          { id: eventId }
        );
        if (!current) {
          console.error("Webhook: Sanity event not found for id:", eventId);
        } else {
          const newRemaining = Math.max(0, current.seatsRemaining - seatsBooked);
          await sanity
            .patch(eventId)
            .set({
              seatsRemaining: newRemaining,
              ...(newRemaining === 0 ? { status: "sold-out" } : {}),
            })
            .commit();
        }
      } catch (err) {
        console.error("Sanity seat decrement error:", err);
      }
    }

    // 2. Send emails in parallel
    const bookingEmail = bookingConfirmation(guestName, {
      eventTitle: eventTitle ?? "Supper Club",
      seats: seatsBooked,
      total: amountPaid,
    });
    const notifEmail = karunaBookingNotification({
      Name: guestName,
      Email: guestEmail,
      Phone: guestPhone,
      Event: eventTitle ?? "",
      Seats: String(seatsBooked),
      "Amount Paid": `$${amountPaid}`,
      ...(dietary ? { Dietary: dietary } : {}),
    });

    try {
      await Promise.all([
        resend.emails.send({
          from: FROM_EMAIL,
          to: guestEmail,
          subject: bookingEmail.subject,
          html: bookingEmail.html,
        }),
        resend.emails.send({
          from: FROM_EMAIL,
          to: KARUNA_EMAIL,
          subject: notifEmail.subject,
          html: notifEmail.html,
        }),
      ]);
    } catch (err) {
      console.error("Resend booking email error:", err);
    }
  }

  return NextResponse.json({ received: true });
}


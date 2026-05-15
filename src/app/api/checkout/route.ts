import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  let body: {
    eventId: string;
    eventTitle: string;
    eventDate: string;
    pricePerPerson: number;
    seats: number;
    stripePriceId?: string;
    eventType?: "supper-club" | "pop-up";
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { eventId, eventTitle, eventDate, pricePerPerson, seats, stripePriceId, eventType = "supper-club" } = body;

  if (!eventId || !seats || seats < 1 || !pricePerPerson) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "https://delhi-darling.com";
  const eventDateFormatted = new Date(eventDate).toLocaleDateString("en-US", { dateStyle: "long" });

  try {
    let priceId = stripePriceId;

    // If no pre-created price, create one on the fly
    if (!priceId) {
      const price = await stripe.prices.create({
        currency: "usd",
        unit_amount: pricePerPerson * 100,
        product_data: {
          name: `${eventTitle} — ${eventDateFormatted}`,
          metadata: { eventId },
        },
      });
      priceId = price.id;
    }

    const isPopUp = eventType === "pop-up";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: seats }],
      success_url: `${origin}/${isPopUp ? "pop-ups" : "supper-club"}/booking-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${isPopUp ? "pop-ups" : "supper-club"}`,
      metadata: { eventId, eventTitle, seats: String(seats), eventType },
      payment_intent_data: {
        metadata: { eventId, eventTitle, seats: String(seats), eventType },
      },
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: "dietary",
          label: { type: "custom", custom: "Dietary requirements or allergies" },
          type: "text",
          optional: true,
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}

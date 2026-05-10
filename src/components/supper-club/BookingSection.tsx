"use client";

import { useState } from "react";

type Props = {
  eventId: string;
  eventTitle: string;
  eventDate: string;
  pricePerPerson: number;
  seatsRemaining: number;
  stripePriceId?: string;
};

export function BookingSection({
  eventId,
  eventTitle,
  eventDate,
  pricePerPerson,
  seatsRemaining,
  stripePriceId,
}: Props) {
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const maxSeats = Math.min(seatsRemaining, 6);
  const total = seats * pricePerPerson;

  async function handleBook() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, eventTitle, eventDate, pricePerPerson, seats, stripePriceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="font-heading text-4xl mb-2">Reserve your seat</h2>
      <p className="font-body text-sm text-muted-foreground mb-10">
        {seatsRemaining} {seatsRemaining === 1 ? "seat" : "seats"} remaining &nbsp;·&nbsp; ${pricePerPerson} per person
      </p>

      <div className="bg-background border border-border p-8 text-left">
        <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
          Number of Seats
        </label>
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setSeats((s) => Math.max(1, s - 1))}
            className="w-10 h-10 border border-border font-heading text-xl flex items-center justify-center hover:bg-secondary transition-colors"
          >
            −
          </button>
          <span className="font-heading text-3xl w-8 text-center">{seats}</span>
          <button
            onClick={() => setSeats((s) => Math.min(maxSeats, s + 1))}
            className="w-10 h-10 border border-border font-heading text-xl flex items-center justify-center hover:bg-secondary transition-colors"
          >
            +
          </button>
        </div>

        <div className="border-t border-border pt-6 mb-6 flex justify-between items-center">
          <span className="font-body text-sm text-muted-foreground">
            {seats} × ${pricePerPerson}
          </span>
          <span className="font-heading text-2xl">${total}</span>
        </div>

        {error && (
          <p className="font-body text-sm text-destructive mb-4">{error}</p>
        )}

        <button
          onClick={handleBook}
          disabled={loading}
          className="w-full font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Redirecting to payment…" : `Book ${seats} ${seats === 1 ? "Seat" : "Seats"} — $${total}`}
        </button>

        <p className="font-body text-xs text-muted-foreground text-center mt-4 leading-relaxed">
          Secure payment via Stripe. You&apos;ll receive a confirmation email
          with the dinner address after booking.
        </p>
      </div>
    </div>
  );
}

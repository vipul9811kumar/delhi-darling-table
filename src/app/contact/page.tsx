"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type Intent = "consulting" | "catering" | "supper-club" | "press";

const intents: { id: Intent; label: string; description: string }[] = [
  {
    id: "consulting",
    label: "Restaurant Consulting",
    description: "Concept, launch, menu, or operations help",
  },
  {
    id: "catering",
    label: "Private Catering",
    description: "Events, weddings, corporate dining",
  },
  {
    id: "supper-club",
    label: "Supper Club Waitlist",
    description: "Be notified of upcoming dinners",
  },
  {
    id: "press",
    label: "Press & Collaborations",
    description: "Media, partnerships, features",
  },
];

function ContactForm() {
  const params = useSearchParams();
  const initialIntent = (params.get("intent") as Intent) || "consulting";
  const [intent, setIntent] = useState<Intent>(initialIntent);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`/api/leads/${intent}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, intent }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // fail silently for now — API not yet wired
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="diamond-separator mb-8" />
        <h2 className="font-heading text-4xl mb-4">Thank you.</h2>
        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          {intent === "supper-club"
            ? "You're on the waitlist. We'll reach out before the next date goes public."
            : "Karuna will be in touch within two business days."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
      {/* Intent selector */}
      <div className="md:col-span-1">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
          I&apos;m interested in
        </p>
        <div className="space-y-2">
          {intents.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => setIntent(i.id)}
              className={`w-full text-left p-4 border transition-colors ${
                intent === i.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-secondary"
              }`}
            >
              <p className="font-body text-sm font-medium">{i.label}</p>
              <p className="font-body text-xs text-muted-foreground mt-0.5">
                {i.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
        {/* Common fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Name *
            </label>
            <input
              name="name"
              required
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Consulting-specific */}
        {intent === "consulting" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select one</option>
                  <option>New restaurant concept</option>
                  <option>Menu development</option>
                  <option>Operations improvement</option>
                  <option>Restaurant turnaround</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select one</option>
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Location
              </label>
              <input
                name="location"
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="City, State"
              />
            </div>
          </>
        )}

        {/* Catering-specific */}
        {intent === "catering" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Event Date
              </label>
              <input
                name="eventDate"
                type="date"
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Guest Count
              </label>
              <input
                name="guestCount"
                type="number"
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Approx. number of guests"
              />
            </div>
          </div>
        )}

        {/* Supper club — email only, no message needed */}
        {intent === "supper-club" && (
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              City
            </label>
            <input
              name="city"
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Where are you based?"
            />
          </div>
        )}

        {/* Message — for all except supper club */}
        {intent !== "supper-club" && (
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Tell us about your project *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder={
                intent === "catering"
                  ? "Tell us about the event — type, venue, cuisine preferences, any dietary needs..."
                  : intent === "press"
                  ? "Tell us about the collaboration or feature you have in mind..."
                  : "Tell us about your restaurant concept or challenge..."
              }
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Sending..." : intent === "supper-club" ? "Join the Waitlist" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Contact
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-16">
          Let&apos;s talk about
          <br />
          <em>your project.</em>
        </h1>
        <Suspense fallback={<div className="font-body text-sm text-muted-foreground">Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </div>
  );
}

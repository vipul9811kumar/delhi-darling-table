"use client";

import { useState } from "react";

type Intent = "press" | "consulting" | "catering" | "supper-club";

const options: { id: Intent; label: string; placeholder: string }[] = [
  {
    id: "press",
    label: "Press & interviews",
    placeholder:
      "Tell us about your publication, podcast or feature — angle, deadline, format...",
  },
  {
    id: "consulting",
    label: "Consulting",
    placeholder:
      "Tell us about your concept, menu or regional-food project...",
  },
  {
    id: "catering",
    label: "Private event",
    placeholder:
      "Tell us about the event — date, guest count, region or cuisine you have in mind...",
  },
  {
    id: "supper-club",
    label: "Supper club seat",
    placeholder: "Anything we should know? Dietary needs, preferred regions...",
  },
];

const inputClass =
  "w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors";
const labelClass =
  "font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2";

export default function PressEnquiryForm() {
  const [intent, setIntent] = useState<Intent>("press");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const current = options.find((o) => o.id === intent)!;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      string
    >;
    const { organisation, ...rest } = data;
    const message = [
      organisation && `Organisation / outlet: ${organisation}`,
      "Source: Press page",
      rest.message,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const res = await fetch(`/api/leads/${intent}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...rest, message, intent }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-16 border border-border bg-card">
        <div className="diamond-separator mb-8" />
        <h3 className="font-heading text-4xl mb-4">Thank you.</h3>
        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          {intent === "supper-club"
            ? "You're on the waitlist. We'll reach out before the next date goes public."
            : "Karuna will be in touch within two business days."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />

      <fieldset>
        <legend className={labelClass}>I&apos;d like to talk about</legend>
        <div className="grid grid-cols-2 gap-2">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setIntent(o.id)}
              aria-pressed={intent === o.id}
              className={`text-left px-4 py-3 border font-body text-sm transition-colors ${
                intent === o.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-secondary"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="pe-name" className={labelClass}>
            Name *
          </label>
          <input
            id="pe-name"
            name="name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="pe-email" className={labelClass}>
            Email *
          </label>
          <input
            id="pe-email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      {intent !== "supper-club" ? (
        <div>
          <label htmlFor="pe-org" className={labelClass}>
            {intent === "press" ? "Publication / outlet" : "Company / organisation"}
          </label>
          <input
            id="pe-org"
            name="organisation"
            className={inputClass}
            placeholder={
              intent === "press" ? "e.g. magazine, podcast, newsletter" : "Optional"
            }
          />
        </div>
      ) : (
        <div>
          <label htmlFor="pe-city" className={labelClass}>
            City
          </label>
          <input
            id="pe-city"
            name="city"
            className={inputClass}
            placeholder="Where are you based?"
          />
        </div>
      )}

      <div>
        <label htmlFor="pe-message" className={labelClass}>
          Message {intent !== "supper-club" && "*"}
        </label>
        <textarea
          id="pe-message"
          name="message"
          required={intent !== "supper-club"}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder={current.placeholder}
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-destructive">
          Something went wrong sending your message. Please try again in a
          moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "loading"
          ? "Sending..."
          : intent === "supper-club"
          ? "Join the Waitlist"
          : "Send Enquiry"}
      </button>
    </form>
  );
}

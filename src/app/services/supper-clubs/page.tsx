import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supper Clubs — Delhi Darling Table",
  description:
    "Intimate ticketed dinners by Karuna Kumar, each devoted to a single region of India. Small tables. No shortcuts. Bay Area and Los Angeles.",
};

const whatToExpect = [
  {
    n: "01",
    title: "One region. One evening.",
    body: "Every dinner is devoted to a single corner of India — Lucknow, coastal Karnataka, Bengal, Rajasthan. The menu, the stories, and every ingredient serve that one geography. Nothing is generic. Nothing is borrowed.",
  },
  {
    n: "02",
    title: "Karuna at the table",
    body: "These are not catered events. Karuna cooks, explains, and eats with you. She has spent decades understanding where each dish comes from — the history, the technique, the people who shaped it. The evening is a conversation between the food and the people around it.",
  },
  {
    n: "03",
    title: "Small by design",
    body: "Every dinner is capped at a small number of seats. The intimacy is the point. No large tables, no shared platters lost in the noise, no event-catering shortcuts. Hosted in private spaces across the Bay Area and Greater Los Angeles.",
  },
  {
    n: "04",
    title: "The full menu",
    body: "Multiple courses from snack through to dessert, with thoughtful pairings. No printed menu until you sit down — the discovery is part of the experience. Dietary accommodations are discussed in advance so no course is a compromise.",
  },
];

export default function SupperClubsServicePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <Link
          href="/services"
          className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Services
        </Link>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
          Service 04
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-8">
          The
          <br />
          <em>Supper Club</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          A series of intimate, ticketed dinners where each sitting explores one region
          of India — the food, the history, the people who shaped it. Small tables.
          No shortcuts. Hosted across the Bay Area and Greater Los Angeles.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* The idea */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            The Idea
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            A table worth travelling for
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            India has twenty-eight states and dozens of distinct culinary traditions — most
            of which have never appeared on a restaurant menu in California. The Delhi
            Darling Table supper club exists to change that, one region at a time.
          </p>
          <p>
            Each dinner is a deep dive into one tradition: the slow-cooked Awadhi kitchens
            of Lucknow, the coconut and mustard seed coast of Karnataka, the saffron and
            game of the Rajput royal kitchens, the mustard oil and maach of Bengal. Karuna
            has spent her career in these traditions — cooking them, studying them, teaching
            them to her kitchen teams.
          </p>
          <p>
            These evenings are for guests who want to eat seriously. People who are curious
            about where their food comes from and who cooked it before the restaurant did.
          </p>
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* What to expect */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          What to Expect
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          The evening
        </h2>
        <div className="space-y-px bg-border">
          {whatToExpect.map((item) => (
            <div key={item.n} className="bg-background p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div>
                <span className="font-heading text-primary/30 text-4xl">{item.n}</span>
                <h3 className="font-heading text-2xl mt-2">{item.title}</h3>
              </div>
              <p className="md:col-span-3 font-body text-sm text-muted-foreground leading-relaxed self-center">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Practical details */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Practical Details
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            How to join
          </h2>
        </div>
        <div className="md:col-span-2 space-y-0 divide-y divide-border">
          {[
            {
              label: "Seats",
              text: "Typically 8–16 guests per evening. Seats are allocated from the waitlist before any public announcement.",
            },
            {
              label: "Location",
              text: "Hosted in private spaces in the Bay Area and Greater Los Angeles. The exact address is shared with confirmed guests.",
            },
            {
              label: "Format",
              text: "Seated, multi-course dinner with pairings. Duration is typically 3–4 hours. Arrival time, dress code, and menu theme are sent in advance.",
            },
            {
              label: "Dietary needs",
              text: "Accommodated where possible. Let us know when you join the waitlist. Certain menus are built around proteins that cannot be substituted — we'll be transparent about this.",
            },
            {
              label: "Booking",
              text: "Join the waitlist. When a date is confirmed, waitlist guests receive a private booking link before tickets go public.",
            },
          ].map((item) => (
            <div key={item.label} className="py-6 grid grid-cols-3 gap-6">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary self-start pt-0.5">
                {item.label}
              </p>
              <p className="col-span-2 font-body text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Seats are limited.
              <br />
              <em>The waitlist is open.</em>
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Leave your name and email. When the next date is confirmed, you'll hear
              from us before the public announcement.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact?intent=supper-club"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/supper-club"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground transition-colors text-center"
            >
              View Upcoming Dates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Supper Club",
  description:
    "Intimate ticketed dinners by Karuna Kumar, exploring one region of India per evening. Small tables. No compromises.",
};

export default async function SupperClubPage() {
  const events = await getUpcomingEvents();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          The Supper Club
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-10">
          An evening at
          <br />
          <em>the Delhi Darling Table.</em>
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-lg leading-relaxed">
          A series of intimate, ticketed dinners where each sitting explores one
          region of India — the food, the history, the people who shaped it.
          Small tables. No shortcuts.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* What to expect */}
      <section className="px-6 max-w-6xl mx-auto py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            What to Expect
          </p>
          <div className="space-y-8">
            {[
              {
                n: "01",
                title: "A single region, explored fully",
                body: "Each dinner is devoted to one corner of India — Lucknow, coastal Karnataka, Bengal, Rajasthan. The menu, the stories, and the mise en place all serve that one geography.",
              },
              {
                n: "02",
                title: "Karuna at the table",
                body: "These aren't catered events. Karuna cooks, explains, and eats with you. The evening is a conversation between the food and the people around it.",
              },
              {
                n: "03",
                title: "Small by design",
                body: "Every dinner is capped at a small number of seats. The intimacy is the point — there are no large tables, no shared platters lost in the noise. Hosted in the Bay Area and Greater Los Angeles.",
              },
              {
                n: "04",
                title: "The full menu",
                body: "Multiple courses from snack to dessert, with pairings. No printed menu until you sit down — the discovery is part of the experience.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-6">
                <span className="font-heading text-primary/40 text-2xl shrink-0 mt-0.5">
                  {item.n}
                </span>
                <div>
                  <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src="/images/supper-club-event.jpg"
              alt="Delhi Darling Table Supper Club"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Upcoming events */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Upcoming Dates
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-12">
          Reserve your seat
        </h2>

        {events.length === 0 ? (
          <div className="border border-border p-10 text-center">
            <p className="font-heading text-2xl mb-3">Coming Soon</p>
            <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed mb-8">
              The next edition of the Delhi Darling Table supper club is being
              planned. Join the waitlist to be notified first.
            </p>
            <Link
              href="/contact?intent=supper-club"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
            >
              Join the Waitlist
            </Link>
          </div>
        ) : (
          <div className="space-y-px bg-border">
            {events.map((event) => {
              const date = new Date(event.date);
              const soldOut = event.status === "sold-out" || event.seatsRemaining === 0;
              return (
                <div key={event._id} className="bg-background">
                  <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="shrink-0">
                      <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">
                        {event.location}
                      </p>
                      <p className="font-heading text-3xl">
                        {date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        {date.toLocaleDateString("en-US", { year: "numeric" })}&nbsp;·&nbsp;
                        {date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                      </p>
                      <div className="flex gap-3 mt-4 flex-wrap">
                        <span className="font-body text-xs border border-border px-3 py-1 text-muted-foreground">
                          ${event.pricePerPerson} / person
                        </span>
                        <span className={`font-body text-xs border px-3 py-1 ${soldOut ? "border-destructive text-destructive" : "border-border text-muted-foreground"}`}>
                          {soldOut ? "Sold out" : `${event.seatsRemaining} seats left`}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h3 className="font-heading text-2xl md:text-3xl mb-2">{event.title}</h3>
                      {event.tagline && (
                        <p className="font-heading italic text-lg text-muted-foreground mb-4">
                          {event.tagline}
                        </p>
                      )}
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                        {event.description}
                      </p>
                      <div className="flex gap-4 flex-wrap items-center">
                        <Link
                          href={`/supper-club/${event.slug.current}`}
                          className="font-body text-sm tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
                        >
                          See full menu →
                        </Link>
                        {!soldOut && (
                          <Link
                            href={`/supper-club/${event.slug.current}#book`}
                            className="font-body text-sm tracking-widest uppercase px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                          >
                            Book a Seat
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {event.coverImage?.url && (
                    <div className="aspect-[21/6] relative overflow-hidden">
                      <Image
                        src={event.coverImage.url}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <div className="diamond-separator py-6" />

      {/* Past menus */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Past Evenings
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-12">
          Menus we&apos;ve cooked
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {["The Awadhi Table", "Coastal Karnataka", "A Bengal Evening"].map((title) => (
            <div key={title} className="bg-background p-8">
              <div className="aspect-square bg-secondary border border-border mb-6 flex items-end p-3">
                <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                  Food Photography
                </p>
              </div>
              <h3 className="font-heading text-2xl mb-2">{title}</h3>
              <p className="font-body text-sm text-muted-foreground">
                Menu details coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Seats are limited.
            <br />
            <em>The waitlist is open.</em>
          </h2>
          <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto leading-relaxed mb-10">
            Leave your email and we&apos;ll be in touch when the next date is
            confirmed — before public announcement.
          </p>
          <Link
            href="/contact?intent=supper-club"
            className="font-body text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}

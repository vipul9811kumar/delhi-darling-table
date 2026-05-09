import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supper Club",
  description:
    "Intimate ticketed dinners by Karuna Kumar, exploring one region of India per evening. Small tables. No compromises.",
};

export default function SupperClubPage() {
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

        {/* Photo + upcoming dates */}
        <div className="space-y-8">
          <div className="aspect-square bg-secondary border border-border flex items-end p-4">
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              Supper Club — Event Photography
            </p>
          </div>

          {/* Upcoming dates */}
          <div className="border border-border p-8">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Upcoming Dates
            </p>
            <div className="space-y-4">
              <div className="border-t border-border pt-4">
                <p className="font-heading text-xl mb-1">Coming Soon</p>
                <p className="font-body text-sm text-muted-foreground">
                  The next edition of the Delhi Darling Table supper club is
                  being planned. Join the waitlist to be notified first.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact?intent=supper-club"
                className="font-body text-sm tracking-widest uppercase px-6 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block w-full text-center"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="diamond-separator py-6" />

      {/* Past menus — placeholder */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Past Evenings
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-12">
          Menus we&apos;ve cooked
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            "The Awadhi Table",
            "Coastal Karnataka",
            "A Bengal Evening",
          ].map((title) => (
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

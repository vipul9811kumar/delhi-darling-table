import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Catering — Delhi Darling Table",
  description:
    "Bespoke private catering across the Bay Area and Greater Los Angeles. Weddings, private dinners, and corporate events where the food is the centrepiece.",
};

const formats = [
  {
    title: "Private Dinners",
    body: "Intimate seated dinners at a private residence or hired space. Typically 10–30 guests. Karuna designs a bespoke menu, manages all preparation, and presents the food as a complete evening — each course explained, each dish intentional.",
  },
  {
    title: "Weddings & Rehearsal Dinners",
    body: "Indian weddings deserve Indian food that actually reflects the subcontinent's depth — not a standard buffet. Karuna designs wedding and rehearsal menus that honour the occasion and the cuisine, with full dietary and allergen accommodation across large guest lists.",
  },
  {
    title: "Corporate Hospitality",
    body: "Seated lunches, working dinners, and client hospitality events where the food signals that this occasion matters. Menus are calibrated to the group, the setting, and the level of formality. Bay Area and Los Angeles.",
  },
  {
    title: "Celebration Events",
    body: "Birthdays, anniversaries, milestone gatherings. Events where the host wants a genuinely memorable meal rather than a catered one — a distinction that shows in every plate.",
  },
];

const deliverables = [
  "Bespoke menu design per event",
  "Full-service cooking & presentation",
  "Dietary & allergen accommodation",
  "Service staff coordination",
  "Equipment & logistics management",
  "Typically 20–150 guests",
];

export default function CateringPage() {
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
          Service 03
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-8">
          Private
          <br />
          <em>Catering</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          High-value private events, weddings, and corporate dining across the Bay Area
          and Greater Los Angeles — where the food is the centrepiece, not the afterthought.
          Every menu is built from scratch for the occasion.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* What makes it different */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            The Approach
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            No two menus are the same
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            Most catering starts with a fixed menu and fits the event around it. Karuna
            works the other way — she starts with the occasion, the guest list, the setting,
            and the time of year, and builds a menu specifically for that event.
          </p>
          <p>
            Drawing on the full breadth of India's regional cuisines — the slow-braised
            traditions of Lucknow, the coconut and spice of coastal Karnataka, the royal
            kitchens of Rajasthan, the mustard heat of Bengal — the food tells a story
            that a standard catering menu never does.
          </p>
          <p>
            Karuna cooks personally. She is not a catering company; she is a chef who
            caters for select events. The difference is in every dish.
          </p>
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Event formats */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Event Types
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          What we cater
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {formats.map((f) => (
            <div key={f.title} className="bg-background p-8 md:p-10">
              <h3 className="font-heading text-2xl mb-4">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Deliverables + logistics */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            What's Included
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            What to expect
          </h2>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3 border border-border p-4">
                <span className="text-primary shrink-0 mt-0.5">◆</span>
                <span className="font-body text-sm text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground font-normal">Geography:</strong> Bay Area
              and Greater Los Angeles. Travel to other California locations and beyond
              considered for the right event.
            </p>
            <p>
              <strong className="text-foreground font-normal">Lead time:</strong> A minimum
              of 4–6 weeks for most events. Weddings and large events require more notice.
              Get in touch as early as possible to confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Tell us about your event.
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Share the date, guest count, location, and occasion. Karuna will come back
              with a menu proposal and availability within two business days.
            </p>
          </div>
          <Link
            href="/contact?intent=catering"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center shrink-0"
          >
            Enquire About Catering
          </Link>
        </div>
      </section>
    </div>
  );
}

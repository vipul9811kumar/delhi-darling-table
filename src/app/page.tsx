import Link from "next/link";

const services = [
  {
    title: "Restaurant Consulting",
    description:
      "Concept development, operations, menu architecture, and launch strategy for new restaurants and turnarounds.",
    href: "/services/consulting",
  },
  {
    title: "Menu Development",
    description:
      "Seasonal menus, R&D, regional Indian cuisine curation, and beverage pairing for established restaurants.",
    href: "/services/menu-development",
  },
  {
    title: "Private Catering",
    description:
      "High-value events, weddings, and corporate dining — curated menus with the care of a private chef.",
    href: "/services/catering",
  },
  {
    title: "Supper Clubs",
    description:
      "Intimate ticketed dinners exploring a single region of India. A table worth travelling for.",
    href: "/supper-club",
  },
  {
    title: "Pop-Up Restaurants",
    description:
      "Full-service pop-up dining — concept, kitchen, and execution. Markets, venues, brand collaborations.",
    href: "/services/pop-up",
  },
];

const work = [
  {
    name: "Delhi Darling",
    location: "Surf City, NC",
    tagline: "Destination dining on the Carolina coast.",
    detail:
      "A 60-cover Pan Indian restaurant that brought Kundapur Ghee Roast, Bengali Daab Chingri, and the Darling Naan Pizza to the North Carolina coast.",
    slug: "delhi-darling",
  },
  {
    name: "Tandoori Trail",
    location: "Apex, NC",
    tagline: "Awadhi heart. Pan Indian soul.",
    detail:
      "A Triangle-area restaurant built around the slow-cooked traditions of Lucknow — Kakori Kebab, Lamb Shank Nihari, dum biryanis — alongside regional Indian breadth.",
    slug: "tandoori-trail-apex",
  },
  {
    name: "Tandoori Trail",
    location: "Smithfield, NC",
    tagline: "Indian food for everyday North Carolina.",
    detail:
      "A family restaurant in Johnston County that proved great Indian food works for lunch buffets, sizzler platters, and weeknight dinners alike.",
    slug: "tandoori-trail-smithfield",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-6xl mx-auto py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Karuna Kumar — Hospitality Consultant
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl mb-10">
          The table is where
          <br />
          <em>great food</em> becomes
          <br />a lasting memory.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
          Delhi Darling Table brings two decades of building restaurants from the
          ground up to the Bay Area and beyond — concept to kitchen, menu to margin,
          opening night to steady repeat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact?intent=consulting"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
          >
            Start a Conversation
          </Link>
          <Link
            href="/work"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-center"
          >
            See Our Work
          </Link>
        </div>
      </section>

      <div className="diamond-separator py-6" />

      {/* Services */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          What We Do
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16 max-w-xl">
          Five ways to work together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-background p-8 md:p-10 hover:bg-secondary transition-colors"
            >
              <h3 className="font-heading text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {s.description}
              </p>
              <span className="font-body text-xs tracking-widest uppercase text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="diamond-separator py-6" />

      {/* Past Work */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Past Work
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-4 max-w-xl">
          Three restaurants. Three markets.
          <em> One philosophy.</em>
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-16 max-w-lg leading-relaxed">
          Three restaurants built from scratch in North Carolina — different markets,
          different price points, the same uncompromising standard. Now bringing
          that foundation to the Bay Area, Greater Los Angeles, and beyond.
        </p>

        <div className="space-y-px bg-border">
          {work.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group flex flex-col md:flex-row md:items-center gap-6 bg-background p-8 hover:bg-secondary transition-colors"
            >
              <div className="md:w-1/3">
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">
                  {w.location}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl">{w.name}</h3>
                <p className="font-heading italic text-muted-foreground mt-1">
                  {w.tagline}
                </p>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed md:w-1/2">
                {w.detail}
              </p>
              <span className="font-body text-xs tracking-widest uppercase text-primary md:ml-auto whitespace-nowrap">
                Read the story →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="diamond-separator py-6" />

      {/* Supper Club CTA */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <div className="border border-border p-10 md:p-16 flex flex-col md:flex-row md:items-end gap-8">
          <div className="md:flex-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              The Supper Club
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              An intimate evening at
              <br />
              <em>the Delhi Darling Table</em>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
              A series of ticketed dinners exploring one region of India per
              sitting — the food, the story, the people who shaped it. Small
              tables. No compromises.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:shrink-0">
            <Link
              href="/supper-club"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              View Upcoming Dates
            </Link>
            <Link
              href="/contact?intent=supper-club"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-center"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Currently accepting
              <br />
              <em>new consulting clients.</em>
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Based in the Bay Area. Available for projects across California
              and beyond — including Greater Los Angeles.
            </p>
          </div>
          <Link
            href="/contact?intent=consulting"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Restaurant consulting, menu development, private catering, supper clubs, and pop-up restaurants — five ways to work with Karuna Kumar.",
};

const services = [
  {
    href: "/services/consulting",
    label: "01",
    title: "Restaurant Consulting",
    description:
      "For operators building something new or rethinking something existing. Karuna works across the full lifecycle — concept and positioning, kitchen design input, supplier relationships, team structure, menu architecture, and launch. She has done this three times from scratch in North Carolina and brings that operational knowledge to your project.",
    deliverables: [
      "Concept development & positioning",
      "Menu architecture",
      "Kitchen operations review",
      "Supplier sourcing",
      "Staff hiring & training frameworks",
      "Launch strategy",
    ],
  },
  {
    href: "/services/menu-development",
    label: "02",
    title: "Menu Development",
    description:
      "For restaurants that need their menu to work harder. Karuna builds menus that are regionally rooted, operationally executable, and economically sound. Seasonal refresh, full menu rebuild, or a focused R&D project — each engagement starts with understanding your kitchen's capabilities and your guest's expectations.",
    deliverables: [
      "Regional Indian cuisine curation",
      "Seasonal menu design",
      "Recipe development & testing",
      "Costing & margin analysis",
      "Beverage pairing suggestions",
      "Staff recipe training",
    ],
  },
  {
    href: "/services/catering",
    label: "03",
    title: "Private Catering",
    description:
      "High-value private events, weddings, and corporate dining across the Bay Area and Greater Los Angeles where the food is the centrepiece, not the afterthought. Karuna designs bespoke menus for each event — drawing on the full breadth of Indian regional cuisine — and manages the execution personally. Typically 20–150 guests.",
    deliverables: [
      "Bespoke menu design",
      "Full-service event catering",
      "Dietary & allergen accommodation",
      "Private dinners",
      "Wedding & rehearsal dinners",
      "Corporate hospitality",
    ],
  },
  {
    href: "/supper-club",
    label: "04",
    title: "Supper Clubs",
    description:
      "The Delhi Darling Table supper club is a series of intimate, ticketed dinners — each one devoted to a single region of India. These are not pop-ups. They are curated evenings where Karuna cooks, narrates, and eats with you. Small by design. Serious about the food.",
    deliverables: [
      "Ticketed seated dinners",
      "Regional Indian focus per event",
      "Multi-course with pairings",
      "Small group (typically 8–16 guests)",
      "Bay Area, Los Angeles, and beyond",
    ],
  },
  {
    href: "/services/pop-up",
    label: "05",
    title: "Pop-Up Restaurant",
    description:
      "A fully permitted, commercially operated restaurant without the lease. Karuna designs and runs pop-ups that test concepts, build brands, and bring Indian food into markets where it has never existed before. Open to the public, commercially insured, health-inspected — the real thing, on a defined timeline.",
    deliverables: [
      "Concept & menu development",
      "Permits, licensing & insurance",
      "Kitchen setup & staffing",
      "Ticket & reservation system",
      "Press & community outreach",
      "Post-run debrief & learnings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Services
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Five ways to work
          <br />
          <em>with us.</em>
        </h1>
      </section>

      <div className="diamond-separator py-4" />

      <section className="px-6 max-w-6xl mx-auto py-16 space-y-px bg-border">
        {services.map((s) => (
          <div key={s.title} className="bg-background p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <p className="font-heading text-primary/40 text-5xl mb-2">{s.label}</p>
                <h2 className="font-heading text-2xl md:text-3xl mb-4">{s.title}</h2>
                <Link
                  href={s.href}
                  className="font-body text-xs tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
                >
                  Learn more →
                </Link>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-0.5 shrink-0">◆</span>
                      <span className="font-body text-xs text-muted-foreground">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Not sure which service fits?
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md">
              Send a message and describe what you&apos;re working on. Karuna
              will respond within two business days.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

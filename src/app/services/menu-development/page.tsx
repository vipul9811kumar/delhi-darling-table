import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu Development — Delhi Darling Table",
  description:
    "Seasonal menus, full menu rebuilds, and recipe R&D for Indian restaurants. Regionally rooted, operationally executable, economically sound.",
};

const process = [
  {
    n: "01",
    title: "Kitchen Audit",
    body: "Before touching the menu, Karuna understands what your kitchen can actually do — equipment, skill level, sourcing constraints, and prep capacity. The best dish in the world fails if your line can't execute it consistently on a Friday night.",
  },
  {
    n: "02",
    title: "Guest & Market Read",
    body: "Who is coming through the door, and what are they ready for? Karuna has built menus for Indian-American audiences in competitive Triangle markets and for guests who had never tried Indian food before. The approach is different. The standard is the same.",
  },
  {
    n: "03",
    title: "Recipe Development & Testing",
    body: "Dishes are developed, costed, and tested before they go on paper. Karuna works with your team through the recipes — not just handing over a document, but cooking alongside the kitchen until the dish is right and repeatable.",
  },
  {
    n: "04",
    title: "Menu Build & Rationale",
    body: "The final menu is structured as a sequence — it builds, surprises, and ends well. Every section has a logic. The pricing is stress-tested against real food cost targets. Pairings (wine or otherwise) are suggested where they add something genuine.",
  },
];

const deliverables = [
  "Full menu draft with section structure",
  "Regional Indian cuisine curation",
  "Recipe documentation (kitchen-ready)",
  "Food cost & margin analysis per dish",
  "Seasonal refresh recommendations",
  "Beverage pairing suggestions",
  "Staff recipe training sessions",
];

export default function MenuDevelopmentPage() {
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
          Service 02
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-8">
          Menu
          <br />
          <em>Development</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          For restaurants where the menu needs to work harder. Whether that means
          a seasonal refresh, a full rebuild, or targeted R&D on a specific section —
          Karuna builds menus that are regionally rooted, operationally executable,
          and economically honest.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* Who it's for */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Who It's For
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Menus that need to evolve
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            Indian restaurants with menus that have grown organically — a dish added here,
            a special that stuck there — but that no longer tell a coherent story or hit
            their margin targets.
          </p>
          <p>
            Restaurants opening a new chapter: new head chef, new ownership, new
            neighbourhood. The menu needs to move with the restaurant without losing
            what the regulars love.
          </p>
          <p>
            Operators who want to build a serious regional Indian programme — Awadhi,
            coastal Karnataka, Rajputana, Bengali — but need expertise in the culinary
            depth those traditions require.
          </p>
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Process */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          How It Works
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          The engagement
        </h2>
        <div className="space-y-px bg-border">
          {process.map((step) => (
            <div key={step.n} className="bg-background p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div>
                <span className="font-heading text-primary/30 text-4xl">{step.n}</span>
                <h3 className="font-heading text-2xl mt-2">{step.title}</h3>
              </div>
              <p className="md:col-span-3 font-body text-sm text-muted-foreground leading-relaxed self-center">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Deliverables */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            What's Included
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Deliverables
          </h2>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3 border border-border p-4">
                <span className="text-primary shrink-0 mt-0.5">◆</span>
                <span className="font-body text-sm text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground mt-6 leading-relaxed">
            Projects range from a targeted section refresh (4–6 weeks) to a full menu
            rebuild with staff training (8–12 weeks). Scope is agreed after an initial
            conversation about your kitchen and your goals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Ready to rebuild the menu?
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Tell Karuna what's working and what isn't. She'll come back with a
              proposed scope within two business days.
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

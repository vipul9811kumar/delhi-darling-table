import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Consulting — Delhi Darling Table",
  description:
    "Concept development, operations, menu architecture, and launch strategy for new restaurants and turnarounds. Karuna Kumar has built three restaurants from scratch.",
};

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "We start with the market, the location, and the operator. Who is the guest? What does the neighbourhood need that it doesn't have? What is your kitchen's realistic capability? Good restaurants are built on honest answers to these questions.",
  },
  {
    n: "02",
    title: "Concept & Positioning",
    body: "A concept is not a cuisine — it is a specific point of view about who you are for and why. Karuna works with you to define a position that is genuinely differentiated, operationally achievable, and built to last beyond the opening.",
  },
  {
    n: "03",
    title: "Menu Architecture",
    body: "The menu is designed to tell a story, hit the right margins, and match your kitchen's capacity. Every section, every dish has a reason to be there. Karuna draws on the full breadth of regional Indian cuisine — and knows which dishes work for which markets.",
  },
  {
    n: "04",
    title: "Operations & Launch",
    body: "Staffing frameworks, supplier relationships, kitchen layout input, service design, and a launch strategy that builds early momentum. Karuna has done this three times from scratch — she knows what breaks in week two and how to prevent it.",
  },
];

const deliverables = [
  "Concept development & positioning brief",
  "Menu architecture (full draft + rationale)",
  "Kitchen operations review",
  "Supplier identification & sourcing",
  "Staff hiring & training frameworks",
  "Launch strategy & timeline",
  "Ongoing advisory (retainer available)",
];

export default function ConsultingPage() {
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
          Service 01
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-8">
          Restaurant
          <br />
          <em>Consulting</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          For operators building something new or rethinking something that isn't working.
          Karuna brings the full arc — concept to kitchen, menu to margin, soft open to
          steady repeat — drawn from three restaurants built from the ground up in
          North Carolina.
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
            New concepts and turnarounds
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            New operators who have the passion and the capital but need an experienced
            guide through concept, kitchen, and launch — without learning every lesson
            the hard way.
          </p>
          <p>
            Established restaurants where something isn't landing — the menu isn't
            working, the margins are wrong, the kitchen can't execute consistently, or
            the concept has drifted from what it set out to be.
          </p>
          <p>
            Bay Area and Los Angeles operators who want to build serious Indian food —
            regionally specific, culinarily ambitious — for a market that is ready for
            it but hasn't been served it properly.
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
            Engagements are scoped individually. Some projects need the full arc from
            concept to launch; others need a focused review of a specific problem. Karuna
            will propose a scope after an initial conversation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Start the conversation.
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Describe your project — where it is, what stage it's at, what you need.
              Karuna responds within two business days.
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

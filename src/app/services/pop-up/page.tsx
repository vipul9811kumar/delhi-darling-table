import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pop-Up Restaurant — Delhi Darling Table",
  description:
    "Fully permitted, commercially operated pop-up restaurants designed by Karuna Kumar. Test a concept, build a brand, or bring Indian food to a new market.",
};

const formats = [
  {
    title: "Concept Testing",
    body: "Before committing to a permanent lease, a pop-up is the most efficient way to validate a menu, understand a guest base, and refine the operation. Karuna builds the concept, writes the menu, runs the kitchen, and delivers data that a business plan cannot.",
  },
  {
    title: "Brand Building",
    body: "A pop-up creates presence and urgency — two things a permanent restaurant takes years to build. Karuna designs pop-ups that generate press, build a following, and position a brand before brick-and-mortar opens.",
  },
  {
    title: "Market Entry",
    body: "Entering a new city or neighbourhood without committing to a lease. A short-run pop-up tests whether a market responds to a concept, at a fraction of the cost of a permanent opening.",
  },
  {
    title: "Venue & Brand Collaborations",
    body: "Partnering with an existing venue — a wine bar, gallery, retail space, or hotel — to run a defined pop-up programme. Karuna manages the culinary side end-to-end; the venue provides the space and the audience.",
  },
];

const deliverables = [
  "Full concept and menu development",
  "Permitted, commercially insured operation",
  "Kitchen design and equipment logistics",
  "Staffing — kitchen and front of house",
  "Ticket or reservation system setup",
  "Press and community outreach strategy",
  "Post-run analysis and learnings",
  "Pathway to permanent concept if desired",
];

const howItWorks = [
  {
    n: "01",
    title: "Concept session",
    body: "Karuna works with you to define the concept — cuisine, format, price point, target guest, and the story the pop-up needs to tell.",
  },
  {
    n: "02",
    title: "Location & permits",
    body: "We identify the right venue — a rented restaurant kitchen, event hall, or commercial space — and handle all permits, health inspections, and commercial insurance.",
  },
  {
    n: "03",
    title: "Menu and kitchen build",
    body: "Karuna writes the menu, sources ingredients, sets up the kitchen, and staffs the operation. Everything is built to run cleanly in a temporary space.",
  },
  {
    n: "04",
    title: "Run and refine",
    body: "The pop-up runs for its defined period — consecutive days, a weekend series, or a multi-week residency. Karuna is in the kitchen throughout. After close, she delivers a full operational debrief.",
  },
];

export default function PopUpPage() {
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
          Service 05
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-8">
          Pop-Up
          <br />
          <em>Restaurant</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          A fully permitted, commercially operated restaurant — without the lease.
          Karuna designs and runs pop-ups that test concepts, build brands, and
          bring Indian food into markets where it has never existed before.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* Pop-up vs Supper Club */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            What It Is
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            A restaurant, not a dinner party
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            A pop-up is a commercial restaurant operation with a defined run — a weekend,
            a week, a month. It is fully permitted, health-inspected, and commercially
            insured. Open to the public. Anyone can walk in or buy a ticket.
          </p>
          <p>
            This is distinct from the Delhi Darling Table Supper Club, which is intimate,
            invitation-based, and held in private spaces. A pop-up is designed for
            visibility, volume, and proof of concept — the operational equivalent of a
            restaurant, without the long-term lease commitment.
          </p>
          <p>
            Karuna has built three restaurants from scratch across North Carolina. She
            brings that same rigour to a pop-up format — concept, kitchen, staffing,
            menu, and guest experience, all designed to run cleanly in a temporary space.
          </p>
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Use cases */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          When It Makes Sense
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          What pop-ups are built for
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

      {/* How it works */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          The Process
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          From concept to service
        </h2>
        <div className="divide-y divide-border">
          {howItWorks.map((step) => (
            <div key={step.n} className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="flex items-start gap-4">
                <span className="font-heading text-primary/40 text-2xl shrink-0">{step.n}</span>
                <h3 className="font-heading text-xl">{step.title}</h3>
              </div>
              <div className="md:col-span-3">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Deliverables */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            What&apos;s Included
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            End to end
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
              and Greater Los Angeles. Other California locations and select out-of-state
              markets considered for the right concept.
            </p>
            <p>
              <strong className="text-foreground font-normal">Lead time:</strong> Minimum
              6–8 weeks for a properly permitted pop-up. Longer for concepts requiring
              custom build-out or multi-week runs. Start the conversation early.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Have a concept in mind?
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Tell us about the concept, the market, and the timeline. Karuna will
              come back with a proposal within two business days.
            </p>
          </div>
          <Link
            href="/contact?intent=consulting"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center shrink-0"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

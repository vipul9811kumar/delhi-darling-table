import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Karuna Kumar is a chef, operator, and restaurant consultant with over two decades building Indian restaurants in North Carolina.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          About
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-0">
          Built from the inside out.
        </h1>
      </section>

      <div className="diamond-separator py-4" />

      {/* Main content */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Portrait */}
        <div className="order-2 md:order-1">
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/karuna-portrait.jpg"
              alt="Karuna Kumar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Story */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-8">
            Karuna Kumar
          </h2>
          <div className="space-y-5 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Karuna Kumar has spent over two decades in Indian hospitality — not as
              a spectator, but as the person who built the kitchen, wrote the menu,
              hired the team, and opened the doors.
            </p>
            <p>
              She founded three restaurants across North Carolina: Delhi Darling on
              the Topsail coast, and Tandoori Trail in Apex and Smithfield. Each was
              built from concept to opening — recipe testing, staffing, supplier
              relationships, brand. Together they served tens of thousands of covers
              of honest, regionally-rooted Indian food in markets where it had never
              existed before.
            </p>
            <p>
              Her cooking draws on the breadth of the subcontinent — from the
              slow-cooked traditions of Lucknowi Awadhi cuisine to the coconut-laced
              shores of coastal Karnataka. But more than any single region, Karuna
              brings a rigorous curiosity: every dish is a question about where it
              came from, who shaped it, and how to honour that on a plate.
            </p>
            <p>
              Now based in the San Francisco Bay Area, she brings that foundation
              to one of the most demanding and exciting food markets in the world.
              The Bay Area&apos;s Indian-American community deserves cooking that
              reflects the full complexity of the subcontinent — and Karuna
              consults with operators who want to build exactly that.
            </p>
            <p>
              She works with restaurants at every stage — new Bay Area and Los
              Angeles concepts seeking their identity, established kitchens evolving
              their menus, and operators who need an experienced eye to see
              what they can&apos;t.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/contact?intent=consulting"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
            >
              Work With Karuna
            </Link>
          </div>
        </div>
      </section>

      <div className="diamond-separator py-6" />

      {/* Philosophy */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Philosophy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl">
              What guides the work
            </h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Region first",
                body: "Every dish has a postcode. Understanding where a recipe comes from — its climate, its caste history, its migration — changes how you cook it.",
              },
              {
                title: "The tandoor is the backbone",
                body: "Smoke, char, and dry heat are not garnish. They are the foundation around which every menu Karuna has built is organised.",
              },
              {
                title: "Menus tell stories",
                body: "A menu is not a list. It is a sequence — it should create anticipation, build, surprise, and leave the guest wanting to return.",
              },
              {
                title: "Operations are creative work",
                body: "The best food fails without the systems to support it. Kitchen design, sourcing, staffing, and service design are as creative as the recipes.",
              },
            ].map((p) => (
              <div key={p.title} className="border-t border-border pt-6">
                <h3 className="font-heading text-xl mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <h2 className="font-heading text-3xl md:text-4xl md:flex-1">
            Ready to bring Karuna to your project?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/services"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 border border-primary-foreground/40 text-primary-foreground hover:border-primary-foreground transition-colors text-center"
            >
              See Services
            </Link>
            <Link
              href="/contact?intent=consulting"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Three restaurants across North Carolina — Delhi Darling, Tandoori Trail Apex, and Tandoori Trail Smithfield.",
};

const cases = [
  {
    slug: "delhi-darling",
    name: "Delhi Darling",
    location: "Surf City, NC",
    years: "3+ years",
    covers: "60 covers",
    tagline: "Destination dining on the Carolina coast.",
    description:
      "A Pan Indian destination restaurant that brought the breadth of the subcontinent — from Kundapur Ghee Roast to Bengali Daab Chingri — to a beach town on the Topsail Island coast. Home of the original Darling Naan Pizza.",
    highlights: ["Darling Naan Pizza concept", "Coastal & Awadhi menu", "Regional Indian breadth", "Full-service dinner restaurant"],
  },
  {
    slug: "tandoori-trail-apex",
    name: "Tandoori Trail",
    location: "Apex, NC",
    years: "3+ years",
    covers: "60 covers",
    tagline: "Awadhi heart. Pan Indian soul.",
    description:
      "The Triangle area's most regionally ambitious Indian restaurant, built around the slow-cooked traditions of Lucknow alongside the coastal and royal kitchens of India. Kakori Kebab, Lamb Shank Nihari, dum biryanis, and Rajputana Safed Maas.",
    highlights: ["Lucknawi Kakori Kebab", "Lamb Shank Nihari", "Dum biryani programme", "Triangle-area market"],
  },
  {
    slug: "tandoori-trail-smithfield",
    name: "Tandoori Trail",
    location: "Smithfield, NC",
    years: "3+ years",
    covers: "50 covers",
    tagline: "Indian food for everyday North Carolina.",
    description:
      "A family restaurant built for Johnston County — accessible everyday Indian with a $15 lunch buffet, sizzler platters, wraps and rolls, and a full dinner menu. Proving great Indian food works at every price point.",
    highlights: ["$15 everyday lunch buffet", "Sizzler programme", "Family & community dining", "High-volume lunch service"],
  },
];

const restaurantImages: Record<string, string> = {
  "delhi-darling": "/images/delhi-darling-restaurant.jpg",
  "tandoori-trail-apex": "/images/tandoori-trail-apex-restaurant.jpg",
  "tandoori-trail-smithfield": "/images/tandoori-trail-smithfield-restaurant.jpg",
};

export default function WorkPage() {
  return (
    <div className="pt-16">
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Our Work
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Three restaurants.
          <br />
          <em>Built from scratch.</em>
        </h1>
      </section>

      <div className="diamond-separator py-4" />

      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-sm text-muted-foreground max-w-xl leading-relaxed mb-16">
          Karuna Kumar founded and operated three restaurants across North Carolina
          — different markets, different concepts, one consistent standard of
          craft. This is the foundation she now brings to the Bay Area,
          Greater Los Angeles, and beyond.
        </p>

        <div className="space-y-px bg-border">
          {cases.map((c) => (
            <div key={c.slug} className="bg-background">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
                  <div className="md:w-1/3">
                    <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                      {c.location}
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl mb-2">{c.name}</h2>
                    <p className="font-heading italic text-xl text-muted-foreground">{c.tagline}</p>
                    <div className="flex gap-4 mt-4">
                      <span className="font-body text-xs text-muted-foreground border border-border px-3 py-1">
                        {c.covers}
                      </span>
                      <span className="font-body text-xs text-muted-foreground border border-border px-3 py-1">
                        {c.years}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                      {c.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.highlights.map((h) => (
                        <span
                          key={h}
                          className="font-body text-xs tracking-wide bg-secondary text-foreground px-3 py-1.5"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Restaurant photo */}
                {restaurantImages[c.slug] ? (
                  <div className="aspect-[16/6] relative overflow-hidden mb-6">
                    <Image
                      src={restaurantImages[c.slug]}
                      alt={`${c.name}, ${c.location}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 90vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/6] bg-secondary border border-border flex items-end p-4 mb-6">
                    <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                      {c.name}, {c.location} — Photo coming soon
                    </p>
                  </div>
                )}

                <Link
                  href={`/work/${c.slug}`}
                  className="font-body text-sm tracking-widest uppercase text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                >
                  Read the full story →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <h2 className="font-heading text-3xl md:text-4xl md:flex-1">
            Ready to add your restaurant to this list?
          </h2>
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

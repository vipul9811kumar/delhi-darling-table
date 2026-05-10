import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";

const heroImages: Record<string, string> = {
  "delhi-darling": "/images/delhi-darling-hero.jpg",
};

const dishImages: Record<string, string> = {
  "Darling Naan Pizza": "/images/delhi-darling-dish-naan-pizza.jpg",
  "Malabar Surf & Turf": "/images/delhi-darling-dish-malabar-surf-turf.jpg",
  "Biryani Pot Pie": "/images/delhi-darling-dish-biryani-pot-pie.png",
  "Kakori Kebab": "/images/tandoori-trail-apex-dish-kakori-kebab.jpg",
  "Lamb Shank Nihari": "/images/tandoori-trail-apex-dish-lamb-nihari.jpg",
  "Rajputana Safed Maas": "/images/tandoori-trail-apex-dish-safed-maas.jpg",
  "Tandoori Ratan": "/images/tandoori-trail-apex-dish-tandoori-ratan.jpg",
  "Tandoori Chicken Sandwich": "/images/tandoori-trail-smithfield-dish-chicken-sandwich.jpg",
  "Chicken Tikka Wrap & Lamb Boti Wrap": "/images/tandoori-trail-smithfield-dish-wraps.jpg",
  "$15 Everyday Lunch Buffet": "/images/tandoori-trail-smithfield-dish-buffet.png",
};

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name}, ${study.location}`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <Link
          href="/work"
          className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Our Work
        </Link>
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
          <div className="md:flex-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              {study.location}, {study.state} &nbsp;·&nbsp; {study.period}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] mb-4">
              {study.name}
            </h1>
            <p className="font-heading italic text-2xl md:text-3xl text-muted-foreground">
              {study.tagline}
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            {study.highlights.slice(0, 3).map((h) => (
              <div key={h.label} className="border border-border p-4 text-center min-w-[80px]">
                <p className="font-heading text-xl">{h.value}</p>
                <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="px-6 max-w-6xl mx-auto mb-0">
        {heroImages[slug] ? (
          <div className="aspect-[21/9] relative overflow-hidden">
            <Image
              src={heroImages[slug]}
              alt={`${study.name}, ${study.location}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        ) : (
          <div className="aspect-[21/9] bg-secondary border border-border flex items-end p-6">
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              {study.name}, {study.location} — Photo coming soon
            </p>
          </div>
        )}
      </div>

      <div className="diamond-separator py-8" />

      {/* Summary */}
      <section className="px-6 max-w-6xl mx-auto py-8">
        <div className="max-w-3xl">
          <p className="font-heading text-2xl md:text-3xl leading-relaxed text-muted-foreground">
            {study.summary}
          </p>
        </div>
      </section>

      <div className="diamond-separator py-8" />

      {/* Challenge / Approach / Result */}
      <section className="px-6 max-w-6xl mx-auto py-16 space-y-0 divide-y divide-border">
        {[study.challenge, study.approach, study.result].map((section, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-16"
          >
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
                {i === 0 ? "The Challenge" : i === 1 ? "The Approach" : "The Result"}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl">
                {section.heading}
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Pull quote */}
      <section className="bg-secondary px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="diamond-separator mb-10" />
          <blockquote className="font-heading italic text-3xl md:text-5xl text-center max-w-3xl mx-auto leading-relaxed">
            &ldquo;{study.pullQuote}&rdquo;
          </blockquote>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground text-center mt-6">
            Karuna Kumar
          </p>
          <div className="diamond-separator mt-10" />
        </div>
      </section>

      {/* Signature dishes */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Signature Dishes
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          What defined the menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {study.signatures.map((s) => (
            <div key={s.dish} className="bg-background p-8">
              {dishImages[s.dish] ? (
                <div className="aspect-video relative overflow-hidden mb-6">
                  <Image
                    src={dishImages[s.dish]}
                    alt={s.dish}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-secondary border border-border mb-6 flex items-end p-3">
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                    {s.dish} — Photo coming soon
                  </p>
                </div>
              )}
              <h3 className="font-heading text-2xl mb-3">{s.dish}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="px-6 max-w-6xl mx-auto py-8 pb-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Community & Recognition
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-12">
          Beyond the restaurant walls
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {study.community.map((item) => (
            <div key={item} className="flex items-start gap-4 border border-border p-6">
              <span className="text-primary text-sm shrink-0 mt-0.5">◆</span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* All highlights */}
      <section className="bg-secondary px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {study.highlights.map((h) => (
              <div key={h.label} className="bg-secondary p-6 text-center">
                <p className="font-heading text-2xl mb-1">{h.value}</p>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next / CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/40 mb-3">
              What&apos;s next
            </p>
            <h2 className="font-heading text-3xl md:text-4xl">
              Ready to build something like this?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/work"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground transition-colors text-center"
            >
              See All Work
            </Link>
            <Link
              href="/contact?intent=consulting"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

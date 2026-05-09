import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWellnessPost, wellnessPosts, categoryLabels } from "@/lib/wellness";

export async function generateStaticParams() {
  return wellnessPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWellnessPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — The Mindful Table`,
    description: post.excerpt,
  };
}

export default async function WellnessPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWellnessPost(slug);
  if (!post) notFound();

  const others = wellnessPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <Link
          href="/wellness"
          className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← The Mindful Table
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-body text-xs tracking-widest uppercase text-primary">
            {categoryLabels[post.category]}
          </span>
          <span className="text-border">·</span>
          <span className="font-body text-xs text-muted-foreground">
            {post.readTime}
          </span>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-6">
          {post.title}
        </h1>
        <p className="font-heading italic text-2xl md:text-3xl text-muted-foreground max-w-2xl">
          {post.subtitle}
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* Body */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <div className="max-w-2xl">
          {post.body.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="font-heading text-2xl md:text-3xl mb-4">
                  {section.heading}
                </h2>
              )}
              <p className="font-body text-base text-muted-foreground leading-[1.85]">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Author */}
        <div className="max-w-2xl mt-16 pt-10 border-t border-border flex items-start gap-6">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">
              Written by
            </p>
            <p className="font-heading text-xl">Karuna Kumar</p>
            <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
              Chef, operator, and founder of Delhi Darling Table. Based in the
              San Francisco Bay Area.
            </p>
          </div>
        </div>
      </section>

      <div className="diamond-separator py-8" />

      {/* More from The Mindful Table */}
      {others.length > 0 && (
        <section className="px-6 max-w-6xl mx-auto py-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            More from The Mindful Table
          </p>
          <div className="space-y-px bg-border">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/wellness/${other.slug}`}
                className="group bg-background p-8 flex flex-col md:flex-row md:items-center gap-4 hover:bg-secondary transition-colors block"
              >
                <div className="md:flex-1">
                  <span className="font-body text-xs tracking-widest uppercase text-primary">
                    {categoryLabels[other.category]}
                  </span>
                  <h3 className="font-heading text-2xl mt-2 group-hover:text-primary transition-colors">
                    {other.title}
                  </h3>
                  <p className="font-heading italic text-muted-foreground mt-1">
                    {other.subtitle}
                  </p>
                </div>
                <span className="font-body text-xs tracking-widest uppercase text-primary shrink-0">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <h2 className="font-heading text-3xl md:flex-1">
            Want to work with Karuna on your food habits?
          </h2>
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

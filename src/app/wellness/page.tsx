import type { Metadata } from "next";
import Link from "next/link";
import { getAllWellnessPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "The Mindful Table — Delhi Darling Table",
  description:
    "Karuna Kumar on eating with intention — traditional grains, Indian spices, morning routines, and the food habits that support a healthy, grounded life.",
};

export const revalidate = 60;

const categoryLabels: Record<string, string> = {
  routine: "Daily Routine",
  ingredient: "Ingredients",
  grain: "Back to Basics",
  practice: "Practice",
};

export default async function WellnessPage() {
  const posts = await getAllWellnessPosts();

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          The Mindful Table
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-10">
          Eat with
          <br />
          <em>intention.</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Food is not just what we cook — it is how we live. Karuna writes about
          the habits, ingredients, and traditions that keep the body grounded:
          traditional grains, Indian spices, morning practices, and the everyday
          choices that compound into a healthy life.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* Philosophy strip */}
      <section className="bg-secondary px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Back to basics",
              body: "Ragi, jowar, bajra — the grains that fed India for millennia before the Green Revolution replaced them with rice and wheat. They are not heritage curiosities. They are the defaults we should never have abandoned.",
            },
            {
              title: "Spices as medicine",
              body: "Turmeric with black pepper. Ginger in the morning. Ajwain for digestion. Indian spice combinations are not just flavour — they are functional. Four thousand years of observation encoded in a tadka.",
            },
            {
              title: "Movement and food together",
              body: "Yoga and eating are not separate wellness practices. They are two parts of the same conversation between you and your body. What you eat shapes how you move. How you move shapes what your body needs.",
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
      </section>

      <div className="diamond-separator py-8" />

      {/* Posts */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          From Karuna
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-16">
          Latest writing
        </h2>

        {posts.length === 0 ? (
          <p className="font-body text-sm text-muted-foreground">
            Articles coming soon.
          </p>
        ) : (
          <div className="space-y-px bg-border">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/wellness/${post.slug.current}`}
                className="group bg-background p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-6 hover:bg-secondary transition-colors block"
              >
                <div className="md:w-1/4 shrink-0">
                  <span className="font-body text-xs tracking-widest uppercase text-primary">
                    {categoryLabels[post.category] ?? post.category}
                  </span>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    {post.readTime}
                  </p>
                </div>
                <div className="md:flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-heading italic text-muted-foreground mb-4">
                    {post.subtitle}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <span className="font-body text-xs tracking-widest uppercase text-primary md:self-center shrink-0">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:flex-1">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">
              Food is the foundation.
              <br />
              <em>Build it well.</em>
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              Karuna also works with private clients on food habits, meal planning,
              and building a kitchen practice rooted in traditional Indian nutrition.
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

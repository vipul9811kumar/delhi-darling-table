import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PressEnquiryForm from "@/components/press/PressEnquiryForm";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Karuna Kumar and Delhi Darling Table in the press — featured in Culinary Entrepreneurs' Indian Supper Club Special Edition, Sep–Oct 2026.",
};

const FULL_ISSUE_URL = "https://tinyurl.com/karuna-fae";

const highlights = [
  {
    q: "What inspired you to start Delhi Darling?",
    a: "Having previously owned and operated three successful restaurant concepts, I realized that true hospitality extends far beyond serving good food — it is about crafting an immersive experience. I founded Delhi Darling to help brands, supper clubs and hospitality concepts articulate their visual identity, preserve culinary heritage and structure menus that speak to modern, discerning diners.",
  },
  {
    q: "What were the highlights of your professional journey?",
    a: "Before I launched my own restaurants, most Indian menus in the market were largely standardised. My major achievement was pioneering single-heritage, micro-regional menu architecture, proving that focused regional dining could succeed commercially and setting a new industry benchmark.",
  },
  {
    q: "What led you to start a supper club?",
    a: "Standard restaurant settings can often feel transactional; a supper club allows us to transform a meal into an intentional evening. Guests gather around a single, thoughtfully styled table to connect over shared history, culture, and regional Indian heritage — exploring each dish as a distinct chapter in a larger culinary story.",
  },
  {
    q: "How do you design the menus for each region?",
    a: "Every menu is structured like a narrative arc. I design each course to play with contrasting textures and temperatures — moving from delicate aromatics to deep, slow-cooked reductions and ending with subtle, botanically infused desserts.",
  },
  {
    q: "What opportunities should aspiring food entrepreneurs build on?",
    a: "The global market is moving decisively away from generic, pan-regional dining toward hyper-regional authenticity and narrative-led dining formats. Consumers now seek depth over breadth. Owning a focused, distinct niche builds far stronger brand equity and guest devotion today.",
  },
];

const ctas = [
  {
    eyebrow: "Dine",
    title: "Take a seat at Silsila",
    body: "Our supper club: intimate, ticketed dinners — one region of India per evening, told course by course.",
    href: "/supper-club",
    label: "See upcoming dinners",
  },
  {
    eyebrow: "Consult",
    title: "Build a regional concept",
    body: "Menu architecture, concept design and culinary strategy for restaurants and brands.",
    href: "/contact?intent=consulting",
    label: "Start a consultation",
  },
  {
    eyebrow: "Host",
    title: "Plan a private table",
    body: "Bespoke menus and creative direction for weddings, corporate events and private dinners.",
    href: "/contact?intent=catering",
    label: "Enquire about an event",
  },
];

export default function PressPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Press
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-10">
          In the
          <br />
          <em>press.</em>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Karuna Kumar&apos;s work championing regional Indian food — at the
          supper table and in the restaurants she helps build — as covered by
          the food and hospitality press.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      {/* Featured story */}
      <section className="px-6 max-w-6xl mx-auto py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <a
          href={FULL_ISSUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-5 group block"
          aria-label="Read the full Sep–Oct 2026 issue of Culinary Entrepreneurs (PDF)"
        >
          <div className="aspect-[3/4] relative overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/press/culinary-entrepreneurs-cover.jpg"
              alt="Cover of Culinary Entrepreneurs magazine, Sep–Oct 2026, Indian Supper Club Special Edition"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
          <p className="font-body text-xs text-muted-foreground mt-3">
            Culinary Entrepreneurs · Vol. 6, Issue 4 · Sep–Oct 2026
          </p>
        </a>

        <div className="md:col-span-7">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Featured · Indian Supper Club Special Edition
          </p>
          <h2 className="font-heading text-4xl md:text-5xl leading-[1.1] mb-6">
            Redefining Indian regional food in California
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            <em>Culinary Entrepreneurs</em>, the magazine for food, hospitality
            and tourism entrepreneurs, dedicated its Indian Supper Club Special
            Edition to the cooks reimagining regional Indian suppers for global
            tables. In a four-page interview, editor Anil Mulchandani speaks
            with Karuna about Delhi Darling Table, micro-regional menu
            architecture, and why the future of Indian dining is depth over
            breadth.
          </p>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 border-y border-border py-6 mb-10">
            <div>
              <dt className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Publication
              </dt>
              <dd className="font-body text-sm">Culinary Entrepreneurs (IFEA)</dd>
            </div>
            <div>
              <dt className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Issue
              </dt>
              <dd className="font-body text-sm">Sep–Oct 2026, pp. 30–33</dd>
            </div>
            <div>
              <dt className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Section
              </dt>
              <dd className="font-body text-sm">Global</dd>
            </div>
            <div>
              <dt className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Interview by
              </dt>
              <dd className="font-body text-sm">Anil Mulchandani, Editor</dd>
            </div>
          </dl>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={FULL_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              Read the full issue ↗
            </a>
            <a
              href="#interview"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 border border-border hover:bg-secondary transition-colors text-center"
            >
              Interview highlights
            </a>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-secondary py-20 md:py-28">
        <figure className="px-6 max-w-4xl mx-auto text-center">
          <blockquote className="font-heading text-3xl md:text-5xl leading-[1.2] italic">
            &ldquo;One region, one story, one table at a time.&rdquo;
          </blockquote>
          <figcaption className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Karuna Kumar · Culinary Entrepreneurs
          </figcaption>
        </figure>
      </section>

      {/* Interview highlights */}
      <section
        id="interview"
        className="px-6 max-w-6xl mx-auto py-20 md:py-28 scroll-mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16"
      >
        <div className="md:col-span-5 space-y-6 md:sticky md:top-24 self-start">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
            From the interview
          </p>
          <div className="aspect-[5/6] relative overflow-hidden">
            <Image
              src="/images/press/karuna-feature-portrait.jpg"
              alt="Karuna Kumar seated at a table with regional Indian dishes, as photographed for the feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/press/feature-table-setting.jpg"
                alt="A Delhi Darling Table supper club place setting with roses and candles"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/press/feature-banana-leaf-thali.jpg"
                alt="A regional Indian meal served on a banana leaf"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-12">
          {highlights.map((h) => (
            <div key={h.q}>
              <h3 className="font-heading text-2xl md:text-3xl leading-snug mb-4">
                {h.q}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {h.a}
              </p>
            </div>
          ))}
          <p className="font-body text-xs text-muted-foreground border-t border-border pt-6">
            Excerpts condensed from the original interview.{" "}
            <a
              href={FULL_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Read the full feature in the Sep–Oct 2026 issue ↗
            </a>
          </p>
        </div>
      </section>

      <div className="diamond-separator py-4" />

      {/* Ways to work together */}
      <section className="px-6 max-w-6xl mx-auto py-20 md:py-28">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
          Experience it yourself
        </p>
        <h2 className="font-heading text-4xl md:text-5xl leading-[1.1] max-w-2xl mb-14">
          Read about it — then <em>pull up a chair.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctas.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col border border-border bg-card p-8 hover:border-primary transition-colors"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                {c.eyebrow}
              </p>
              <h3 className="font-heading text-2xl mb-3">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {c.body}
              </p>
              <span className="font-body text-xs tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                {c.label} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="enquire"
        className="bg-secondary py-20 md:py-28 scroll-mt-16"
      >
        <div className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Media & enquiries
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.1] mb-6">
              Working on a story?
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Karuna is available for interviews, podcasts, panels and features
              on regional Indian cuisine, supper clubs and hospitality concept
              design. Photography and background information are available on
              request.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Not press? Use the same form to ask about consulting, a private
              event or a seat at the next Silsila supper club. Karuna replies within
              two business days.
            </p>
          </div>
          <div className="md:col-span-7">
            <PressEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPopUpEvent, getAllPopUpSlugs } from "@/lib/sanity";
import { PopUpBookingSection } from "@/components/pop-up/PopUpBookingSection";

export const revalidate = 60;

const formatLabels: Record<string, string> = {
  "walk-in": "Walk-in — no reservation needed",
  ticketed: "Ticketed — reservation required",
  hybrid: "Walk-in + reserved tables available",
};

export async function generateStaticParams() {
  const slugs = await getAllPopUpSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getPopUpEvent(slug);
  if (!event) return {};
  return {
    title: `${event.title} — Delhi Darling Table`,
    description: event.description,
  };
}

export default async function PopUpEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getPopUpEvent(slug);
  if (!event) notFound();

  const start = new Date(event.startDate);
  const end = event.endDate ? new Date(event.endDate) : null;
  const soldOut = event.status === "sold-out" || event.ticketsRemaining === 0;
  const isTicketed = event.format !== "walk-in";

  const dateLabel = end
    ? `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} – ${end.toLocaleDateString("en-US", { dateStyle: "long" })}`
    : start.toLocaleDateString("en-US", { dateStyle: "long" });

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <Link
          href="/pop-ups"
          className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Pop-Up Restaurants
        </Link>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <div className="md:flex-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              {event.city}&nbsp;·&nbsp;{dateLabel}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] mb-4">
              {event.title}
            </h1>
            {event.tagline && (
              <p className="font-heading italic text-2xl md:text-3xl text-muted-foreground">
                {event.tagline}
              </p>
            )}
          </div>
          <div className="flex gap-4 shrink-0 flex-wrap">
            <div className="border border-border p-4 text-center min-w-[90px]">
              <p className="font-heading text-xl">{event.cuisine}</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Cuisine</p>
            </div>
            {isTicketed && event.ticketPrice && (
              <div className="border border-border p-4 text-center min-w-[90px]">
                <p className="font-heading text-xl">${event.ticketPrice}</p>
                <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Per Ticket</p>
              </div>
            )}
            {!isTicketed && (
              <div className="border border-border p-4 text-center min-w-[90px]">
                <p className="font-heading text-xl">Free</p>
                <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Walk-in</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {event.coverImage?.url && (
        <div className="px-6 max-w-6xl mx-auto">
          <div className="aspect-[21/9] relative overflow-hidden">
            <Image
              src={event.coverImage.url}
              alt={event.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}

      <div className="diamond-separator py-8" />

      {/* Description */}
      <section className="px-6 max-w-6xl mx-auto py-8">
        <div className="max-w-3xl">
          <p className="font-heading text-2xl md:text-3xl leading-relaxed text-muted-foreground">
            {event.description}
          </p>
        </div>
      </section>

      <div className="diamond-separator py-8" />

      {/* Logistics */}
      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Where & When
          </p>
          <div className="space-y-4 font-body text-sm">
            <div className="flex gap-4 border-b border-border pb-4">
              <span className="text-muted-foreground w-24 shrink-0 uppercase tracking-wide text-xs">Venue</span>
              <span>{event.venueName}</span>
            </div>
            <div className="flex gap-4 border-b border-border pb-4">
              <span className="text-muted-foreground w-24 shrink-0 uppercase tracking-wide text-xs">Address</span>
              <span>{event.venueAddress}</span>
            </div>
            <div className="flex gap-4 border-b border-border pb-4">
              <span className="text-muted-foreground w-24 shrink-0 uppercase tracking-wide text-xs">Dates</span>
              <span>{dateLabel}</span>
            </div>
            <div className="flex gap-4 border-b border-border pb-4">
              <span className="text-muted-foreground w-24 shrink-0 uppercase tracking-wide text-xs">Format</span>
              <span>{formatLabels[event.format]}</span>
            </div>
            {event.collaborator && (
              <div className="flex gap-4 border-b border-border pb-4">
                <span className="text-muted-foreground w-24 shrink-0 uppercase tracking-wide text-xs">With</span>
                <span>{event.collaborator}</span>
              </div>
            )}
          </div>
        </div>

        {/* Menu highlights */}
        {event.menu && event.menu.length > 0 && (
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Menu Highlights
            </p>
            <div className="space-y-6">
              {event.menu.map((item) => (
                <div key={item._key} className="border-b border-border pb-6 last:border-0">
                  <h3 className="font-heading text-xl mb-1">{item.dish}</h3>
                  {item.description && (
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Booking section — only for ticketed events */}
      {isTicketed && (
        <section id="book" className="bg-secondary px-6 py-20 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="diamond-separator mb-10" />
            {soldOut ? (
              <div className="text-center">
                <h2 className="font-heading text-4xl mb-4">This event is sold out.</h2>
                <p className="font-body text-sm text-muted-foreground mb-8">
                  Get in touch to be notified about future pop-ups.
                </p>
                <Link
                  href="/contact?intent=consulting"
                  className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
                >
                  Get In Touch
                </Link>
              </div>
            ) : (
              <PopUpBookingSection
                eventId={event._id}
                eventTitle={event.title}
                eventDate={event.startDate}
                ticketPrice={event.ticketPrice ?? 0}
                ticketsRemaining={event.ticketsRemaining ?? 0}
                stripePriceId={event.stripePriceId}
              />
            )}
            <div className="diamond-separator mt-10" />
          </div>
        </section>
      )}

      {/* Walk-in CTA */}
      {!isTicketed && (
        <section className="bg-secondary px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="diamond-separator mb-10" />
            <h2 className="font-heading text-4xl mb-4">Just show up.</h2>
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              No reservation needed — walk in during service hours at {event.venueName}.
            </p>
            <div className="diamond-separator mt-10" />
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <h2 className="font-heading text-3xl md:text-4xl md:flex-1">
            More pop-ups are coming.
          </h2>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/pop-ups"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground transition-colors text-center"
            >
              All Events
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

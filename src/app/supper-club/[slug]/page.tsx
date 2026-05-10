import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupperClubEvent, getAllEventSlugs } from "@/lib/sanity";
import { BookingSection } from "@/components/supper-club/BookingSection";

export const revalidate = 60;

const courseLabels: Record<string, string> = {
  snack: "Welcome Snack",
  starter: "Starter",
  main: "Main",
  sides: "Bread & Sides",
  dessert: "Dessert",
  beverage: "Beverage / Pairing",
};

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getSupperClubEvent(slug);
  if (!event) return {};
  return {
    title: `${event.title} — Delhi Darling Table Supper Club`,
    description: event.description,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getSupperClubEvent(slug);
  if (!event) notFound();

  const date = new Date(event.date);
  const soldOut = event.status === "sold-out" || event.seatsRemaining === 0;

  const courseOrder = ["snack", "starter", "main", "sides", "dessert", "beverage"];
  const groupedMenu = courseOrder
    .map((course) => ({
      course,
      dishes: event.menu?.filter((m) => m.course === course) ?? [],
    }))
    .filter((g) => g.dishes.length > 0);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <Link
          href="/supper-club"
          className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Supper Club
        </Link>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <div className="md:flex-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              {event.location}&nbsp;·&nbsp;
              {date.toLocaleDateString("en-US", { dateStyle: "long" })}
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
              <p className="font-heading text-xl">${event.pricePerPerson}</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Per Person</p>
            </div>
            <div className="border border-border p-4 text-center min-w-[90px]">
              <p className="font-heading text-xl">{event.totalSeats}</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Total Seats</p>
            </div>
            <div className={`border p-4 text-center min-w-[90px] ${soldOut ? "border-destructive" : "border-border"}`}>
              <p className={`font-heading text-xl ${soldOut ? "text-destructive" : ""}`}>
                {soldOut ? "0" : event.seatsRemaining}
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                {soldOut ? "Sold Out" : "Remaining"}
              </p>
            </div>
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

      {/* Menu */}
      {groupedMenu.length > 0 && (
        <section className="px-6 max-w-6xl mx-auto py-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            The Menu
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-16">
            {event.region}
          </h2>
          <div className="divide-y divide-border">
            {groupedMenu.map(({ course, dishes }) => (
              <div key={course} className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                    {courseLabels[course] ?? course}
                  </p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  {dishes.map((item) => (
                    <div key={item._key}>
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
            ))}
          </div>
        </section>
      )}

      {/* What to expect */}
      {event.whatToExpect && (
        <>
          <div className="diamond-separator py-6" />
          <section className="px-6 max-w-6xl mx-auto py-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Good to Know
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {event.whatToExpect}
            </p>
          </section>
        </>
      )}

      {/* Booking section */}
      <section id="book" className="bg-secondary px-6 py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="diamond-separator mb-10" />
          {soldOut ? (
            <div className="text-center">
              <h2 className="font-heading text-4xl mb-4">This event is sold out.</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Join the waitlist to be notified about future dinners.
              </p>
              <Link
                href="/contact?intent=supper-club"
                className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
              >
                Join the Waitlist
              </Link>
            </div>
          ) : (
            <BookingSection
              eventId={event._id}
              eventTitle={event.title}
              eventDate={event.date}
              pricePerPerson={event.pricePerPerson}
              seatsRemaining={event.seatsRemaining}
              stripePriceId={event.stripePriceId}
            />
          )}
          <div className="diamond-separator mt-10" />
        </div>
      </section>

      {/* Back */}
      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <h2 className="font-heading text-3xl md:text-4xl md:flex-1">
            More evenings are being planned.
          </h2>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/supper-club"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground transition-colors text-center"
            >
              All Events
            </Link>
            <Link
              href="/contact?intent=supper-club"
              className="font-body text-sm tracking-widest uppercase px-6 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

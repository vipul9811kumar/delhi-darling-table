import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingPopUps } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Pop-Up Restaurants — Delhi Darling Table",
  description:
    "Fully permitted, publicly open pop-up restaurants by Karuna Kumar. Bay Area and Greater Los Angeles.",
};

const formatLabels: Record<string, string> = {
  "walk-in": "Walk-in",
  ticketed: "Ticketed",
  hybrid: "Walk-in + Reserved",
};

export default async function PopUpsPage() {
  const events = await getUpcomingPopUps();

  return (
    <div className="pt-16">
      <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Pop-Up Restaurants
        </p>
        <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl mb-10">
          Come find us.
          <br />
          <em>We&apos;ll be cooking.</em>
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-lg leading-relaxed">
          Fully permitted, publicly open pop-up restaurants across the Bay Area and
          Greater Los Angeles. No reservation required for walk-in events —
          just show up and eat.
        </p>
      </section>

      <div className="diamond-separator py-4" />

      <section className="px-6 max-w-6xl mx-auto py-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Upcoming
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-12">
          Where to find us
        </h2>

        {events.length === 0 ? (
          <div className="border border-border p-10 text-center">
            <p className="font-heading text-2xl mb-3">Nothing scheduled yet</p>
            <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed mb-8">
              Dates are being planned. Follow along or get in touch if you&apos;d
              like to host a pop-up.
            </p>
            <Link
              href="/contact?intent=consulting"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
            >
              Get In Touch
            </Link>
          </div>
        ) : (
          <div className="space-y-px bg-border">
            {events.map((event) => {
              const start = new Date(event.startDate);
              const end = event.endDate ? new Date(event.endDate) : null;
              const soldOut = event.status === "sold-out" || event.ticketsRemaining === 0;
              const isTicketed = event.format !== "walk-in";

              return (
                <div key={event._id} className="bg-background">
                  <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="shrink-0">
                      <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">
                        {event.city}
                      </p>
                      <p className="font-heading text-3xl">
                        {start.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                        {end && ` – ${end.toLocaleDateString("en-US", { month: end.getMonth() !== start.getMonth() ? "long" : undefined, day: "numeric" })}`}
                      </p>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        {event.venueName}
                      </p>
                      <div className="flex gap-3 mt-4 flex-wrap">
                        <span className="font-body text-xs border border-border px-3 py-1 text-muted-foreground">
                          {formatLabels[event.format]}
                        </span>
                        {isTicketed && event.ticketPrice && (
                          <span className="font-body text-xs border border-border px-3 py-1 text-muted-foreground">
                            ${event.ticketPrice} / ticket
                          </span>
                        )}
                        {isTicketed && (
                          <span className={`font-body text-xs border px-3 py-1 ${soldOut ? "border-destructive text-destructive" : "border-border text-muted-foreground"}`}>
                            {soldOut ? "Sold out" : `${event.ticketsRemaining} left`}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h3 className="font-heading text-2xl md:text-3xl mb-2">{event.title}</h3>
                      {event.tagline && (
                        <p className="font-heading italic text-lg text-muted-foreground mb-4">
                          {event.tagline}
                        </p>
                      )}
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                        {event.description}
                      </p>
                      <div className="flex gap-4 flex-wrap items-center">
                        <Link
                          href={`/pop-ups/${event.slug.current}`}
                          className="font-body text-sm tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
                        >
                          Event details →
                        </Link>
                        {isTicketed && !soldOut && (
                          <Link
                            href={`/pop-ups/${event.slug.current}#book`}
                            className="font-body text-sm tracking-widest uppercase px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                          >
                            Get Tickets
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {event.coverImage?.url && (
                    <div className="aspect-[21/6] relative overflow-hidden">
                      <Image
                        src={event.coverImage.url}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <div className="diamond-separator py-6" />

      <section className="px-6 max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Want to host one?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Bring a pop-up to your venue
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            If you run a space — a wine bar, gallery, event hall, or restaurant
            kitchen — and want to partner on a pop-up, get in touch. Karuna manages
            the culinary side end-to-end; you provide the space and the audience.
          </p>
          <div className="pt-4">
            <Link
              href="/services/pop-up"
              className="font-body text-sm tracking-widest uppercase text-primary hover:opacity-70 transition-opacity mr-8"
            >
              About the service →
            </Link>
            <Link
              href="/contact?intent=consulting"
              className="font-body text-sm tracking-widest uppercase px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-primary-foreground px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <h2 className="font-heading text-3xl md:text-4xl md:flex-1">
            Don&apos;t miss the next one.
          </h2>
          <Link
            href="/contact?intent=supper-club"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center shrink-0"
          >
            Join the Mailing List
          </Link>
        </div>
      </section>
    </div>
  );
}

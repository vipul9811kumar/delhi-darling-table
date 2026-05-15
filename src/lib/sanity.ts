import { createClient } from "next-sanity";
import { PortableTextBlock } from "@portabletext/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export type SanityImageAsset = {
  url: string;
  alt?: string;
  caption?: string;
};

export type SanityWellnessPost = {
  _id: string;
  slug: { current: string };
  title: string;
  subtitle: string;
  category: "routine" | "ingredient" | "grain" | "practice";
  readTime: string;
  excerpt: string;
  coverImage?: SanityImageAsset;
  body: PortableTextBlock[];
};

export async function getAllWellnessPosts(): Promise<SanityWellnessPost[]> {
  return client.fetch(
    `*[_type == "wellnessPost"] | order(_createdAt desc) {
      _id, slug, title, subtitle, category, readTime, excerpt,
      "coverImage": coverImage { "url": asset->url, alt }
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getWellnessPost(slug: string): Promise<SanityWellnessPost | null> {
  return client.fetch(
    `*[_type == "wellnessPost" && slug.current == $slug][0] {
      _id, slug, title, subtitle, category, readTime, excerpt,
      "coverImage": coverImage { "url": asset->url, alt },
      body[] {
        ...,
        _type == "image" => {
          ...,
          "url": asset->url,
          alt,
          caption
        }
      }
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllWellnessSlugs(): Promise<string[]> {
  const results = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "wellnessPost"]{ slug }`,
    {},
    { next: { revalidate: 3600 } }
  );
  return results.map((r) => r.slug.current);
}

// ── Supper Club Events ────────────────────────────────────────────────────────

export type SanityMenuCourse = {
  _key: string;
  course: "snack" | "starter" | "main" | "sides" | "dessert" | "beverage";
  dish: string;
  description?: string;
};

export type SanitySupperClubEvent = {
  _id: string;
  slug: { current: string };
  title: string;
  status: "draft" | "published" | "sold-out" | "past";
  date: string;
  location: string;
  totalSeats: number;
  seatsRemaining: number;
  pricePerPerson: number;
  region: string;
  tagline?: string;
  coverImage?: SanityImageAsset;
  description: string;
  menu: SanityMenuCourse[];
  whatToExpect?: string;
  stripePriceId?: string;
};

const EVENT_FIELDS = `
  _id, slug, title, status, date, location, totalSeats, seatsRemaining,
  pricePerPerson, region, tagline, description, whatToExpect, stripePriceId,
  "coverImage": coverImage { "url": asset->url, alt }
`;

export async function getUpcomingEvents(): Promise<SanitySupperClubEvent[]> {
  return client.fetch(
    `*[_type == "supperClubEvent" && status in ["published", "sold-out"]] | order(date asc) {
      ${EVENT_FIELDS}
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getSupperClubEvent(slug: string): Promise<SanitySupperClubEvent | null> {
  return client.fetch(
    `*[_type == "supperClubEvent" && slug.current == $slug && status in ["published", "sold-out"]][0] {
      ${EVENT_FIELDS},
      menu[] { _key, course, dish, description }
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllEventSlugs(): Promise<string[]> {
  const results = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "supperClubEvent"]{ slug }`,
    {},
    { next: { revalidate: 3600 } }
  );
  return results.map((r) => r.slug.current);
}

// ── Pop-Up Events ─────────────────────────────────────────────────────────────

export type SanityPopUpDish = {
  _key: string;
  dish: string;
  description?: string;
};

export type SanityPopUpEvent = {
  _id: string;
  slug: { current: string };
  title: string;
  status: "draft" | "published" | "sold-out" | "past";
  startDate: string;
  endDate?: string;
  venueName: string;
  venueAddress: string;
  city: string;
  format: "walk-in" | "ticketed" | "hybrid";
  totalTickets?: number;
  ticketsRemaining?: number;
  ticketPrice?: number;
  collaborator?: string;
  cuisine: string;
  tagline?: string;
  coverImage?: SanityImageAsset;
  description: string;
  menu?: SanityPopUpDish[];
  stripePriceId?: string;
};

const POP_UP_FIELDS = `
  _id, slug, title, status, startDate, endDate, venueName, venueAddress,
  city, format, totalTickets, ticketsRemaining, ticketPrice, collaborator,
  cuisine, tagline, description, stripePriceId,
  "coverImage": coverImage { "url": asset->url, alt }
`;

export async function getUpcomingPopUps(): Promise<SanityPopUpEvent[]> {
  return client.fetch(
    `*[_type == "popUpEvent" && status in ["published", "sold-out"]] | order(startDate asc) {
      ${POP_UP_FIELDS}
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getPopUpEvent(slug: string): Promise<SanityPopUpEvent | null> {
  return client.fetch(
    `*[_type == "popUpEvent" && slug.current == $slug && status in ["published", "sold-out"]][0] {
      ${POP_UP_FIELDS},
      menu[] { _key, dish, description }
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllPopUpSlugs(): Promise<string[]> {
  const results = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "popUpEvent"]{ slug }`,
    {},
    { next: { revalidate: 3600 } }
  );
  return results.map((r) => r.slug.current);
}

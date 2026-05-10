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

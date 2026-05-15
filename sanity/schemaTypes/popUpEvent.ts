import { defineField, defineType } from "sanity";

export const popUpEvent = defineType({
  name: "popUpEvent",
  title: "Pop-Up Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      description: 'e.g. "Delhi Darling Table — Hayes Valley Pop-Up"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft (hidden)", value: "draft" },
          { title: "Published (live)", value: "published" },
          { title: "Sold Out", value: "sold-out" },
          { title: "Past", value: "past" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
      description: "Leave blank for single-day events.",
    }),
    defineField({
      name: "venueName",
      title: "Venue Name",
      type: "string",
      description: 'e.g. "The Assembly, Hayes Valley"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "venueAddress",
      title: "Venue Address",
      type: "string",
      description: "Shown publicly — this is a commercial space, not a private home.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      description: 'e.g. "San Francisco" or "Los Angeles"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Walk-in (no reservation needed)", value: "walk-in" },
          { title: "Ticketed (reservation required)", value: "ticketed" },
          { title: "Hybrid (walk-in + reserved tables)", value: "hybrid" },
        ],
        layout: "radio",
      },
      initialValue: "ticketed",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "totalTickets",
      title: "Total Tickets",
      type: "number",
      description: "For ticketed and hybrid formats.",
    }),
    defineField({
      name: "ticketsRemaining",
      title: "Tickets Remaining",
      type: "number",
    }),
    defineField({
      name: "ticketPrice",
      title: "Ticket Price (USD)",
      type: "number",
      description: "For ticketed events. Leave blank for walk-in.",
    }),
    defineField({
      name: "collaborator",
      title: "Collaborating Venue or Brand",
      type: "string",
      description: "Optional — if this is a partnership pop-up.",
    }),
    defineField({
      name: "cuisine",
      title: "Cuisine Focus",
      type: "string",
      description: 'e.g. "Awadhi", "Pan Indian", "Coastal Karnataka"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "menu",
      title: "Menu Highlights",
      type: "array",
      description: "Key dishes — not necessarily a full course-by-course menu.",
      of: [
        {
          type: "object",
          name: "dish",
          fields: [
            defineField({ name: "dish", title: "Dish Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "dish" } },
        },
      ],
    }),
    defineField({
      name: "stripePriceId",
      title: "Stripe Price ID",
      type: "string",
      description: "Filled automatically. Do not edit.",
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "startDate", status: "status" },
    prepare({ title, subtitle, status }) {
      const statusEmoji = status === "published" ? "🟢" : status === "sold-out" ? "🔴" : "⚫";
      return {
        title: `${statusEmoji} ${title}`,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("en-US", { dateStyle: "long" })
          : "",
      };
    },
  },
});

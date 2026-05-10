import { defineField, defineType } from "sanity";

export const supperClubEvent = defineType({
  name: "supperClubEvent",
  title: "Supper Club Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      description: 'e.g. "The Awadhi Table"',
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
      name: "date",
      title: "Event Date & Time",
      type: "datetime",
      options: { dateFormat: "MMMM D, YYYY", timeFormat: "h:mm A" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "San Francisco Bay Area" or "Los Angeles"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Address (sent to guests after booking)",
      type: "string",
      description: "Not shown publicly — only revealed in the confirmation email.",
    }),
    defineField({
      name: "totalSeats",
      title: "Total Seats",
      type: "number",
      initialValue: 12,
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "seatsRemaining",
      title: "Seats Remaining",
      type: "number",
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: "pricePerPerson",
      title: "Price Per Person (USD)",
      type: "number",
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "region",
      title: "Cuisine Region",
      type: "string",
      description: 'e.g. "Lucknawi Awadhi", "Coastal Karnataka", "Bengal"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "One line shown below the title.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "text",
      rows: 4,
      description: "Overview paragraph shown on the event page.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "array",
      of: [
        {
          type: "object",
          name: "course",
          fields: [
            defineField({
              name: "course",
              title: "Course",
              type: "string",
              options: {
                list: [
                  { title: "Welcome Snack", value: "snack" },
                  { title: "Starter", value: "starter" },
                  { title: "Main", value: "main" },
                  { title: "Bread & Sides", value: "sides" },
                  { title: "Dessert", value: "dessert" },
                  { title: "Beverage / Pairing", value: "beverage" },
                ],
              },
            }),
            defineField({ name: "dish", title: "Dish Name", type: "string" }),
            defineField({ name: "description", title: "Dish Description", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "dish", subtitle: "course" },
          },
        },
      ],
    }),
    defineField({
      name: "whatToExpect",
      title: "What to Expect",
      type: "text",
      rows: 3,
      description: "Dietary notes, dress code, what guests should know.",
    }),
    defineField({
      name: "stripeProductId",
      title: "Stripe Product ID",
      type: "string",
      description: "Filled automatically when Stripe product is created. Do not edit.",
      readOnly: true,
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
    select: { title: "title", subtitle: "date", status: "status" },
    prepare({ title, subtitle, status }) {
      const statusEmoji = status === "published" ? "🟢" : status === "sold-out" ? "🔴" : "⚫";
      return {
        title: `${statusEmoji} ${title}`,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString("en-US", { dateStyle: "long" }) : "",
      };
    },
  },
});

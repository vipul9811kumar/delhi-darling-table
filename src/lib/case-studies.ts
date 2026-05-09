export type CaseStudy = {
  slug: string;
  name: string;
  location: string;
  state: string;
  period: string;
  covers: string;
  tagline: string;
  summary: string;
  challenge: { heading: string; body: string };
  approach: { heading: string; body: string };
  result: { heading: string; body: string };
  highlights: { label: string; value: string }[];
  signatures: { dish: string; description: string }[];
  community: string[];
  pullQuote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "delhi-darling",
    name: "Delhi Darling",
    location: "Surf City",
    state: "NC",
    period: "2023 – 2026",
    covers: "60 covers",
    tagline: "Destination Indian dining on the Carolina coast.",
    summary:
      "Delhi Darling brought the full breadth of the Indian subcontinent to Surf City — a seasonal beach town on the Topsail Island coast where Indian cuisine had no precedent. In three years it built a loyal local following, earned strong community recognition, and became a yearly presence at the Wilmington Food Festival.",

    challenge: {
      heading: "Building an Indian destination in a seasonal coastal town",
      body: "Surf City is a beach town — busy in summer, quiet in winter. Food costs on the Carolina coast run high, and the audience for regional Indian cuisine was essentially zero before Delhi Darling opened. The challenge was twofold: building a guest base that would return year-round, and making a regionally ambitious menu work economically in a location where ingredients cost more and footfall was unpredictable.",
    },

    approach: {
      heading: "Root it in the local story, not just the Indian one",
      body: "Karuna's approach was to make Delhi Darling a genuine part of the Surf City community, not an imported concept that happened to be located there. The menu fused Indian technique and spicing with coastal North Carolina ingredients — the kind of thinking behind dishes like the Malabar Surf & Turf, which put Norwegian salmon alongside jumbo shrimp in a coastal Karnataka coconut preparation. The 'Darling Naan Pizza' — naan cooked in the tandoor and finished as a flatbread pizza — became a crossover signature that resonated with guests who were new to Indian food. Alongside the cooking, Karuna built a team of chefs and front-of-house staff who understood the menu deeply enough to narrate it, and the restaurant entered the Wilmington Food Festival circuit to build visibility beyond the immediate tourist corridor.",
    },

    result: {
      heading: "A three-year run, a loyal community, and a reputation that outlasted the lease",
      body: "Delhi Darling ran for three years and closed in 2026. In that time it accumulated strong Google reviews, became a fixture in Wilmington's food community, and participated in the Wilmington Food Festival annually — building a profile far beyond what a 60-cover coastal restaurant would typically reach. The guest base that came in as tourists often returned as regulars. The team Karuna built became the most lasting achievement: chefs and floor staff who left with a genuine command of Pan Indian cuisine.",
    },

    highlights: [
      { label: "Open", value: "2023 – 2026" },
      { label: "Covers", value: "60" },
      { label: "Location", value: "Surf City, NC" },
      { label: "Cuisine", value: "Pan Indian — regional" },
      { label: "Food Festival", value: "Wilmington Food Fest (annual)" },
      { label: "Reception", value: "Strong Google reviews" },
    ],

    signatures: [
      {
        dish: "Darling Naan Pizza",
        description:
          "Tandoor-cooked naan used as a flatbread pizza base — an original concept that became the restaurant's most talked-about crossover dish. Three Prawns Party, Old School Murgh Makhani, Mushroom Do Pyaza.",
      },
      {
        dish: "Malabar Surf & Turf",
        description:
          "Boneless lamb, Norwegian salmon, and jumbo shrimps in a coastal Karnataka mustard-coconut preparation — the dish that told the whole Delhi Darling story in one plate.",
      },
      {
        dish: "Kundapur Ghee Roast Chicken",
        description:
          "Bone-in chicken with Bydagi chilies and curry leaves from the coastal Mangalorian tradition of Kundapur, Karnataka — one of the most regionally specific dishes on any Indian menu in North Carolina.",
      },
      {
        dish: "Biryani Pot Pie",
        description:
          "Fragrant basmati rice with chicken or lamb, caramelised onions, and peanut salan — an Indian-American hybrid that became a weekend staple.",
      },
    ],

    community: [
      "Annual participant — Wilmington Food Festival",
      "Strong Google review base built over three years",
      "Loyal year-round local guest community beyond seasonal tourists",
      "Contributed to the emergence of Indian cuisine in coastal NC dining",
    ],

    pullQuote:
      "We didn't come to Surf City to serve the tourists. We came to become part of the town.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

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

  {
    slug: "tandoori-trail-apex",
    name: "Tandoori Trail",
    location: "Apex",
    state: "NC",
    period: "2023 – 2025",
    covers: "60 covers",
    tagline: "Awadhi heart. Pan Indian soul. Peak City's table.",
    summary:
      "Tandoori Trail Apex was the culmination of years of groundwork — ghost kitchens, farmers markets, and relentless recipe development — arriving finally as a proper brick-and-mortar restaurant in Apex, NC. In two years it built a strong regular following, earned a reputation for the Triangle's most ambitious regional Indian menu, and stood out as one of the few Indian restaurants in the area with a serious, curated wine programme.",

    challenge: {
      heading: "Earning a place in a competitive Triangle market",
      body: "Apex sits in the Raleigh-Durham Triangle — one of the most competitive Indian restaurant markets in the South, with a large and discerning Indian-American population that has high expectations. Slow mid-week days, a demanding lease, and neighbours who were also good made every cover count. The restaurant had to be distinctly better, not just different.",
    },

    approach: {
      heading: "Build from the ground up — literally",
      body: "Tandoori Trail Apex was not a concept that arrived fully formed. It was the natural endpoint of Karuna's progression through ghost kitchens and farmers markets in the Triangle — years of testing dishes, reading the local palate, and refining recipes before a single lease was signed. The menu was built around the slow-cooked traditions of Lucknawi Awadhi cuisine — Kakori Kebab, Lamb Shank Nihari, dum biryanis layered with saffron and kewra — alongside the regional breadth of coastal, royal, and rustic Indian kitchens. What made it stand apart was the wine programme: Karuna developed curated pairings that treated regional Indian food with the same seriousness as any fine-dining menu, introducing a Triangle audience to the idea that a Rajputana Safed Maas and a well-chosen white could be a complete experience. The restaurant became a regular participant in Apex Restaurant Week and Peak City festivals, embedding itself in the local food community.",
    },

    result: {
      heading: "A loyal regular base, a wine programme nobody else was doing, and a two-year run in Peak City",
      body: "In two years Tandoori Trail Apex built exactly the kind of guest base that sustains a restaurant — regulars who came back for specific dishes, who brought friends, and who followed the restaurant's seasonal changes. The wine programme became a genuine point of difference in a market where Indian food and wine pairings were almost entirely absent. Participation in Apex Restaurant Week and Peak City festivals kept the restaurant visible and community-rooted. The restaurant closed in 2025, but the template it proved — that Awadhi-forward regional Indian food could anchor a loyal dining room in a competitive suburban market — is one Karuna brings directly to consulting clients.",
    },

    highlights: [
      { label: "Open", value: "2023 – 2025" },
      { label: "Covers", value: "60" },
      { label: "Location", value: "Apex, NC" },
      { label: "Origin", value: "Ghost kitchen → brick & mortar" },
      { label: "Festival", value: "Apex Restaurant Week" },
      { label: "Wine", value: "Curated pairings programme" },
    ],

    signatures: [
      {
        dish: "Kakori Kebab",
        description:
          "Finely minced lamb skewers from the Lucknawi tradition — named for the town outside Lucknow where the style originated. Served with pickled onions and mint chutney. The clearest statement of the restaurant's Awadhi identity.",
      },
      {
        dish: "Lamb Shank Nihari",
        description:
          "Slow-braised Australian lamb shank in a rich brown onion stew — a dish with roots in the royal kitchens of Delhi and the early-morning street stalls of Old Delhi. A signature of the 'Delhi Darling Specials' section.",
      },
      {
        dish: "Rajputana Safed Maas",
        description:
          "From the royal kitchen of the Mewars of Rajasthan — bone-in goat, cashew, cream, and saffron milk. One of the most historically specific dishes on any Indian menu in the Triangle.",
      },
      {
        dish: "Tandoori Ratan",
        description:
          "The house mix grill: lamb burrah, old fashioned tandoori chicken, gilafi seekh, shikari maas ke sule, and Thai chili prawns. A full introduction to the tandoor programme on one plate.",
      },
    ],

    community: [
      "Annual participant — Apex Restaurant Week",
      "Regular presence at Peak City festivals",
      "Strong repeat regular base across the Triangle",
      "First Indian restaurant in the area to offer curated wine pairings",
      "Karuna's first brick-and-mortar — the end of the ghost kitchen and farmers market years",
    ],

    pullQuote:
      "Every dish on that menu was tested at a farmers market first. By the time we opened, we already knew what Apex wanted.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

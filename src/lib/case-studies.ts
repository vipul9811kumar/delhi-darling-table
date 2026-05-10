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
        dish: "Chingri Malai Curry",
        description:
          "A prestigious Bengali seafood dish — Tiger prawns simmered in a silky coconut milk gravy, spiced with ginger, cinnamon, and cardamom, finished in mustard oil. The name 'malai' is believed by food historians to reference its Malaysian roots, brought to Bengal by Southeast Asian traders, rather than the Hindi word for cream.",
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

  {
    slug: "tandoori-trail-smithfield",
    name: "Tandoori Trail",
    location: "Smithfield",
    state: "NC",
    period: "2023 – 2026",
    covers: "50 covers",
    tagline: "Bringing Indian food to where the burger and sweet tea used to be.",
    summary:
      "Tandoori Trail Smithfield was the hardest market of the three — a small Southern county seat where Indian food was entirely unfamiliar, the lunch crowd was price-sensitive, and hiring staff in a small town was a daily challenge. In three years it not only survived but built genuine loyalty: lunchtime regulars from the Johnston County Courthouse and state offices, packed tables at the Smithfield Downtown Wine Walk, and a crowd at the Ham and Yam Festival that came back year after year.",

    challenge: {
      heading: "Introducing Indian food to a town that runs on burgers and sweet tea",
      body: "Smithfield is Johnston County's seat — a small, very Southern town where the dining culture runs to comfort food, and where the lunch crowd at the Courthouse and state offices has a fixed budget and limited time. There was no existing Indian food audience to build on. Staff were hard to find and harder to retain in a small labour market. And every price point decision had to account for a guest who was genuinely uncertain whether they wanted to try the food at all.",
    },

    approach: {
      heading: "Meet the town where it is, then bring it somewhere new",
      body: "Karuna's approach in Smithfield was deliberate cultural bridge-building. The menu led with formats that Smithfield already understood — wraps, sandwiches, and sizzler platters — but built entirely around Indian flavour. The Tandoori Chicken Sandwich used the same structure as a Southern chicken sandwich but came off the tandoor with yogurt marinade and mint chutney. The sizzler plates — served on a cast-iron hot plate with makhani gravy and buttered vegetables — gave the lunch crowd a familiar interactive experience with unfamiliar spicing. The $15 lunch buffet was calibrated specifically for the Courthouse crowd: fast, familiar enough to return to, and a gentle introduction to the wider menu. Participating in the Smithfield Downtown Wine Walk twice a year brought a different audience — local residents looking for an evening out — and the Ham and Yam Festival, Johnston County's signature annual event, gave the restaurant visibility with the whole county at once.",
    },

    result: {
      heading: "Three years, a Courthouse following, and a town that learned to love Indian food",
      body: "In three years, Tandoori Trail Smithfield made Indian food a normal part of Smithfield's dining week. The Johnston County Courthouse and surrounding state offices became reliable lunchtime regulars — the highest possible validation for a price-sensitive lunch programme. The Smithfield Downtown Wine Walk became one of the restaurant's best evenings twice a year. The Ham and Yam Festival delivered county-wide exposure annually. The restaurant closed in 2026, but the proof it left behind — that Indian food can find a loyal audience in a small Southern town with no prior exposure — is among the most transferable lessons in Karuna's consulting practice.",
    },

    highlights: [
      { label: "Open", value: "2023 – 2026" },
      { label: "Covers", value: "50" },
      { label: "Location", value: "Smithfield, NC" },
      { label: "Market", value: "Johnston County courthouse crowd" },
      { label: "Festival", value: "Ham & Yam + Wine Walk" },
      { label: "Lunch", value: "$15 buffet programme" },
    ],

    signatures: [
      {
        dish: "Tandoori Chicken Sandwich",
        description:
          "Tandoor-roasted chicken, mint chutney, hamburger bun — the restaurant's most effective cultural bridge. Familiar format, completely Indian execution. The dish that converted more first-time guests than anything else on the menu.",
      },
      {
        dish: "Indian Flavoured Sizzlers",
        description:
          "Served on a cast-iron hot plate with herbed rice, makhani gravy, house chutney, and buttered vegetables. The sizzler format gave Smithfield guests a tactile, interactive experience while introducing them to tandoor cooking and Indian spicing.",
      },
      {
        dish: "Chicken Tikka Wrap & Lamb Boti Wrap",
        description:
          "The wraps programme — grilled proteins, mint mayo, bell peppers — became the backbone of the lunch trade. Portable, familiar, and deeply spiced. Hot favourites with the Courthouse crowd.",
      },
      {
        dish: "$15 Everyday Lunch Buffet",
        description:
          "Two appetisers, two entrées, basmati rice, butter naan, raita, papad, chutney, and dessert. Priced and paced for a Johnston County lunch break. The most important decision Karuna made for this location.",
      },
    ],

    community: [
      "Smithfield Downtown Wine Walk — twice-yearly participant, always a full house",
      "Ham and Yam Festival — Johnston County's signature annual event",
      "Regular lunchtime service to Johnston County Courthouse and state offices",
      "First Indian restaurant to build a sustained audience in Smithfield",
      "Three-year run in a market where no Indian restaurant had previously survived",
    ],

    pullQuote:
      "The Courthouse crowd didn't know they wanted Indian food. Three months in, they were ordering by dish name.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export type WellnessPost = {
  slug: string;
  title: string;
  subtitle: string;
  category: "routine" | "ingredient" | "grain" | "practice";
  readTime: string;
  excerpt: string;
  body: Section[];
};

type Section = {
  heading?: string;
  text: string;
};

export const wellnessPosts: WellnessPost[] = [
  {
    slug: "the-morning-routine",
    title: "The Morning Routine",
    subtitle: "How the first two hours of the day shape everything that follows.",
    category: "routine",
    readTime: "4 min read",
    excerpt:
      "I wake up at six. Not because I have to — because the hour before the world gets loud is worth protecting. Here is what those two hours look like, and why I won't trade them.",
    body: [
      {
        text: "I wake up at six. Not because I have to — because the hour before the world gets loud is worth protecting. The morning is when I make decisions about my body before the day makes them for me.",
      },
      {
        heading: "Yoga first. Before anything.",
        text: "I practice with HAB Yoga — an intense session, not a gentle stretch. I'm not interested in movement that feels like a warm-up for something else. Yoga is the thing. It builds heat, clears the mind, and reminds the body what it is capable of before 7am. If you treat it as optional, it becomes optional. I treat it as the anchor.",
      },
      {
        heading: "The ten-ingredient juice",
        text: "After yoga, before solid food: the juice. Ten ingredients every morning — ginger, turmeric, amla, cucumber, spinach, lemon, apple, beetroot, carrot, and a pinch of black pepper. This is not a recipe I stumbled on. It took months to settle on a combination that works — energising without spiking, nourishing without heaviness. The black pepper is not optional. It triggers the absorption of the turmeric's curcumin in a way nothing else does. More on that in another post.",
      },
      {
        heading: "Peeled almonds. Every morning.",
        text: "Eight to ten almonds, soaked overnight and peeled in the morning. The peel contains tannins that inhibit nutrient absorption. Peel them and you change what the almond does for you. This is the kind of detail Ayurveda got right long before nutrition science caught up. Soaked almonds are softer, more digestible, and their vitamin E content becomes more bioavailable once the skin is off. It takes two minutes. It is worth it.",
      },
      {
        heading: "Breakfast — and why it varies",
        text: "I do not eat the same breakfast every day, and I think that rigidity in eating is its own kind of problem. The body responds to variety. Some mornings it is a millet dosa — crisp, light, made with the same fermented batter my kitchen has always used. Some mornings it is eggs, because protein is protein and there is nothing wrong with eggs. On days when I have been travelling or when the body wants something restorative, sometimes it is pho — bone broth and rice noodles, warming and easy to digest. I follow what the body asks for. The principles stay constant. The plate changes.",
      },
      {
        heading: "What this routine is actually about",
        text: "It is not the juice or the almonds or the yoga in isolation. It is the act of showing up for your body before the day begins. When you eat breakfast with intention — when you know why each thing is on the table — you make different choices at lunch and dinner too. The morning is the foundation. Build it deliberately.",
      },
    ],
  },
  {
    slug: "turmeric-and-black-pepper",
    title: "Turmeric and Black Pepper",
    subtitle: "The ancient pairing that science took a while to explain.",
    category: "ingredient",
    readTime: "3 min read",
    excerpt:
      "Most people know turmeric is good for them. Fewer know that without black pepper, a significant portion of its benefit passes straight through you. This is the one thing I tell everyone who asks about Indian spices.",
    body: [
      {
        text: "Most people know turmeric is good for them. It is golden, it is ancient, it has been in Indian cooking and medicine for over four thousand years. Fewer people know that without black pepper, a significant portion of its benefit passes straight through you — unused.",
      },
      {
        heading: "Curcumin and the absorption problem",
        text: "The active compound in turmeric is curcumin. It has remarkable anti-inflammatory and antioxidant properties — studied extensively, validated across hundreds of clinical papers. But curcumin on its own is poorly absorbed by the body. It is what scientists call 'low bioavailability.' You can consume it, but if your body cannot absorb it, you are not getting what turmeric promises.",
      },
      {
        heading: "Enter piperine",
        text: "Black pepper contains a compound called piperine. When curcumin and piperine are consumed together, piperine inhibits certain enzymes in the gut that would otherwise break curcumin down too quickly — and increases its bioavailability by up to 2,000 percent. That is not a typo. Two thousand percent more of the curcumin makes it into your bloodstream when black pepper is present. Indian cooking has combined these two spices for millennia. The science is recent. The practice is not.",
      },
      {
        heading: "What this looks like in practice",
        text: "In my morning juice: a pinch of freshly ground black pepper alongside the turmeric. In dal: a tadka of mustard seeds, dried chili, and cracked black pepper over a turmeric-heavy base. In rice: a knob of ghee, turmeric, and a generous grind of pepper. These are not health food recipes. They are how Indian cooking has always worked — ingredients that complement each other at a molecular level, arrived at through centuries of observation rather than laboratory testing.",
      },
      {
        heading: "A note on fat",
        text: "Curcumin is also fat-soluble, which means it absorbs better in the presence of fat. Ghee, coconut oil, olive oil — all of these help. The classic Indian combination of turmeric cooked in ghee with black pepper is not an accident. It is, from a nutritional standpoint, the optimal delivery mechanism for curcumin. The old ways knew things.",
      },
      {
        heading: "The one change worth making",
        text: "If you take turmeric in any form — in food, in tea, as a supplement — and you are not adding black pepper, you are leaving most of the benefit on the table. Add a pinch. That is the whole message.",
      },
    ],
  },
  {
    slug: "back-to-millets",
    title: "Why I Switched Back to Millets",
    subtitle: "Ragi, jowar, bajra — the grains India forgot and why that was a mistake.",
    category: "grain",
    readTime: "5 min read",
    excerpt:
      "For years, rice and wheat dominated my kitchen the way they dominate everyone's kitchen. Then I went back to the grains my grandmother used — and understood what we lost when we stopped.",
    body: [
      {
        text: "For years, rice and wheat dominated my kitchen the way they dominate everyone's kitchen. They are familiar, they are easy, they are what the supply chain delivers cheaply. Then I went back to the grains my grandmother used — ragi, jowar, bajra, little millet — and I understood what we lost when we stopped.",
      },
      {
        heading: "What millets actually are",
        text: "Millets are not a single grain — they are a family. Ragi (finger millet), jowar (sorghum), bajra (pearl millet), foxtail millet, little millet, kodo millet. They were the dietary staple of India for thousands of years before the Green Revolution of the 1960s shifted agricultural policy and subsidy toward rice and wheat. In the span of two generations, millets went from everyday food to 'heritage grain' — something you find at a health food store rather than your corner kirana.",
      },
      {
        heading: "The nutritional case",
        text: "Ragi has more calcium than almost any other grain — more than milk, gram for gram. It is also gluten-free, high in fibre, and has a low glycaemic index, meaning it releases energy slowly without the blood sugar spike that refined wheat and white rice produce. Jowar is similarly high in fibre and B vitamins, with a protein profile that competes with wheat. Bajra is rich in iron and magnesium. These are not superfoods in the marketing sense — they are everyday foods with extraordinary nutritional density that we traded away for convenience.",
      },
      {
        heading: "What happened to my digestion",
        text: "Within three weeks of making millets a daily part of my eating — ragi porridge in the morning, jowar rotis instead of wheat for dinner — my digestion changed. More regular, less bloated, less of the mid-afternoon heaviness that follows a rice-heavy lunch. I am not a nutritionist and I am not making clinical claims. I am telling you what I noticed. The body responds to fibre and to eating less processed food. Millets deliver both.",
      },
      {
        heading: "How I cook them now",
        text: "Ragi porridge: ragi flour, water, a pinch of salt, cooked slow until thick. Topped with jaggery and a drop of ghee. Five minutes of cooking. Complete nourishment. Jowar roti: identical technique to wheat roti, slightly more water in the dough. Takes one attempt to get right and then becomes effortless. Little millet upma: cook the millet like rice (1:2 ratio), temper with mustard seeds, curry leaves, green chilli and ginger, fold in vegetables. Better than semolina upma in every way — more nutritious, more flavour, easier on the stomach.",
      },
      {
        heading: "The cultural argument",
        text: "Beyond nutrition: these are Indian grains. They grew in Indian soil, shaped Indian bodies, and fed Indian civilisations for millennia. The ragi mudde of Karnataka, the bajra roti of Rajasthan, the jowar bhakri of Maharashtra — these are not rustic alternatives to 'real' food. They are real food. The idea that wheat bread and white rice are the defaults and millets are the alternatives is a colonial distortion that took hold in one generation. Reversing it is not nostalgia. It is correcting a mistake.",
      },
      {
        heading: "Where to start",
        text: "Start with ragi. Make a porridge once. That is the only ask. The texture takes one morning to get used to. The energy it gives you — sustained, without the crash — will tell you everything you need to know.",
      },
    ],
  },
];

export function getWellnessPost(slug: string): WellnessPost | undefined {
  return wellnessPosts.find((p) => p.slug === slug);
}

export const categoryLabels: Record<WellnessPost["category"], string> = {
  routine: "Daily Routine",
  ingredient: "Ingredients",
  grain: "Back to Basics",
  practice: "Practice",
};

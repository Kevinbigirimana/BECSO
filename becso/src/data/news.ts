export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "BECSO Launches: A New Vision for Waste Management in Burundi",
    excerpt:
      "A team of young Burundian innovators has founded BECSO — Bio-Energy and Circular Solutions Organization — with a bold mission: turn Bujumbura's waste crisis into a clean energy and circular economy opportunity.",
    category: "Organization News",
    date: "June 2026",
    image: "/plasticCollection/aboutUs.jpg",
    slug: "becso-launches",
  },
  {
    id: "2",
    title: "Buterere's Waste Crisis: Why Lake Tanganyika Is at Risk",
    excerpt:
      "Buterere generates hundreds of tons of waste weekly. Much of it finds its way into drainage channels that flow directly into Lake Tanganyika — threatening the water source that over 95% of Bujumbura depends on.",
    category: "Environment",
    date: "May 2026",
    image: "/images/garbageDump.jpeg",
    slug: "buterere-waste-crisis",
  },
  {
    id: "3",
    title: "From Charcoal to Biogas: How Clean Energy Changes Everything",
    excerpt:
      "With over 96% of Bujumbura households dependent on charcoal for cooking, the health and environmental toll is enormous. BECSO's biogas model offers a practical, affordable alternative rooted in circular economy principles.",
    category: "Clean Energy",
    date: "April 2026",
    image: "/plasticCollection/plastic.jpg",
    slug: "charcoal-to-biogas",
  },
];

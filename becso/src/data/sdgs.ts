export interface SDG {
  number: number;
  title: string;
  color: string;
  bgColor: string;
  alignment: string;
}

export const sdgs: SDG[] = [
  {
    number: 1,
    title: "No Poverty",
    color: "#E5243B",
    bgColor: "bg-red-100",
    alignment: "Creates green jobs and income for youth and women in Buterere.",
  },
  {
    number: 3,
    title: "Good Health & Well-Being",
    color: "#4C9F38",
    bgColor: "bg-green-100",
    alignment: "Reduces indoor air pollution from charcoal and waste-related health hazards.",
  },
  {
    number: 6,
    title: "Clean Water & Sanitation",
    color: "#26BDE2",
    bgColor: "bg-cyan-100",
    alignment: "Protects Lake Tanganyika from waste pollution through improved waste management.",
  },
  {
    number: 7,
    title: "Affordable Clean Energy",
    color: "#FCC30B",
    bgColor: "bg-yellow-100",
    alignment: "Provides affordable biogas as a clean alternative to charcoal for cooking.",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    color: "#A21942",
    bgColor: "bg-rose-100",
    alignment: "Generates employment in waste collection, biogas operations, and recycling.",
  },
  {
    number: 11,
    title: "Sustainable Cities",
    color: "#FD9D24",
    bgColor: "bg-orange-100",
    alignment: "Improves urban sanitation and waste management in Bujumbura communities.",
  },
  {
    number: 12,
    title: "Responsible Consumption",
    color: "#BF8B2E",
    bgColor: "bg-amber-100",
    alignment: "Promotes circular economy — turning waste into energy, fertilizer, and products.",
  },
  {
    number: 13,
    title: "Climate Action",
    color: "#3F7E44",
    bgColor: "bg-emerald-100",
    alignment: "Reduces deforestation and greenhouse gas emissions from charcoal use.",
  },
  {
    number: 15,
    title: "Life on Land",
    color: "#56C02B",
    bgColor: "bg-lime-100",
    alignment: "Reduces open dumping, protecting land ecosystems and waterways near Lake Tanganyika.",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    color: "#19486A",
    bgColor: "bg-blue-100",
    alignment: "Builds networks with NGOs, government, academic institutions, and international funders.",
  },
];

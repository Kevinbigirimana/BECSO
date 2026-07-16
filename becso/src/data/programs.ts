export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  details: string[];
}

export const programs: Program[] = [
  {
    id: "biogas",
    title: "Clean Biogas Energy",
    description:
      "We collect organic waste from households, markets, and dumping sites in Buterere and feed it into biogas digesters to produce affordable clean cooking energy for local families.",
    icon: "Flame",
    colorClass: "bg-green-50 border-green-200 text-green-800",
    details: [
      "Biogas digester installation & maintenance",
      "Household cooking gas distribution",
      "Reduced charcoal dependence",
      "Lower indoor air pollution",
    ],
  },
  {
    id: "fertilizer",
    title: "Organic Fertilizer",
    description:
      "The digestate from biogas production is processed into high-quality organic manure, distributed to farmers in Bubanza Province to improve soil fertility and crop yields.",
    icon: "Sprout",
    colorClass: "bg-emerald-50 border-emerald-200 text-emerald-800",
    details: [
      "Nutrient-rich organic manure",
      "Support for Bubanza Province farmers",
      "Improved crop yields",
      "Sustainable agriculture promotion",
    ],
  },
  {
    id: "recycling",
    title: "Plastic Recycling",
    description:
      "Collected plastic waste is melted using biogas energy and reshaped into valuable products including floor tiles, ceiling tiles, flower pots, and household accessories.",
    icon: "Recycle",
    colorClass: "bg-blue-50 border-blue-200 text-blue-800",
    details: [
      "Plastic → floor & ceiling tiles",
      "Household tools & accessories",
      "Powered by biogas energy",
      "Zero-waste circular model",
    ],
  },
  {
    id: "education",
    title: "Community Education",
    description:
      "We run awareness campaigns and training sessions on waste sorting, environmental protection, and health impacts of pollution, targeting households and schools in Buterere.",
    icon: "GraduationCap",
    colorClass: "bg-amber-50 border-amber-200 text-amber-800",
    details: [
      "Waste sorting training",
      "Environmental health awareness",
      "School & community outreach",
      "Behavior change campaigns",
    ],
  },
  {
    id: "jobs",
    title: "Green Jobs & Skills",
    description:
      "BECSO creates employment and skills development opportunities for local youth in waste collection, recycling operations, biogas management, and product sales.",
    icon: "Users",
    colorClass: "bg-purple-50 border-purple-200 text-purple-800",
    details: [
      "Youth employment in operations",
      "Technical skills training",
      "Entrepreneurship support",
      "Women-focused programs",
    ],
  },
];

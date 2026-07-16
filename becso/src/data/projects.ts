export interface Project {
  id: string;
  title: string;
  description: string;
  status: "Planned" | "In Progress" | "Completed";
  location: string;
  timeline: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "buterere-biogas-pilot",
    title: "Buterere Biogas Pilot Plant",
    description:
      "Installation of a small-scale biogas digester in Buterere to process community organic waste into clean cooking gas for 50+ pilot households. The first step toward energy independence for Bujumbura's most waste-affected neighborhoods.",
    status: "Planned",
    location: "Buterere, Bujumbura",
    timeline: "Oct – Dec 2026",
    image: "/plasticCollection/puttingPlasticInBin.jpg",
    tags: ["Biogas", "Clean Energy", "Pilot"],
  },
  {
    id: "plastic-recycling-workshop",
    title: "Plastic Recycling Workshop",
    description:
      "Setting up a community plastic processing workshop where collected plastic waste is sorted, shredded, melted with biogas heat, and reshaped into construction materials and household products for local sale.",
    status: "Planned",
    location: "Buterere, Bujumbura",
    timeline: "Nov 2026 – Jan 2027",
    image: "/plasticCollection/PlasticCollection.jpg",
    tags: ["Recycling", "Circular Economy", "Green Jobs"],
  },
  {
    id: "bubanza-fertilizer-program",
    title: "Bubanza Organic Fertilizer Program",
    description:
      "Distribution of BECSO-produced organic manure to smallholder farmers in Bubanza Province, partnering with agricultural cooperatives to improve soil health, crop yields, and farmer livelihoods.",
    status: "Planned",
    location: "Bubanza Province",
    timeline: "Dec 2026 – Feb 2027",
    image: "/plasticCollection/groupYoungPeopleAfterCollectingPlastic.jpg",
    tags: ["Agriculture", "Fertilizer", "Bubanza"],
  },
];

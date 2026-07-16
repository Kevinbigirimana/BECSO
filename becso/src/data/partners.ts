export interface Partner {
  name: string;
  description: string;
  type: "current" | "target";
}

export const partners: Partner[] = [
  // Target funding & implementation partners
  {
    name: "PAEJ",
    description: "Programme d'Appui à l'Emploi des Jeunes — Youth employment support program.",
    type: "target",
  },
  {
    name: "BBIN",
    description: "Burundi Business Incubation Network — Supporting entrepreneurial ventures in Burundi.",
    type: "target",
  },
  {
    name: "UNDP Burundi",
    description: "United Nations Development Programme — Supporting sustainable development and resilience.",
    type: "target",
  },
  {
    name: "YALI",
    description: "Young African Leaders Initiative — Empowering African youth leaders and entrepreneurs.",
    type: "target",
  },
  {
    name: "Tony Elumelu Foundation",
    description: "Pan-African philanthropy catalyzing entrepreneurship across Africa.",
    type: "target",
  },
  {
    name: "ENABEL Burundi",
    description: "Belgian Development Agency — Supporting sustainable development in Burundi.",
    type: "target",
  },
  {
    name: "ACVE Burundi",
    description: "Supporting community development and environmental protection in Burundi.",
    type: "target",
  },
  {
    name: "Youth for Green Burundi (Y4GB)",
    description: "Youth-led environmental movement driving green action across Burundi.",
    type: "target",
  },
];

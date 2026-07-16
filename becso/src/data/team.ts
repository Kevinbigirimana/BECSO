export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Etienne Nininahazwe",
    role: "CEO & Founder",
    bio: "Visionary leader driving BECSO's mission to transform Burundi's waste challenges into sustainable circular economy opportunities.",
    image: "/Team1/Etienne Nininahazwe_CEO.jpg",
  },
  {
    name: "Marie Aubaine Mbabazi",
    role: "Community Engagement Lead",
    bio: "Passionate about empowering communities in Buterere through environmental education and inclusive participation in waste management.",
    image: "/Team1/Marie Aubaine Mbabazi.jpg",
  },
  {
    name: "Tony Emerson Ndabisabimana",
    role: "Technical Operations Lead",
    bio: "Oversees biogas system design and plastic recycling operations, ensuring safe and efficient production of clean energy and recycled goods.",
    image: "/Team1/Tony Emerson Ndabisabimana.jpg",
  },
  {
    name: "Yalled Irakoze",
    role: "Programs & Partnerships",
    bio: "Coordinates programs, builds strategic partnerships, and connects BECSO with NGOs, academic institutions, and funding bodies.",
    image: "/Team1/Yalled Irakoze.png",
  },
];

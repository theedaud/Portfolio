import type { Service, DecorativeCard } from "./types";

export const services: Service[] = [
  {
    title: "Research & Strategy",
    items: [
      "UX Research",
      "User Journeys · Sitemaps",
      "Product Strategy",
      "Design Critique",
    ],
  },
  {
    title: "Design & Prototyping",
    items: [
      "End-to-End Product Experience",
      "Interface Design",
      "Design Systems",
      "Design Management",
    ],
  },
  {
    title: "Conversion Optimization",
    items: [
      "Usability Testing",
      "A/B Testing",
      "Page Speed Optimization",
      "Product Redesign",
    ],
  },
];

export const decorativeCards: DecorativeCard[] = [
  { rotate: "-3deg", left: "60px", top: "15px", delay: 0, zIndex: 1 },
  { rotate: "1deg", left: "290px", top: "0px", delay: 0.1, zIndex: 2 },
  { rotate: "4deg", left: "520px", top: "20px", delay: 0.2, zIndex: 1 },
];

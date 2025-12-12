export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  theme: "light" | "dark";
  categoryColor?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fitcy-health",
    title: "Fitcy Health",
    category: "Healthcare",
    description:
      "Designed the UI and UX for Fitcy Health, delivering the complete mobile app, web platform, and responsive website.",
    imageUrl:
      "https://placehold.co/1600x900/f5f5f7/0f172a?text=Fitcy+Health+Case+Study",
    theme: "light",
    categoryColor: "#134E48",
  },
  {
    slug: "savelifeai",
    title: "SaveLifeAI",
    category: "Healthcare",
    description:
      "An AI-powered emergency response system that connects patients with critical care resources in real-time.",
    imageUrl:
      "https://placehold.co/1600x900/1e293b/ffffff?text=SaveLifeAI+Case+Study",
    theme: "dark",
  },
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

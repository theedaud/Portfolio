export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  content?: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "fitcy-health": {
    title: "Fitcy Health",
    category: "Healthcare",
    description:
      "Designed the UI and UX for Fitcy Health, delivering the complete mobile app, web platform, and responsive website.",
    imageUrl:
      "https://placehold.co/1600x900/f5f5f7/0f172a?text=Fitcy+Health+Case+Study",
  },
  savelifeai: {
    title: "SaveLifeAI",
    category: "Healthcare",
    description:
      "An AI-powered emergency response system that connects patients with critical care resources in real-time.",
    imageUrl:
      "https://placehold.co/1600x900/1e293b/ffffff?text=SaveLifeAI+Case+Study",
  },
};


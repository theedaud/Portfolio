export interface ChallengeCard {
  bg: string;
  accent: string;
  text: string;
  content: string;
}

export interface CaseStudyDetail {
  headerImage?: string;
  coverImage?: string;
  responsibilities?: string;
  timeline?: string;
  contributors?: string[];
  aboutTitle?: string;
  aboutDescription?: string;
  challenges?: ChallengeCard[];
  sections?: {
    title: string;
    description: string;
    images: string[];
  }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  theme: "light" | "dark";
  categoryColor?: string;
  detail?: CaseStudyDetail;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fitcy-health",
    title: "Fitcy Health",
    category: "Healthcare",
    description:
      "Designed the UI and UX for Fitcy Health, delivering the complete mobile app, web platform, and responsive website.",
    imageUrl:
      "https://placehold.co/1600x900/f5f5f7/0f172a.png?text=Fitcy+Health+Case+Study",
    theme: "light",
    categoryColor: "#134E48",
    detail: {
      headerImage: "/assets/fitcy_Header_Image.jpg",
      coverImage: "/assets/coverScreenshot.png",
      responsibilities: "Research, Strategy & Design",
      timeline: "≈ 4 months",
      contributors: ["Ahmed (me)", "Mahham (Product Manager)"],
      aboutTitle: "About Fitcy Health?",
      aboutDescription:
        "Fitcy bridges the gap between people seeking mental health support and therapists who understand their culture, speak their language, and align with their needs.",
      challenges: [
        {
          bg: "#E6F1F0",
          accent: "#01655C",
          text: "#007569",
          content: "Difficulty Finding the Right Therapist",
        },
        {
          bg: "#F3E0FF",
          accent: "#854ea8",
          text: "#490079",
          content: "Lack of Personalization & Cultural Sensitivity",
        },
        {
          bg: "#FFEBD0",
          accent: "#ad8349",
          text: "#814A00",
          content: "Managing Appointments & Follow-Ups",
        },
        {
          bg: "#C9F0FF",
          accent: "#4689a3",
          text: "#005271",
          content: "Communication with Therapist at any point",
        },
      ],
      sections: [
        {
          title: "Therapist Matching",
          description:
            "The manual therapist matching system through a care team member on whatsApp and session management wasn't that user friendly on website",
          images: [
            "https://placehold.co/800x600/f5f5f7/0f172a.png?text=Therapist+Matching+1",
            "https://placehold.co/800x600/f5f5f7/0f172a.png?text=Therapist+Matching+2",
            "https://placehold.co/800x600/f5f5f7/0f172a.png?text=Therapist+Matching+3",
          ],
        },
      ],
    },
  },
  {
    slug: "savelifeai",
    title: "SaveLifeAI",
    category: "Healthcare",
    description:
      "An AI-powered emergency response system that connects patients with critical care resources in real-time.",
    imageUrl:
      "https://placehold.co/1600x900/1e293b/ffffff.png?text=SaveLifeAI+Case+Study",
    theme: "dark",
  },
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

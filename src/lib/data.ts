export interface ChallengeCard {
  bg: string;
  accent: string;
  text: string;
  content: string;
  folded?: string;
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
          bg: "#E1F0EF",
          accent: "#01655C",
          text: "#4A8B86",
          content: "Difficulty Finding the Right Therapist",
          folded: "#CADEDE",
        },
        {
          bg: "#F2E1F2",
          accent: "#854ea8",
          text: "#8B4A8B",
          content: "Lack of Personalization & Cultural Sensitivity",
          folded: "#E0CDE0",
        },
        {
          bg: "#F7EFDB",
          accent: "#ad8349",
          text: "#A67C3B",
          content: "Managing Appointments & Follow-Ups",
          folded: "#E5DCCD",
        },
        {
          bg: "#E0F2F7",
          accent: "#4689a3",
          text: "#3B8BA6",
          content: "Communication with Therapist at any point",
          folded: "#CEE0E5",
        },
      ],
      sections: [
        {
          title: "Therapist Matching",
          description:
            "The manual therapist matching system through a care team member on whatsApp and session management wasn't that user friendly on website",
          images: [
            "/assets/therapist-matching-1.jpg",
            "/assets/therapist-matching-2.jpg",
            "/assets/therapist-matching-3.jpg",
            "/assets/therapist-matching-4.jpg",
            "/assets/therapist-matching-5.jpg",
            "/assets/therapist-matching-6.jpg",
            "/assets/therapist-matching-7.jpg",
            "/assets/therapist-matching-8.jpg",
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

// Services data
export interface Service {
  title: string;
  items: string[];
}

export interface DecorativeCard {
  rotate: string;
  left: string;
  top: string;
  delay: number;
}

export const services: Service[] = [
  {
    title: "Research & Strategy",
    items: [
      "UX Research",
      "User Journeys ⋅ Sitemaps",
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
  { rotate: "-1.83deg", left: "-4px", top: "-11px", delay: 0 },
  { rotate: "1.5deg", left: "291px", top: "15px", delay: 0.1 },
  { rotate: "-1.83deg", left: "600px", top: "-5px", delay: 0.2 },
];

// Case study data
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
        {
          title: "Session Management",
          description:
            "Users struggled with scheduling, rescheduling, and tracking their therapy sessions. The lack of a centralized session management system made it difficult to view upcoming appointments, access session history, and manage cancellations effectively.",
          images: [
            "/assets/session-management-3.jpg",
            "/assets/session-management-1.jpg",
            "/assets/session-management-2.jpg",
            "/assets/session-management-4.jpg",
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

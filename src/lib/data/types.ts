// Type definitions for data structures

export interface Service {
  title: string;
  items: string[];
}

export interface DecorativeCard {
  rotate: string;
  left: string;
  top: string;
  delay: number;
  zIndex: number;
}

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

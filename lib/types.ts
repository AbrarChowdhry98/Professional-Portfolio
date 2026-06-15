import { HeadingLevel } from "@/lib/utils/Headings";

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectCaseStudy = {
  problem: string;
  role: string;
  outcomes: string[];
};

export type LighthouseScores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export type LighthouseSnapshot = {
  label: string;
  title?: string;
  url?: string;
  image: string;
  scores: LighthouseScores;
};

export type PerformanceComparison = {
  heading?: string;
  summary: string;
  before: LighthouseSnapshot;
  after: LighthouseSnapshot;
};

export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  keywords?: string[];
  link?: string;
  rank?: number;
  featured?: boolean;
  gallery?: ProjectGalleryItem[];
  features?: ProjectFeature[];
  gallerySubtext?: string;
  caseStudy?: ProjectCaseStudy;
  performanceComparison?: PerformanceComparison;
  spotlight?: {
    heading: string;
    text: string;
  };
  highlights?: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  imageMode?: "default" | "app";
};

export type SocialLinkItem = {
  id: string;
  title: string;
  link: string;
  iconName: string;
};

export type BannerContent = {
  title: string;
  subHeading: string;
  subHeadingLevel: HeadingLevel;
  navText: string;
};

export type ContactInformationContent = {
  title: string;
  subHeading: string;
  socialLinks: SocialLinkItem[];
};

export type ExperienceRole = {
  title: string;
  period: string;
  duration: string;
  highlights: string[];
};

export type ExperienceItem = {
  id: string;
  company: string;
  location?: string;
  workType?: string;
  featured?: boolean;
  roles: ExperienceRole[];
};

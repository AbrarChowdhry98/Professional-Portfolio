import { HeadingLevel } from "@/lib/utils/Headings";

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
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
  gallery?: ProjectGalleryItem[];
  features?: ProjectFeature[];
  gallerySubtext?: string;
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

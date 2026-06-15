import {
  BannerContent,
  ContactInformationContent,
  ExperienceItem,
  ProjectItem,
  SocialLinkItem,
} from "./types";
import { HeadingLevel } from "./utils/Headings";

const banner: BannerContent = {
  title: "Abrar Chowdhry — Product & Digital Leader",
  subHeading:
    "Retail Marketing Specialist at JELD-WEN Canada, working toward an Associate Product Line Manager role while leading digital product initiatives — from native iOS sales and customer apps to the Canada web platform.",
  subHeadingLevel: 4 as HeadingLevel,
  navText:
    "I bridge product strategy, cross-functional delivery, and hands-on execution — defining what gets built, prioritizing with stakeholders, and measuring impact across retail channels, mobile apps, and enterprise web platforms.",
};

const socialLinks: SocialLinkItem[] = [
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/abrar-chowdhry/",
    iconName: "linkedin",
  },
  {
    id: "github",
    title: "GitHub",
    link: "https://github.com/AbrarChowdhry98",
    iconName: "github",
  },
  {
    id: "email",
    title: "Email",
    link: "abrarchowdhry98@gmail.com",
    iconName: "email",
  },
  {
    id: "jeldwen",
    title: "JELD-WEN App",
    link: "https://apps.apple.com/ca/app/jeld-wen-of-canada/id6778148094",
    iconName: "appstore",
  },
];

const contact: ContactInformationContent = {
  title: "Let's connect on *product*.",
  subHeading:
    "Open to conversations about product management, digital strategy, and the work behind JELD-WEN's apps and web platform. Reach out via LinkedIn or GitHub.",
  socialLinks,
};

const projects: ProjectItem[] = [
  {
    id: "jwoc-sales-hub",
    slug: "jwoc-sales-hub",
    title: "JW Sales Hub",
    description:
      "Field sales reps needed a single mobile experience for quoting, product education, and lead capture — not a patchwork of PDFs, email attachments, and disconnected tools.\n\nI defined requirements and prioritized releases for a native iOS sales hub — quoting, digital business cards, trade show lead capture, VR demos, and offline product resources — partnering with sales leadership and engineering on what shipped first.",
    caseStudy: {
      problem:
        "JELD-WEN Canada field reps lacked one trusted mobile tool for quoting, networking, and product demos — slowing conversations at dealers and trade shows.",
      role:
        "Product owner for feature prioritization, requirements, and release planning across sales, marketing, and engineering stakeholders.",
      outcomes: [
        "Shipped interior door quoting, digital business cards, event lead capture, and VR demos in a single app",
        "Unified product specs, configurators, literature, and an AI chatbot for reps in the field",
        "Delivered Firebase-authenticated, offline-first access for company users on the App Store",
      ],
    },
    image: "/projects/jw-sales-hub/home.png",
    imageMode: "app",
    keywords: [
      "SwiftUI",
      "iOS",
      "Swift",
      "Firebase",
      "MVVM",
      "Offline-first",
      "VR",
    ],
    link: "https://apps.apple.com/ca/app/jw-sales-hub/id6777043303",
    rank: 1,
    gallerySubtext:
      "Quoting, networking, lead capture, and VR demos — plus the product tools reps need in the field.",
    spotlight: {
      heading: "Built for the Field",
      text: "Prioritized and shipped the capabilities reps asked for first — quoting on site, instant business card sharing, trade show lead capture, and VR demos — then layered in specs, configurators, literature, and chatbot support in one offline-ready hub.",
    },
    highlights: {
      primary: { value: "Firebase", label: "Authentication" },
      secondary: { value: "Offline-first", label: "Field-ready" },
    },
    features: [
      {
        title: "Interior Door Quoting",
        description:
          "Quote interior doors on the go with model selection, specs, and key product details built in.",
      },
      {
        title: "Digital Business Card",
        description:
          "Share a personal business card instantly by email, text, or AirDrop from the app.",
      },
      {
        title: "Event Lead Capture",
        description:
          "Submit contacts from trade shows and events through a dedicated lead capture form.",
      },
      {
        title: "VR Experiences",
        description:
          "Immersive virtual reality demos that let reps showcase windows and doors in the field.",
      },
      {
        title: "Sales Resources",
        description:
          "Access product literature, release notes, configurators, and an AI chatbot in one hub.",
      },
    ],
    gallery: [
      {
        src: "/projects/jw-sales-hub/splash.png",
        caption: "Launch",
      },
      {
        src: "/projects/jw-sales-hub/home.png",
        caption: "Home & Quick Tools",
      },
      {
        src: "/projects/jw-sales-hub/products.png",
        caption: "Product Catalog",
      },
      {
        src: "/projects/jw-sales-hub/jwc7500.png",
        caption: "Product Detail",
      },
      {
        src: "/projects/jw-sales-hub/jwc8500.png",
        caption: "Window Configurator",
      },
      {
        src: "/projects/jw-sales-hub/doors.png",
        caption: "Interior Door Quoting",
      },
      {
        src: "/projects/jw-sales-hub/resources.png",
        caption: "Resources",
      },
      {
        src: "/projects/jw-sales-hub/chatbot.png",
        caption: "Chatbot",
      },
      {
        src: "/projects/jw-sales-hub/settings.png",
        caption: "Business Card & Profile",
      },
    ],
  },
  {
    id: "windows-and-doors",
    slug: "windows-and-doors",
    title: "JELD-WEN of Canada",
    description:
      "Homeowners and dealers needed a simpler way to explore windows and doors, compare options, and find support — without navigating a fragmented web experience on mobile.\n\nI shaped the product direction for a customer-facing iOS app with bilingual discovery, configurators, offline resources, and self-serve support — balancing homeowner and dealer needs across the Canadian market.",
    caseStudy: {
      problem:
        "Customers and dealers struggled to explore JELD-WEN's product catalog and support resources on mobile — creating friction in discovery and dealer lookup.",
      role:
        "Defined feature scope and user journeys for a public-facing app — prioritizing configurators, bilingual support, and self-serve tools with marketing and sales input.",
      outcomes: [
        "Launched bilingual (English/French) product discovery with configurators and 360° spin views",
        "Added offline media downloads, warranty resources, and an intent-based chatbot for common questions",
        "Connected dealer locator and project inspiration tools in one App Store presence",
      ],
    },
    image: "/projects/jeld-wen-of-canada/home.png",
    imageMode: "app",
    keywords: ["SwiftUI", "iOS", "Localization", "PDFKit", "AVKit", "Chatbot"],
    link: "https://apps.apple.com/ca/app/jeld-wen-of-canada/id6778148094",
    rank: 2,
    gallerySubtext:
      "Product discovery, configurators, resources, and support — designed for homeowners and dealers across Canada.",
    spotlight: {
      heading: "Designed for Customers",
      text: "Scoped and delivered a customer app around real discovery journeys — bilingual browsing, configurators, offline resources, dealer lookup, and self-serve support — so homeowners and dealers could explore JELD-WEN products without friction on mobile.",
    },
    highlights: {
      primary: { value: "English / French", label: "Localization" },
      secondary: { value: "SwiftUI", label: "Native iOS" },
    },
    features: [
      {
        title: "Product Catalog",
        description:
          "Browse windows and interior doors with rich imagery, specs, and model variants.",
      },
      {
        title: "Visual Configurator",
        description:
          "Customize grille designs, colours, and interior/exterior views in real time.",
      },
      {
        title: "Resources Hub",
        description:
          "Quick Quote release notes, warranty guides, and installation documentation.",
      },
      {
        title: "AI Chatbot",
        description:
          "Intent-based assistant for product questions, warranties, and dealer lookup.",
      },
    ],
    gallery: [
      {
        src: "/projects/jeld-wen-of-canada/splash.png",
        caption: "Launch",
      },
      {
        src: "/projects/jeld-wen-of-canada/home.png",
        caption: "Home & Quick Tools",
      },
      {
        src: "/projects/jeld-wen-of-canada/products.png",
        caption: "Product Catalog",
      },
      {
        src: "/projects/jeld-wen-of-canada/jwc7500.png",
        caption: "Product Detail",
      },
      {
        src: "/projects/jeld-wen-of-canada/jwc8500.png",
        caption: "Window Configurator",
      },
      {
        src: "/projects/jeld-wen-of-canada/doors.png",
        caption: "Interior Doors",
      },
      {
        src: "/projects/jeld-wen-of-canada/resources.png",
        caption: "Resources",
      },
      {
        src: "/projects/jeld-wen-of-canada/chatbot.png",
        caption: "Chatbot",
      },
      {
        src: "/projects/jeld-wen-of-canada/settings.png",
        caption: "Settings",
      },
    ],
  },
  {
    id: "jeld-wen-website",
    slug: "jeld-wen-website",
    title: "JELD-WEN Canada Website",
    description:
      "The Canadian digital presence needed a faster, more maintainable platform that could scale product content, dealer tools, and marketing pages without slowing down the team.\n\nI prioritized platform upgrades and high-traffic experience improvements on Sitecore XM Cloud with a Next.js front end — balancing performance, merchandising needs, and long-term maintainability with IT and marketing stakeholders.",
    caseStudy: {
      problem:
        "Legacy templates and stack constraints limited page speed, content agility, and the team's ability to ship improvements across product, dealer, and marketing journeys.",
      role:
        "Led product and technical direction for the public website — scoping stack migration work, performance priorities, and interactive tools with cross-functional partners.",
      outcomes: [
        "Migrated to a headless Sitecore XM Cloud + Next.js architecture with GraphQL-driven content",
        "Improved front-end performance across key templates and high-traffic user flows",
        "Shipped product listings, dealer locator, document libraries, multisite config, and an integrated chatbot",
      ],
    },
    image: "/projects/jeld-wen-website/homepage.png",
    keywords: ["Next.js", "React", "TypeScript", "Sitecore", "GraphQL", "SCSS"],
    link: "https://www.jeld-wen.ca/en-ca/",
    rank: 3,
    highlights: {
      primary: { value: "Sitecore XM Cloud", label: "CMS Platform" },
      secondary: { value: "Next.js", label: "Front End" },
    },
    features: [
      {
        title: "Performance Optimization",
        description:
          "Prioritized and delivered front-end performance gains across key templates and high-traffic journeys.",
      },
      {
        title: "Interactive Tools",
        description:
          "Built and integrated digital tools including a chatbot to support product discovery and customer questions.",
      },
      {
        title: "Headless Platform",
        description:
          "Next.js front end on Sitecore XM Cloud with GraphQL-driven content and multisite configuration.",
      },
      {
        title: "Product & Dealer Experiences",
        description:
          "Product and store listings, dealer locator maps, blogs, and document libraries for the Canadian market.",
      },
    ],
  },
  {
    id: "home-depot-canada-channel",
    slug: "home-depot-canada-channel",
    title: "Home Depot Canada Channel",
    description:
      "Owned JELD-WEN's retail and e-commerce presence on Home Depot Canada — scaling the digital catalog, onboarding new product lines, and maintaining merchandising across online and in-store channels.\n\nLed launches for flagship products including JWC8500 Windows, JWC7500 Windows, Tri-Pane Patio Doors, and Easy In Interior Doors while growing active SKU coverage from roughly 500 to 2,000+ over two years.",
    image: "/projects/home-depot-canada-channel.png",
    keywords: [
      "E-Commerce",
      "Retail Channel",
      "Product Onboarding",
      "Merchandising",
      "SKU Management",
    ],
    link: "https://www.homedepot.ca/",
    rank: 4,
    featured: true,
    highlights: {
      primary: { value: "2,000+", label: "SKUs Live" },
      secondary: { value: "20% YOY", label: "Online Sales Growth" },
    },
    caseStudy: {
      problem:
        "JELD-WEN's Home Depot Canada assortment was under-represented online and in retail, limiting discoverability for key window and door lines at Canada's largest home improvement retailer.",
      role:
        "Owned channel strategy, product onboarding, and catalog maintenance — coordinating with merchandising, marketing, and retail partners to prioritize launches and keep product data accurate across channels.",
      outcomes: [
        "Grew live SKU coverage from ~500 to 2,000+ over two years",
        "Launched flagship lines including JWC8500 Windows, JWC7500 Windows, Tri-Pane Patio Doors, and Easy In Interior Doors",
        "Contributed to 20% year-over-year growth in online sales through expanded assortment and improved channel execution",
      ],
    },
    features: [
      {
        title: "Product Onboarding",
        description:
          "End-to-end launch process for new SKUs — product data, imagery, specifications, and retail-ready merchandising assets.",
      },
      {
        title: "Catalog Maintenance",
        description:
          "Ongoing updates to pricing, availability, product copy, and digital shelf content across the online channel.",
      },
      {
        title: "Flagship Launches",
        description:
          "Coordinated go-to-market for priority window and door lines including JWC8500, JWC7500, Tri-Pane Patio Doors, and Easy In Interior Doors.",
      },
      {
        title: "Cross-Channel Merchandising",
        description:
          "Aligned e-commerce listings with in-store retail presence so customers could discover JELD-WEN products consistently.",
      },
    ],
  },
  {
    id: "budget-tracker",
    slug: "budget-tracker",
    title: "Budget Tracker",
    description:
      "A personal finance application for tracking income, expenses, and budget categories over time.\n\nBuilt with JavaScript and browser storage for a lightweight, client-side budgeting experience.",
    image: "/projects/Abrar-Budget-Tracker.png",
    keywords: ["JavaScript", "HTML", "CSS", "Local Storage"],
    link: "https://github.com/AbrarChowdhry98/Abrar-Budget-Tracker",
    rank: 5,
    featured: false,
  },
  {
    id: "note-taker",
    slug: "note-taker",
    title: "Note Taker",
    description:
      "A note-taking web app with create, save, and delete functionality backed by a REST API.\n\nDemonstrates full-stack CRUD patterns with Express and a lightweight front-end interface.",
    image: "/projects/abrar-note-Taker.png",
    keywords: ["Express", "Node.js", "REST", "JavaScript"],
    link: "https://github.com/AbrarChowdhry98/abrar-note-Taker",
    rank: 6,
    featured: false,
  },
  {
    id: "weather-dashboard",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and a five-day forecast for searched cities.\n\nIntegrates with the OpenWeather API and persists recent searches in local storage.",
    image: "/projects/Abrars-Weather-Dashboard.png",
    keywords: ["JavaScript", "OpenWeather API", "Bootstrap", "HTML"],
    link: "https://github.com/AbrarChowdhry98/Abrars-Weather-Dashboard",
    rank: 7,
    featured: false,
  },
  {
    id: "code-quiz",
    slug: "code-quiz",
    title: "Code Quiz",
    description:
      "A timed JavaScript fundamentals quiz with multiple-choice questions and a high-score tracker.\n\nBuilt with vanilla JavaScript, HTML, and CSS for an interactive learning experience.",
    image: "/projects/Code-Quiz.png",
    keywords: ["JavaScript", "HTML", "CSS", "Quiz"],
    link: "https://github.com/AbrarChowdhry98/Code-Quiz",
    rank: 8,
    featured: false,
  },
  {
    id: "password-generator",
    slug: "password-generator",
    title: "Password Generator",
    description:
      "A secure password generator with configurable length and character sets.\n\nGenerates strong passwords client-side with copy-to-clipboard support.",
    image: "/projects/A-C-Password-Generator.png",
    keywords: ["JavaScript", "HTML", "CSS", "Security"],
    link: "https://github.com/AbrarChowdhry98/A-C-Password-Generator",
    rank: 9,
    featured: false,
  },
  {
    id: "team-profile-generator",
    slug: "team-profile-generator",
    title: "Team Profile Generator",
    description:
      "A Node.js CLI tool that generates HTML team profile pages from employee data collected via prompts.\n\nUses Inquirer for input and template literals for dynamic HTML generation.",
    image: "/projects/abrar-team-profile-generator.png",
    keywords: ["Node.js", "Inquirer", "HTML", "CLI"],
    link: "https://github.com/AbrarChowdhry98/abrar-team-profile-generator",
    rank: 10,
    featured: false,
  },
  {
    id: "code-refactor",
    slug: "code-refactor",
    title: "Code Refactor",
    description:
      "A semantic HTML and CSS refactor of a marketing landing page focused on accessibility, SEO, and maintainable selectors.\n\nConsolidated styles, fixed broken links, and improved document structure for search engines.",
    image: "/projects/Code-Refactor.png",
    keywords: ["HTML", "CSS", "SEO", "Accessibility"],
    link: "https://github.com/AbrarChowdhry98/Code-Refactor",
    rank: 11,
    featured: false,
  },
  {
    id: "readme-generator",
    slug: "readme-generator",
    title: "Professional Readme Generator",
    description:
      "A Node.js CLI that generates polished GitHub README files from developer profile prompts.\n\nCollects project details, license, and contact info to produce markdown documentation automatically.",
    image: "/projects/Professional-Readme-Generator.png",
    keywords: ["Node.js", "Inquirer", "Markdown", "CLI"],
    link: "https://github.com/AbrarChowdhry98/Professional-Readme-Generator",
    rank: 12,
    featured: false,
  },
];

const experience: ExperienceItem[] = [
  {
    id: "jeld-wen",
    company: "JELD-WEN of Canada",
    location: "Mississauga, Ontario · Hybrid",
    workType: "Permanent Full-time",
    featured: true,
    roles: [
      {
        title: "Retail Marketing Specialist",
        period: "Jan 2024 - Present",
        duration: "2 yrs 6 mos",
        highlights: [
          "Own digital product direction across two native iOS apps and the Canada website — prioritizing roadmaps, requirements, and releases with sales, IT, merchandising, and retail stakeholders.",
          "Led Home Depot Canada channel growth: onboarded 2,000+ SKUs (from ~500) over two years, launching flagship lines including JWC8500 Windows, JWC7500 Windows, Tri-Pane Patio Doors, and Easy In Interior Doors — contributing to 20% year-over-year online sales growth.",
          "Defined feature scope and success criteria for field sales tools (quoting, lead capture, VR demos) and customer-facing discovery experiences (configurators, bilingual support, chatbot).",
          "Drove platform performance and maintainability — leading Sitecore XM Cloud / Next.js stack upgrades, CI/CD improvements, and front-end optimization across high-traffic journeys.",
          "Created and managed digital content and marketing assets in Adobe Illustrator and Photoshop for web, in-store, and retail partner channels.",
        ],
      },
    ],
  },
  {
    id: "4s-consulting",
    company: "4S Consulting Services Inc.",
    location: "Markham, Ontario · Hybrid",
    workType: "Permanent Full-time",
    roles: [
      {
        title: "Marketing And Business Development Coordinator",
        period: "Apr 2023 - Jan 2024",
        duration: "10 mos",
        highlights: [
          "Developed and qualified leads through generation campaigns to drive new sales opportunities.",
          "Analyzed campaign results, conversion rates, and online traffic to improve future marketing strategy.",
          "Supported content development and channel planning across web, social, and traditional marketing.",
        ],
      },
    ],
  },
  {
    id: "burlington-economic-development",
    company: "Burlington Economic Development",
    location: "Burlington, Ontario",
    workType: "Contract Full-time",
    roles: [
      {
        title: "Marketing And Business Development Coordinator",
        period: "Feb 2022 - Mar 2023",
        duration: "1 yr 2 mos",
        highlights: [
          "Assessed client business models and marketing strategies; connected businesses to programs and targeted recommendations.",
          "Implemented My Main Street Accelerator programming locally, including contribution applications and local business recruitment.",
        ],
      },
      {
        title: "Digital Service Squad Team Member",
        period: "Sep 2020 - Feb 2022",
        duration: "1 yr 6 mos",
        highlights: [
          "Delivered one-on-one digital transformation consulting to locally owned businesses — websites, social media, e-commerce, and operational technology.",
          "Supported digital literacy assessments, training programs, and hands-on guidance for growing local business presence.",
        ],
      },
    ],
  },
  {
    id: "caiden-media",
    company: "Caiden Media",
    location: "Toronto, Ontario",
    workType: "Internship",
    roles: [
      {
        title: "Digital Marketing Intern",
        period: "Jul 2020 - Sep 2020",
        duration: "3 mos",
        highlights: [
          "Created social content for Facebook, Twitter, and Instagram while supporting client digital dashboards.",
          "Monitored SEO and campaign performance using Moz and related analytics tooling.",
        ],
      },
    ],
  },
  {
    id: "boathouse",
    company: "Boathouse / Blackwell Supply Company",
    location: "St. Catharines, Ontario",
    workType: "Internship",
    roles: [
      {
        title: "Student Consultant — Strategic Management",
        period: "Jan 2020 - Apr 2020",
        duration: "4 mos",
        highlights: [
          "Collaborated on communication, marketing, and acquisition strategies aligned with the client's organizational goals.",
        ],
      },
    ],
  },
];

export async function getBanner(): Promise<BannerContent> {
  return banner;
}

export async function getProfilePictureUrl(): Promise<string> {
  return "/profile/abrar-chowdhry.jpg";
}

export async function getContactInformation(): Promise<ContactInformationContent> {
  return contact;
}

export async function getExperience(): Promise<ExperienceItem[]> {
  return experience;
}

export async function getProjects(): Promise<ProjectItem[]> {
  return [...projects].sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0));
}

export async function getFlagshipProjects(): Promise<ProjectItem[]> {
  const sorted = await getProjects();
  return sorted.filter((project) => project.featured !== false);
}

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectItem | null> {
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getProjectSlugs(): Promise<string[]> {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(
  allProjects: ProjectItem[],
  slug: string,
): { prev: ProjectItem | null; next: ProjectItem | null } {
  const index = allProjects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? allProjects[index - 1] : null,
    next: index < allProjects.length - 1 ? allProjects[index + 1] : null,
  };
}

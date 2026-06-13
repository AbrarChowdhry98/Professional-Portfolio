import {
  BannerContent,
  ContactInformationContent,
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
    "I bridge marketing strategy, product thinking, and hands-on delivery — defining what gets built, why it matters, and how it reaches sales teams and customers. This portfolio showcases the work behind that path.",
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
      "A native iOS app for JELD-WEN Canada sales representatives — built to support reps in the field with quoting, networking, lead generation, and immersive product demos.\n\nStandout features include an interior door quoting tool, a digital business card shareable by email, text, or AirDrop, an event lead capture form for trade shows, and VR experiences for showcasing products in the field. The app also bundles product specs, literature, Quick Quote release notes, configurators, and an interactive chatbot — with Firebase authentication and offline support for company users.",
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
      text: "Standout features include an interior door quoting tool, a digital business card shareable by email, text, or AirDrop, an event lead capture form for trade shows, and VR experiences for showcasing products on site. The app also bundles product specs, literature, Quick Quote release notes, configurators, and an interactive chatbot — with Firebase authentication and offline support for company users.",
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
      "A customer-facing iOS app for JELD-WEN Canada that puts product discovery, literature, and support tools in one polished mobile experience.\n\nFeatures include bilingual support (English/French), product configurators, 360° spin views, Quick Quote release notes, an intent-based chatbot, offline media downloads, and in-app access to dealer locator and customer project tools.",
    image: "/projects/jeld-wen-of-canada/home.png",
    imageMode: "app",
    keywords: ["SwiftUI", "iOS", "Localization", "PDFKit", "AVKit", "Chatbot"],
    link: "https://apps.apple.com/ca/app/jeld-wen-of-canada/id6778148094",
    rank: 2,
    gallerySubtext:
      "Product discovery, configurators, resources, and support — designed for homeowners and dealers across Canada.",
    spotlight: {
      heading: "Designed for Customers",
      text: "Built for homeowners, dealers, and anyone exploring JELD-WEN windows and doors in Canada — with bilingual support, product configurators, offline media, an AI chatbot for common questions, and tools to find a dealer or browse project inspiration.",
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
      "Enterprise marketing and commerce platform for JELD-WEN Canada, built on Sitecore XM Cloud with a Next.js front end.\n\nWork spans product and store listings, blog and document libraries, gallery and video listings, dealer locator maps, multisite configuration, CI/CD pipelines, performance improvements, and interactive tools like a chatbot — plus ongoing front-end enhancements across the Canadian digital presence.",
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
          "Improved front-end performance and page speed across key templates and high-traffic user flows.",
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
    id: "social-network-api",
    slug: "social-network-api",
    title: "Social Network API",
    description:
      "A RESTful backend API for a social networking application with user authentication, friend connections, and activity feeds.\n\nBuilt during full-stack certification work using Node.js, Express, MongoDB, and JWT-based auth patterns.",
    image: "/projects/Social-Network-API.png",
    keywords: ["Node.js", "Express", "MongoDB", "REST", "JWT", "API"],
    link: "https://github.com/AbrarChowdhry98/Social-Network-API",
    rank: 4,
  },
  {
    id: "abrar-store",
    slug: "abrar-store",
    title: "Abrar's Store",
    description:
      "An e-commerce web application with product browsing, cart management, and checkout flows.\n\nDemonstrates MERN-stack patterns for inventory display, client-side routing, and API integration.",
    image: "/projects/Abrar-s-Store.jpg",
    keywords: ["React", "Node.js", "MongoDB", "Express", "E-commerce"],
    link: "https://github.com/AbrarChowdhry98/Abrar-s-Store",
    rank: 5,
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
    rank: 6,
  },
  {
    id: "employee-tracker",
    slug: "employee-tracker",
    title: "Employee Tracker",
    description:
      "A command-line and web-based tool for managing employee records, departments, and roles.\n\nUses Node.js with MySQL for relational data storage and Inquirer for interactive CLI prompts.",
    image: "/projects/Abrar-Employee-Tracker.png",
    keywords: ["Node.js", "MySQL", "Inquirer", "CLI"],
    link: "https://github.com/AbrarChowdhry98/Abrar-Employee-Tracker",
    rank: 7,
  },
  {
    id: "book-lookup",
    slug: "book-lookup",
    title: "Book Lookup",
    description:
      "A book search application that queries the Google Books API to find titles, authors, and descriptions.\n\nUsers can save books to a personal reading list with persistent storage.",
    image: "/projects/Book-Lookup.png",
    keywords: ["React", "Google Books API", "Node.js", "Express"],
    link: "https://github.com/AbrarChowdhry98/Book-Lookup",
    rank: 8,
  },
  {
    id: "react-portfolio",
    slug: "react-portfolio",
    title: "React Portfolio",
    description:
      "An earlier React-based portfolio site showcasing projects, skills, and contact information.\n\nBuilt as part of the University of Toronto full-stack web development certificate.",
    image: "/projects/abrar-react-portfolio.png",
    keywords: ["React", "JavaScript", "CSS", "Portfolio"],
    link: "https://github.com/AbrarChowdhry98/abrar-react-portfolio",
    rank: 9,
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
    rank: 10,
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
    rank: 11,
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
    rank: 12,
  },
  {
    id: "work-day-scheduler",
    slug: "work-day-scheduler",
    title: "Work Day Scheduler",
    description:
      "An hourly planner for a standard work day with color-coded time blocks and persistent event storage.\n\nUses jQuery, Day.js, and local storage for a simple scheduling interface.",
    image: "/projects/Work-day-scheduler.png",
    keywords: ["jQuery", "Day.js", "HTML", "CSS"],
    link: "https://github.com/AbrarChowdhry98/Work-day-scheduler",
    rank: 13,
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
    rank: 14,
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
    rank: 15,
  },
  {
    id: "tech-blog",
    slug: "tech-blog",
    title: "Tech Blog",
    description:
      "A CMS-style tech blog built with Node.js and Handlebars templating.\n\nSupports creating, editing, and deleting posts with a MySQL database backend.",
    image: "/projects/Abrar-Tech-Blog.png",
    keywords: ["Node.js", "Express", "MySQL", "Handlebars"],
    link: "https://github.com/AbrarChowdhry98/Abrar-Tech-Blog",
    rank: 16,
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
    rank: 17,
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
    rank: 18,
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

export async function getProjects(): Promise<ProjectItem[]> {
  return [...projects].sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0));
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

# Abrar Chowdhry — Professional Portfolio

Personal portfolio site for **Abrar Chowdhry**, Product & Digital Leader at JELD-WEN Canada. Built with Next.js and TypeScript, it showcases product-led digital work — from native iOS sales and customer apps to the Canadian web platform — alongside earlier full-stack projects.

Design direction inspired by [portfolio-v2](https://github.com/iqtedar123/portfolio-v2), customized for a product and marketing leadership narrative.

---

## Highlights

- **Dark, editorial layout** with responsive project cards and detail pages
- **Rich app project pages** with screenshot galleries, capability cards, and tailored spotlight copy
- **Enterprise web showcase** for the JELD-WEN Canada Sitecore XM Cloud + Next.js platform
- **Local content layer** — no external CMS required; all copy and project data live in the repo
- **Static-friendly** — App Router pages with ISR (`revalidate: 3600`) for fast loads and easy deployment

---

## Featured Work

| Project | Type | Description |
| --- | --- | --- |
| [JW Sales Hub](https://apps.apple.com/ca/app/jw-sales-hub/id6777043303) | Native iOS | Sales rep app with interior door quoting, digital business cards, event lead capture, VR demos, and field-ready offline support |
| [JELD-WEN of Canada](https://apps.apple.com/ca/app/jeld-wen-of-canada/id6778148094) | Native iOS | Customer-facing app for product discovery, configurators, resources, bilingual support, and AI chatbot |
| [JELD-WEN Canada Website](https://www.jeld-wen.ca/en-ca/) | Web Platform | Enterprise marketing site on Sitecore XM Cloud with a Next.js front end, GraphQL content, and performance-focused delivery |

Additional projects from full-stack certification work (Node.js, React, MongoDB, and more) are included in the portfolio grid.

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Emotion](https://emotion.sh/) |
| Icons | MUI Icons, Font Awesome |
| Content | Local data module (`lib/contentful.ts`) |
| Deployment | Vercel, Firebase Hosting, or any Next.js-compatible host |

---

## Project Structure

```text
app/
  page.tsx                 # Home — intro, stats, projects, expertise, contact
  contact/page.tsx         # Contact page
  project/[slug]/page.tsx  # Dynamic project detail pages
components/
  ProjectPageView.tsx      # Project detail layout (app vs. web variants)
  AppScreenshotGallery.tsx # "Inside the App" screenshot grid
  Projects.tsx             # Home page project masonry grid
lib/
  contentful.ts            # Banner, projects, social links, contact content
  types.ts                 # Shared TypeScript types
public/
  profile/                 # Profile image
  projects/                # Project thumbnails and app screenshots
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Customizing Content

All portfolio content is edited in **`lib/contentful.ts`** (local data — not connected to Contentful CMS):

| Content | What to edit |
| --- | --- |
| Hero / intro copy | `banner` object |
| Projects | `projects` array — title, description, keywords, links, images |
| App screenshots | `gallery` array on app projects |
| Feature cards | `features` array per project |
| Spotlight section | `spotlight.heading` and `spotlight.text` |
| Stat highlights | `highlights.primary` and `highlights.secondary` |
| Social links | `socialLinks` in contact config |
| Contact section | `contact` object |

### Adding a new project

1. Add images under `public/projects/`
2. Append a new entry to the `projects` array in `lib/contentful.ts`
3. Set a unique `slug` — the page will be available at `/project/[slug]`
4. For iOS/app projects, set `imageMode: "app"` and provide a `gallery` array

### App project fields

App projects support optional structured content:

```ts
{
  imageMode: "app",
  gallery: [{ src: "/projects/...", caption: "Home" }],
  gallerySubtext: "Short gallery intro copy",
  features: [{ title: "...", description: "..." }],
  spotlight: { heading: "...", text: "..." },
  highlights: {
    primary: { value: "SwiftUI", label: "Native iOS" },
    secondary: { value: "English / French", label: "Localization" },
  },
}
```

---

## Deployment

This is a standard Next.js app and deploys cleanly to:

- **[Vercel](https://vercel.com/)** — recommended; zero-config for Next.js
- **Firebase Hosting** — with Next.js SSR adapter
- **Any Node host** — run `npm run build && npm run start`

Ensure `public/` assets are included in the deployment. No environment variables are required for the current local-content setup.

---

## About

**Abrar Chowdhry** is a Retail Marketing Specialist at JELD-WEN Canada, working toward an Associate Product Line Manager role while leading digital product initiatives across mobile and web.

- [LinkedIn](https://www.linkedin.com/in/abrar-chowdhry/)
- [GitHub](https://github.com/AbrarChowdhry98)
- [Email](mailto:abrarchowdhry98@gmail.com)

---

## License

This repository is for personal portfolio use. Project screenshots and JELD-WEN-related assets are proprietary to their respective owners.

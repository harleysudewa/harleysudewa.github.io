# Christopher Harley Sudewa — Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
```

The static site is generated in the `out/` directory.

## Deployment (GitHub Pages)

This project is configured for automatic deployment to GitHub Pages.

### Setup

1. Push this repository to GitHub as `<your-username>.github.io`
2. Go to **Settings → Pages** in your GitHub repository
3. Under **Build and deployment**, select **GitHub Actions** as the source
4. Push to the `main` branch — the site will deploy automatically

### Configuration

- **`next.config.ts`**: Controls `basePath` and static export settings
  - For `username.github.io` repos: keep `basePath: ""`
  - For project repos (`github.com/user/repo`): set `basePath: "/repo"`

## Customization

### Content

All website content is centralized in [`src/data/content.ts`](src/data/content.ts). Edit this file to update:

- Personal information and links
- About section text and skills
- Work experience
- Projects
- Education
- Contact information

### Portrait Image

Replace the placeholder in the Hero section:

1. Add your portrait image to `public/images/portrait.jpg`
2. In `src/components/Hero.tsx`, uncomment the `<Image>` tag and remove the placeholder div

### Project Screenshots

Add project screenshots to `public/images/`:
- `project-01.png`
- `project-02.png`
- `project-03.png`
- `project-04.png`
- `project-05.png`

### Links

Update the placeholder URLs in `src/data/content.ts`:

```typescript
links: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "mailto:your@email.com",
},
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Navigation.tsx   # Fixed header with smooth scroll
│   ├── Hero.tsx         # Hero section with intro
│   ├── About.tsx        # Background and skills
│   ├── Experience.tsx   # Work history timeline
│   ├── Projects.tsx     # Project showcase
│   ├── Education.tsx    # Academic background
│   ├── Contact.tsx      # Contact links
│   ├── Footer.tsx       # Site footer
│   ├── SectionHeader.tsx # Reusable section header
│   └── TechTag.tsx      # Technology tag component
└── data/
    └── content.ts       # All website content
```

## License

© Christopher Harley Sudewa. All rights reserved.

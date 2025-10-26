# Secret Roleplay - Unified Police Department

A modern Next.js website for the Secret Roleplay Unified Police Department (SR-UPD), showcasing divisions, leadership, rules, and recruitment information.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Lenis** - Smooth scrolling library
- **Remix Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── chief/               # Chief profile page
│   ├── departments/         # Department pages (CID, HSPU, etc.)
│   ├── officer-portal/      # Officer portal (under development)
│   ├── layout.tsx           # Root layout with fonts and providers
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── home/               # Home page sections
│   ├── Navigation.tsx      # Top navigation with menu
│   ├── Footer.tsx          # Site footer
│   ├── LoadingScreen.tsx   # Initial loading animation
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scrolling
│   └── ScrollAnimations.tsx      # GSAP scroll animations
└── types/                   # TypeScript type definitions
```

## Key Features

### Design System

The site uses a custom "Linear" color palette inspired by Linear.app:

- **Black tones**: `#000000`, `#0A0A0A`, `#111111`
- **Gray tones**: `#171717`, `#1F1F1F`, `#262626`
- **Accent**: `#5C67DE` (purple)
- **Blue**: `#3B82F6` (for officer portal)

### Animations

- **Smooth Scrolling**: Lenis provides buttery-smooth scrolling
- **Scroll Triggers**: GSAP animates elements as they enter viewport
- **Subtle Effects**: 10px Y translation with fade-in (0.4s duration)
- **Card Hovers**: 1px lift on hover
- **Loading Screen**: Animated progress bar (1.5s)

### Navigation

- Fixed top navigation with blur backdrop
- Full-screen overlay menu
- Smooth scroll to sections
- Auto-close menu on navigation

### Password-Protected Pages

Some division pages (CID, IA) include client-side password protection (for roleplay purposes, not security).

## Development Notes

### Adding New Pages

Create a new directory in `src/app/` with a `page.tsx` file:

```tsx
// src/app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>
}
```

### Adding New Components

Create components in `src/components/` and import where needed:

```tsx
// src/components/NewComponent.tsx
export function NewComponent() {
  return <div>Component</div>
}
```

### Styling

- Use Tailwind utility classes for styling
- Custom CSS goes in `globals.css`
- Linear color palette: `bg-linear-dark`, `text-linear-accent`, etc.
- Responsive: Use `md:` prefix for desktop breakpoints

### Images

Images are configured in `next.config.js` to allow remote patterns from:
- i.ibb.co
- placehold.co
- via.placeholder.com
- wallpaperaccess.com

Use Next.js `<Image>` component for optimization:

```tsx
import Image from 'next/image'

<Image
  src="https://i.ibb.co/..."
  alt="Description"
  width={600}
  height={400}
/>
```

## Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration (colors, fonts, spacing)
- `next.config.js` - Next.js configuration (image domains)
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS plugins

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

Serve the `.next` directory with a Node.js server.

## Migration Notes

This project was migrated from a static HTML/CSS/JS site to Next.js while preserving:
- Exact same UI/UX and visual design
- All animations and interactions (GSAP, Lenis)
- Linear.app-inspired design system
- Component structure and naming

## License

© 2025 Secret Roleplay - UPD. All rights reserved.

This website is for the "Secret" Roleplay Server police department. Any references or similarities to real police authorities are purely coincidental.

---

**Template by**: FourTwentyDevs - CLB Designs 💖

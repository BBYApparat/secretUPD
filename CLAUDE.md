# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 website for the Secret Roleplay Unified Police Department (SR-UPD), a roleplay gaming community's police department. The site showcases the department's divisions, leadership team, rules, and recruitment information.

**Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, GSAP, Lenis

**Primary Language**: Greek (with some English elements)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

### Directory Layout

```
src/
├── app/                           # Next.js App Router
│   ├── about/page.tsx            # About page (history, mission)
│   ├── chief/page.tsx            # Chief of Police profile
│   ├── aschief/page.tsx          # Assistant Chief profile
│   ├── sheriff/page.tsx          # Sheriff profile
│   ├── departments/              # Division pages
│   │   ├── cid/page.tsx         # Criminal Investigation Division
│   │   ├── hspu/page.tsx        # High Speed Pursuit Unit
│   │   ├── rt/page.tsx          # Recruitment & Training
│   │   ├── saf/page.tsx         # Social Affairs
│   │   └── ia/page.tsx          # Internal Affairs (hidden)
│   ├── officer-portal/page.tsx   # Officer login (under development)
│   ├── layout.tsx                # Root layout (fonts, providers)
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                    # React components
│   ├── home/                     # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── RulesSection.tsx
│   │   └── JoinSection.tsx
│   ├── Navigation.tsx            # Top nav with hamburger menu
│   ├── Footer.tsx                # Site footer with hidden IA link
│   ├── LoadingScreen.tsx         # Initial loading animation
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scrolling
│   └── ScrollAnimations.tsx      # GSAP scroll animations
```

### Configuration Files

- `tailwind.config.ts` - Tailwind CSS config (Linear color palette, fonts)
- `next.config.js` - Next.js config (remote image patterns)
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS with Tailwind and Autoprefixer
- `package.json` - Dependencies and scripts

## Design System

### Color Palette (Linear-inspired)

The site uses a custom "linear" color palette defined in `tailwind.config.ts`:

```typescript
linear: {
  black: '#000000',        // Pure black backgrounds
  darker: '#0A0A0A',       // Slightly lighter black
  dark: '#111111',         // Card backgrounds
  gray: '#171717',         // Hover states
  'gray-light': '#1F1F1F',
  'gray-lighter': '#262626',
  white: '#FFFFFF',
  accent: '#5C67DE',       // Primary purple accent
  'accent-light': '#7C85E8', // Lighter purple for hover
  blue: '#3B82F6',         // Officer portal accent
  'blue-light': '#60A5FA',
}
```

Division-specific colors:
- **CID**: Dark red (`#8B0000`) with gold badges (`#FFD700`)
- Use these via Tailwind: `bg-linear-dark`, `text-linear-accent`, etc.

### Typography

- **Primary Font**: Inter (loaded via `next/font/google` in layout.tsx)
- **Monospace**: Orbitron (for officer portal, special pages)
- Font variables: `--font-inter`, `--font-orbitron`
- Apply via: `font-inter`, `font-orbitron`

### Animation Philosophy

The site uses **subtle, clean animations**:

- **Scroll Animations**: GSAP ScrollTrigger with 10px Y translation + fade-in
- **Duration**: 0.4s for most animations, 0.6s for hero text
- **Easing**: `cubic-bezier(0.2, 0, 0, 1)` for custom CSS, `power1.out` for GSAP
- **Smooth Scrolling**: Lenis with 0.8s duration
- **Card Hovers**: 1px `translateY` lift
- **Loading Screen**: 1.5s animated progress bar, then fade out

### Key CSS Classes

- `.clean-card` - Standard card with hover lift effect
- `.feature-card` - Division feature card
- `.hero-bg` - Hero section with background image + gradient overlay
- `.clean-text` - Animated heading text
- `.typing-text` - Animated paragraph text
- `[data-scroll]` - Elements that animate on scroll
- `[data-nav]` - Navigation element
- `[data-menu-overlay]` - Full-screen menu overlay

## Core Architecture

### Smooth Scrolling (Lenis)

Implemented in `SmoothScrollProvider.tsx`:
- Wraps entire app in layout.tsx
- Initializes Lenis with custom easing
- Handles anchor link clicks for smooth scroll to sections
- Updates ScrollTrigger on scroll
- Auto-cleanup on unmount

### Scroll Animations (GSAP)

Implemented in `ScrollAnimations.tsx`:
- Imported in each page that needs scroll animations
- Animates elements with `[data-scroll]` attribute
- Animates `.clean-text` and `.typing-text` classes
- Section children get staggered animation (0.1s delay)
- Triggers at 85% viewport height
- Auto-cleanup of ScrollTrigger instances

### Navigation System

`Navigation.tsx`:
- Fixed position with blur backdrop (`backdrop-filter`)
- Hamburger menu that toggles full-screen overlay
- Smooth scroll to anchor sections
- Scrolled state adds stronger blur at 50px scroll
- Auto-close menu on link click
- Prevents body scroll when menu open

### Loading Screen

`LoadingScreen.tsx`:
- Client component with useState/useEffect
- Shows for 1.5s on initial page load
- Animated progress bar with infinite loop
- Fades out via CSS animation
- Removed from DOM after fade

### Footer

`Footer.tsx`:
- Hidden Internal Affairs link (appears on footer hover)
- Disclaimer text (roleplay vs. real police)
- Template credit link

## Common Development Tasks

### Adding a New Page

1. Create `src/app/new-page/page.tsx`:

```tsx
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'

export const metadata = {
  title: 'Page Title - SR UPD',
  description: 'Page description',
}

export default function NewPage() {
  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main>
        {/* Page content */}
      </main>
      <Footer />
    </>
  )
}
```

2. Link to it: `<Link href="/new-page">Link Text</Link>`

### Adding a New Component

1. Create in `src/components/`:

```tsx
// src/components/NewComponent.tsx
export function NewComponent() {
  return <div>Component content</div>
}
```

2. Import and use:

```tsx
import { NewComponent } from '@/components/NewComponent'

<NewComponent />
```

### Client vs Server Components

- **Default**: All components are Server Components (faster, SEO-friendly)
- **'use client'**: Required for useState, useEffect, event handlers, browser APIs
- Examples needing 'use client': Navigation, LoadingScreen, SmoothScrollProvider

### Adding Scroll Animations

1. Add `data-scroll` attribute to element:

```tsx
<div data-scroll>This will animate on scroll</div>
```

2. Or use `.clean-text` / `.typing-text` classes for text animations
3. Make sure `<ScrollAnimations />` is imported in the page

### Working with Images

Images are configured in `next.config.js` for these domains:
- i.ibb.co (primary image host)
- placehold.co (placeholders)
- via.placeholder.com (placeholders)
- wallpaperaccess.com (background images)

Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="https://i.ibb.co/..."
  alt="Description"
  width={600}
  height={400}
  className="object-cover"
/>
```

For fill mode (aspect-ratio containers):

```tsx
<div className="relative aspect-video">
  <Image
    src="..."
    alt="..."
    fill
    className="object-cover"
  />
</div>
```

### Password-Protected Pages

Some division pages (CID, IA) use client-side password overlays:

```tsx
'use client'

const [isUnlocked, setIsUnlocked] = useState(false)
const [password, setPassword] = useState('')

const handleSubmit = () => {
  if (password === 'correct-password') {
    setIsUnlocked(true)
  }
}

if (!isUnlocked) {
  return <PasswordOverlay onSubmit={handleSubmit} />
}

return <ActualPageContent />
```

**Note**: This is for roleplay purposes only, not secure.

### Adding Smooth Scroll Links

Links to sections automatically smooth scroll via `SmoothScrollProvider`:

```tsx
<Link href="#section-id">Scroll to Section</Link>

<section id="section-id">
  {/* Content */}
</section>
```

## Styling Guidelines

### Tailwind Utilities

Prefer Tailwind classes over custom CSS:

```tsx
// Good
<div className="bg-linear-dark p-6 rounded-lg hover:bg-linear-gray transition-colors">

// Avoid (use Tailwind instead)
<div style={{ backgroundColor: '#111', padding: '1.5rem' }}>
```

### Responsive Design

Use `md:` prefix for desktop styles (768px+):

```tsx
<h1 className="text-4xl md:text-6xl">
  Title
</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Custom CSS

Only add to `globals.css` when Tailwind isn't sufficient:
- Complex animations
- Pseudo-elements (::before, ::after)
- Global resets
- Keyframe animations

### Color Usage

```tsx
// Backgrounds
bg-linear-black       // Pure black
bg-linear-darker      // Section dividers
bg-linear-dark        // Cards
bg-linear-gray        // Hover states

// Text
text-linear-white     // Primary text
text-linear-white/70  // Secondary text (with opacity)
text-linear-accent    // Accent color (links, highlights)

// Borders
border-linear-gray-lighter

// Accents
bg-linear-accent hover:bg-linear-accent-light
```

## TypeScript

### Type Safety

- Use TypeScript for all new files (`.tsx`, `.ts`)
- Define prop interfaces for components:

```tsx
interface MyComponentProps {
  title: string
  count: number
  isActive?: boolean  // Optional
}

export function MyComponent({ title, count, isActive = false }: MyComponentProps) {
  return <div>{title}: {count}</div>
}
```

### Metadata

Use Next.js metadata API for SEO:

```tsx
export const metadata = {
  title: 'Page Title - SR UPD',
  description: 'Page description for SEO',
}
```

## Important Notes

### No CDN Dependencies

Unlike the old static site, this Next.js version **installs all dependencies via npm**:
- GSAP is installed, not loaded via CDN
- Lenis is installed via npm
- Remix Icons are still loaded via CDN (in layout.tsx `<head>`)
- Fonts are loaded via `next/font/google`

### File References

- Use `@/` alias for imports: `import { Foo } from '@/components/Foo'`
- Configured in `tsconfig.json` as `"@/*": ["./src/*"]`

### Image Optimization

Next.js automatically optimizes images:
- Lazy loading by default
- WebP format when supported
- Responsive srcset generation
- Must specify width/height or use `fill` prop

### Server vs Client

- Server Components: Default, can fetch data, no interactivity
- Client Components: `'use client'`, can use hooks, event handlers
- Keep most components as Server Components for better performance

### Hidden Features

- **Internal Affairs link**: Hidden in footer, appears on hover (see Footer.tsx)
- **Officer Portal**: Shows "Coming Soon" message (see officer-portal/page.tsx)
- **Password pages**: CID and IA divisions require passwords

### External Links

- Google Forms application: https://docs.google.com/forms/d/e/1FAIpQLScEYuqs2tbHLxXZLdhawbEmFhtNsA0dE7SN5dOc96KjKyf5-w/viewform
- Discord server: https://discord.gg/xtnSNTyjxd

## Testing & Debugging

### Common Issues

**Hydration errors**: Make sure client-side state matches server render
- Solution: Use `useEffect` for browser-only code
- Check that `'use client'` is added to components using hooks

**Images not loading**: Check `next.config.js` remote patterns

**Animations not working**: Ensure `ScrollAnimations` component is imported

**Smooth scrolling broken**: Check Lenis initialization in SmoothScrollProvider

**Build errors**: Run `npm run build` to catch TypeScript errors

### Development Tools

- **Next.js DevTools**: Automatically available in dev mode
- **React DevTools**: Browser extension for component inspection
- **TypeScript**: Shows errors in IDE and on build

## Code Style

### React/Next.js

- Use functional components with TypeScript
- Prefer named exports: `export function Component() {}`
- Default export only for pages: `export default function Page() {}`
- Use `const` for variables, avoid `let` when possible

### TypeScript

- Always type component props
- Use `interface` for object types
- Avoid `any` type - use `unknown` if type is truly unknown

### CSS/Tailwind

- Group related classes: spacing, colors, typography
- Use `className` not `class`
- Prefer Tailwind over inline styles
- Use CSS variables for custom colors (defined in Tailwind config)

## Migration from Static Site

This project was migrated from static HTML/CSS/JS to Next.js:

### What Changed

- ✅ HTML files → React/TypeScript components
- ✅ CDN libraries → npm packages
- ✅ Inline Tailwind config → tailwind.config.ts
- ✅ Global JS → React hooks and providers
- ✅ File-based routing (HTML) → Next.js App Router

### What Stayed the Same

- ✅ Exact same visual design and UI
- ✅ Linear-inspired color palette
- ✅ GSAP + Lenis animations
- ✅ All sections and content
- ✅ Component structure and naming

### Old Files

Old static files are kept in the repository but ignored in `.gitignore` for reference:
- `index.html`, `about.html`, etc.
- `css/style.css`
- `js/main.js`
- `departments/*.html`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repo in Vercel
3. Auto-deploy on push to main branch
4. Vercel detects Next.js automatically

### Other Platforms

Platforms supporting Node.js:
- Build: `npm run build`
- Start: `npm start`
- Serve `.next` directory

### Environment Variables

Currently none required. If adding API keys, use `.env.local`:

```
API_KEY=your_key_here
```

Access via `process.env.API_KEY`

## Content Notes

This is a **roleplay gaming community** website, not a real police department. All content is fictional and for entertainment purposes. The disclaimer in the footer makes this clear to visitors.

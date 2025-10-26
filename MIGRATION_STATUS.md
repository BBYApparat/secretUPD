# Next.js Migration Status

## ✅ Completed

1. **Core Setup**
   - package.json with all dependencies
   - tailwind.config.ts with Linear color palette
   - tsconfig.json
   - next.config.js with image domains
   - .gitignore
   - README.md
   - CLAUDE.md (updated for Next.js)

2. **Global Components**
   - src/app/layout.tsx (root layout)
   - src/app/globals.css (all animations and styles)
   - src/components/LoadingScreen.tsx
   - src/components/SmoothScrollProvider.tsx (Lenis)
   - src/components/ScrollAnimations.tsx (GSAP)
   - src/components/Navigation.tsx (with hamburger menu)
   - src/components/Footer.tsx (with hidden IA link)

3. **Main Pages**
   - src/app/page.tsx (home page with all sections)
   - src/components/home/HeroSection.tsx
   - src/components/home/AboutSection.tsx
   - src/components/home/FeaturesSection.tsx
   - src/components/home/TeamSection.tsx
   - src/components/home/RulesSection.tsx
   - src/components/home/JoinSection.tsx
   - src/app/about/page.tsx (mission, vision, history)
   - src/app/chief/page.tsx (David K. Marshall profile with full data)

## ⏳ Needs to be Created

### Leadership Pages

1. **src/app/aschief/page.tsx** - Jason S. Davenport
   - Data from: aschief.html
   - Content: Swedish-American background, CID Head
   - Stats: 18+ years, Detective since 2006, 12 Major Cases

2. **src/app/sheriff/page.tsx** - Oakley Neil Ceasar
   - Data from: sheriff.html
   - Content: Blaine County Sheriff, farm background
   - Stats: 22+ years service
   - Note: Uses brown color scheme (#5D3E39)

### Department Pages

1. **src/app/departments/rt/page.tsx** - Recruitment & Training
   - Data from: departments/rt.html
   - Special: Blue/gold color scheme, uses Orbitron font
   - Animated cards with team member photos
   - Has custom CSS for glow effects

2. **src/app/departments/saf/page.tsx** - Social Affairs
   - Data from: departments/saf.html
   - Content: Community relations, public affairs

3. **src/app/departments/cid/page.tsx** - Criminal Investigation Division
   - Data from: departments/cid.html
   - Special: Password protected (client-side)
   - Dark red theme (#8B0000)
   - Detective profiles section

4. **src/app/departments/hspu/page.tsx** - High Speed Pursuit Unit
   - Data from: departments/hspu.html
   - Content: Fast response unit info

5. **src/app/departments/ia/page.tsx** - Internal Affairs
   - Data from: departments/ia.html
   - Special: Hidden link, password protected
   - Content: Department oversight

### Other Pages

1. **src/app/officer-portal/page.tsx** - Officer Portal
   - Data from: other/officer-portal.html
   - Status: "Coming Soon" placeholder
   - Uses Orbitron font, blue theme

2. **src/app/officer-portal/welcome/page.tsx** - Welcome page (if needed)
   - Data from: other/welcome-officer-portal.html

## 📝 Migration Steps for Remaining Pages

For each page to create:

1. Read the original HTML file
2. Extract all text content, stats, and special data
3. Extract any custom styles (inline or <style> tags)
4. Create the Next.js page following this template:

```tsx
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'

export const metadata = {
  title: 'Page Title - SR UPD',
  description: 'Description',
}

export default function PageName() {
  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main>
        {/* Page content here */}
      </main>
      <Footer />
    </>
  )
}
```

5. Convert inline styles to Tailwind classes where possible
6. For custom animations/effects, add to globals.css if needed
7. Use Next.js Image component for images
8. For password-protected pages, add 'use client' and state management

## 🎨 Special Styling Notes

### RT Department
- Uses Orbitron font (add to layout or page)
- Blue/gold gradient scheme
- Custom glow effects
- Animated cards with team photos

### CID Department
- Dark red theme (#8B0000)
- Gold badge accents (#FFD700)
- Password overlay with "CLASSIFIED" stamp
- Detective profile cards

### Sheriff Page
- Brown/tan color scheme (#5D3E39, #a09765)
- Different stats layout
- Timeline component for career history

## 🚀 To Run the Project

```bash
npm install
npm run dev
```

Then visit http://localhost:3000

## 🗑️ Files to Delete After Migration

Once all pages are migrated and verified:

- index.html
- about.html
- chief.html
- aschief.html
- sheriff.html
- departments/*.html
- other/*.html
- css/style.css (content moved to globals.css)
- js/main.js (functionality moved to React components)

**Note:** Keep backups before deleting!

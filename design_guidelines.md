# Design Guidelines for Rohan Pal's Portfolio

## Design Approach
**Reference-Based**: Inspired by modern developer portfolios like Vercel's showcase sites and Linear's aesthetic - clean, bold typography with strategic visual accents. Focus on making technical content feel premium and engaging.

## Typography System

**Font Families** (Google Fonts via CDN):
- Primary: 'Inter' (UI, body text, technical details)
- Display: 'Outfit' or 'Space Grotesk' (headings, hero, section titles)

**Hierarchy**:
- Hero Heading: Display font, 4xl-6xl responsive (font-bold)
- Section Headings: Display font, 3xl-4xl (font-bold)
- Project Titles: Display font, 2xl-3xl (font-semibold)
- Body Text: Primary font, base-lg (font-normal, leading-relaxed)
- Technical Labels/Tags: Primary font, sm-xs (font-medium, uppercase tracking-wide)

## Layout System

**Spacing Primitives**: Consistently use Tailwind units: 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-6xl with px-6 horizontal padding

**Grid Strategy**:
- Projects: 2-column grid (lg:grid-cols-2) with generous gap-12
- Skills: 4-column grid (grid-cols-2 md:grid-cols-4) with gap-4
- Experience timeline: Single column with left-aligned timeline indicator

## Component Library

### Hero Section
Full viewport height (min-h-screen) with centered content
- Large display heading with name
- Subtitle: "Full Stack Developer | MERN Specialist"
- Animated typing effect or subtle gradient on heading (optional enhancement)
- Two primary CTAs: "View Projects" (primary) + "Download Resume" (secondary)
- Social links row (LinkedIn, GitHub, GFG) with icons from Heroicons
- Background: Subtle gradient mesh or geometric patterns (no photo needed)

### About Section
Two-column layout (lg:grid-cols-2):
- Left: Professional headshot placeholder or geometric avatar
- Right: Introduction paragraph, education highlight (IIIT Una badge/card), key achievements in bullet format with icons

### Projects Showcase
Large featured project cards (2-column grid):
- Project thumbnail/screenshot placeholder with subtle border
- Tech stack tags (pill-shaped badges with icons)
- Title + concise description (2-3 lines)
- Metrics/impact numbers highlighted (e.g., "40% faster load time")
- Three action buttons: Live Demo | GitHub | Video Demo (icon + text)
- Hover state: Subtle lift effect (translate-y-1 + shadow enhancement)

### Experience Timeline
Vertical timeline design:
- Left: Timeline indicator (vertical line with dots)
- Right: Company cards with role, dates, achievement bullets
- Alternating left-right on desktop, stacked on mobile
- Company logo placeholders (circular avatars)

### Technical Skills
Organized in category groups:
- Category headers (Languages, Frameworks, Tools, Testing)
- Skill tags in pill format with subtle borders
- Group with gap-6 between categories, gap-3 within categories
- Use icons from Heroicons for common technologies

### Contact Section
Split layout (lg:grid-cols-2):
- Left: Large contact heading, brief CTA text, direct contact details (email, phone) with click-to-copy functionality
- Right: Quick links grid (LinkedIn, GitHub, GFG) as large interactive cards with profile stats if available
- Footer: Simple copyright with social icons repeated

## Interaction Patterns

**Animations**: Minimal and purposeful
- Scroll-triggered fade-ins for sections (intersection observer)
- Subtle hover lifts on project cards and buttons (transform + shadow)
- Smooth scroll for navigation anchors
- NO distracting parallax or complex scroll animations

**Navigation**:
- Sticky header with logo/name + nav links (About, Projects, Experience, Skills, Contact)
- Smooth scroll to sections on click
- Mobile: Hamburger menu with slide-in panel
- Active section indicator in nav

## Responsive Behavior

**Breakpoints**:
- Mobile (base): Single column, stacked layout, py-12 sections
- Tablet (md): Introduce 2-column where appropriate
- Desktop (lg): Full multi-column layouts, py-20-32 sections

**Critical mobile adjustments**:
- Hero: Reduce heading sizes (3xl mobile vs 6xl desktop)
- Projects: Stack to single column below md breakpoint
- Skills: 2 columns on mobile, 4 on desktop
- Navigation: Hamburger menu below md

## Images

**Hero Section**: No large hero image - use gradient background with subtle geometric patterns or mesh gradient for modern feel

**Project Thumbnails**: 
- Placeholder for Janhit and Boardify screenshots (aspect-ratio: 16/9)
- Use subtle border treatment
- Position: Top of each project card

**About Section**:
- Professional headshot placeholder (if available) or geometric avatar illustration
- Position: Left side of two-column layout

**Company Logos**:
- Small circular avatars for Markvision and Kadit Innovations in experience timeline

## Special Elements

**Resume Download**: Prominent button with download icon, make it feel trustworthy and professional with subtle borders

**External Links**: All project links, GitHub, LinkedIn should have external link icon indicators

**Metrics Display**: Highlight impact numbers (40% improvement, 1000+ users) with larger font weight and subtle accent treatment

**Social Proof**: Integrate GFG problem count (250+ solved) and project count as badge elements in hero or about section

This design creates a modern, impressive portfolio that balances professional credibility with creative visual appeal - perfect for standing out in the competitive tech market while maintaining usability and accessibility.
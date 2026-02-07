# Landing Page Design

## Overview

Complete redesign of the Hogam landing page. The page should be pixel-perfect, responsive, accessible, and SEO-optimized. Design inspired by wisprflow.ai with scroll-triggered animations, bold typography, and generous white space.

---

## Design Style

### Typography
- Large bold headlines with *italic* emphasis words
- Clean sans-serif body text
- Korean text uses Gowun Dodum font

### Animations (GSAP-powered)
- Scroll-triggered reveal animations
- SVG path drawing effects
- Character-by-character wave animations on button hover
- Motion path animations (elements moving along curved paths)
- Parallax effects on scroll

### Spacing & Layout
- Generous white space throughout
- Clean modular sections
- Container-based grid system
- Responsive breakpoints for desktop, tablet, mobile

### Colors
- Keep Hogam palette: Paper (#F9F8F6), Ink (#1A1A1A), Forest (#0D3328), Sage (#E3EAD3), Persimmon (#F36A2D), Tiger (#D7964F)
- Strategic use of accent colors for CTAs and emphasis

---

## Page Structure

### Navigation
- Fixed nav with blur background
- Logo + section links (Features, Demo, Pricing)
- Login / Get Started buttons
- Keep current implementation

---

### Hero Section

**Layout:** Side-by-side, 50/50 split
- Left: Content (badge, headline, subheadline, CTA)
- Right: Demo card
- Both vertically centered
- No scroll required to see demo

**Left Side Content:**

Badge:
> "Learn Korean through Hanja roots"

Headline:
> "We don't teach Korean. We make it unforgettable."

Subheadline:
> "Finally, Korean that doesn't feel like homework."

CTA:
- Single button: "Start Learning"
- Links to sign up

**Right Side Demo Card:**

Interactive demo cycling through 3 vocabulary words + mini dashboard.

Words:
1. 영화 (movie) - 영(映) reflect + 화(畫) picture
2. 공항 (airport) - 공(空) sky/air + 항(港) port
3. 가수 (singer) - 가(歌) song + 수(手) person

Each word card shows:
- Image (visual representation)
- Korean word
- Romanization (yeong-hwa, gong-hang, ga-su)
- English definition
- Audio button (click to hear pronunciation)
- Hanja breakdown section (character components + meanings)
- Tags: Noun, category (Entertainment, Travel, K-pop), related Hanja

Interaction:
- Click anywhere to advance immediately
- Auto-advance after 3 seconds
- After 3rd word, shows mini dashboard
- Mini dashboard stays (no auto-advance)
- Click on dashboard loops back to first word

Mini Dashboard shows:
- Current level (e.g., "Level 1")
- Words learned (3/3)
- SRS stage for each word (Learning/Apprentice 1)

**Mobile:** Stack vertically (headline on top, demo card below)

---

### Section 1: Tiger Journey

**Purpose:** Brand moment - introduce the Hogam tiger mascot and the persimmon feeding concept.

**Visual:**
- Single tiger illustration that transforms through growth stages
- Eating animation as tiger consumes persimmons
- Tiger grows: tiny → small → medium → large → majestic
- Animated, playful, memorable

**Copy (minimal):**
- Introduce tiger as your study buddy
- Your job is to feed it persimmons (by learning words)
- Brief Hogam meaning: Horangi (호랑이 tiger) + Gam (감 persimmon)
- Reference to Korean folktale where tigers love persimmons

---

### Section 2: How It Works

**Layout:** Three cards side-by-side (stacks on mobile)

**Card 1: SRS Stages**
- Visual showing progression: Learning → Apprentice → Familiar → Confident → Burned
- Brief explanation of spaced repetition

**Card 2: Level Progression**
- Master current level to unlock next
- Level gating ensures retention before moving forward

**Card 3: Streaks & Badges**
- Daily streak motivation
- Milestone badges and rewards
- Gamification that feels sophisticated, not childish

---

### Section 3: Best of Everything

**Layout:** Compact, single line - can be a divider between sections

**Copy:**
> "The fun of Duolingo. The power of Anki. The structure of WaniKani. One app."

---

### Section 4: Side Quests + Community

**Layout:** Compact combined section

**Content:**
- Themed vocabulary packs: K-drama, K-pop/lyrics, Travel
- Community features: learn together, help each other
- Display as badges/pills or simple two-column layout

**Tone:** Light, don't oversell - this is for engaged scrollers

---

### Final CTA Section

**Headline:**
> "Still not sure?"

**Copy:**
- Emphasize free to try
- No credit card required

**CTA:**
- Single button: "Get Started Free"

---

### Footer

**Include:**
- Logo + tagline (aligned with headline messaging)
- Company: About, Blog
- Legal: Privacy, Terms (links can be placeholder)

**Remove:**
- Product links column
- Careers
- Copyright line
- Big "Hogam" watermark
- Social icons (no social presence yet)

---

## Assets Needed

### Images
- Tiger mascot at multiple growth stages (for animation)
- Persimmon icons
- Word images for demo: movie (영화), airport (공항), singer (가수)

### Audio
- Pronunciation audio for: 영화, 공항, 가수

### Animations
- Tiger eating/growing animation
- GSAP scroll-triggered animations throughout
- Button hover wave effects
- SVG path drawing effects

---

## Technical Notes

### Stack
- TanStack Start (React)
- Tailwind CSS v4
- GSAP for animations
- Existing shadcn/ui components

### Performance
- Lazy load below-fold sections
- Optimize images (WebP format)
- Preload critical assets

### SEO (implement after design is complete)
- Semantic HTML structure
- Meta tags, Open Graph
- Structured data

### Accessibility (implement after design is complete)
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader support

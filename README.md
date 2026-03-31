# SURYA.S — Professional AI Portfolio

A high-conversion, Apple-inspired personal portfolio website built with **React**, **Vite**, and **Framer Motion**. Designed to showcase AI/ML projects, an entrepreneurial pivot story, and communicate a technical founder narrative to VCs and tech recruiters.

---

## 🚀 Live Demo

> Deploy via [Vercel](https://vercel.com) by importing this repository.

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Root HTML entry point
├── vite.config.js          # Vite bundler configuration
├── package.json            # Dependencies & npm scripts
├── eslint.config.js        # ESLint rules
├── public/                 # Static assets (favicon, etc.)
└── src/
    ├── main.jsx            # React app mount point
    ├── App.jsx             # Root layout + video background
    ├── index.css           # Global design system (CSS variables, utilities)
    ├── App.css             # App-level layout styles
    ├── assets/
    │   ├── bg-video.mp4    # Full-screen ambient background video
    │   └── neural-network.json  # Lottie animation (Vision section)
    ├── styles/             # Additional style modules
    └── components/
        ├── Navbar.jsx          # Fixed navigation with scroll & mobile support
        ├── Hero.jsx            # Landing section with animated headline & CTAs
        ├── About.jsx           # Story / pivot section with stats
        ├── Projects.jsx        # Project showcase cards with milestones
        ├── TechStack.jsx       # Technology grid with hover animations
        ├── Vision.jsx          # Founder vision & mission statement
        ├── Contact.jsx         # Contact form + social links
        ├── Footer.jsx          # Minimal site footer
        └── AnimatedSection.jsx # Reusable scroll-triggered animation wrapper
```

---

## 🧩 Component Breakdown

### `App.jsx` — Root Layout
The top-level shell of the application. Renders a **full-screen looping video background** (`bg-video.mp4`) with a dark translucent overlay to ensure content remains readable. All page sections are assembled here in order.

```
App
 ├── video background (fixed, z-index: -10)
 ├── dark overlay (fixed, z-index: -9)
 ├── Navbar
 ├── Hero
 ├── About
 ├── Projects
 ├── TechStack
 ├── Vision
 ├── Contact
 └── Footer
```

---

### `Navbar.jsx` — Fixed Navigation
- **Scroll-aware**: Turns from transparent to frosted-glass (`backdrop-filter: blur`) after the user scrolls 50px.
- **Animated entry**: Slides in from the top using Framer Motion on load.
- **Responsive**: Desktop shows horizontal nav links + "Let's Talk" CTA button. Mobile shows a hamburger toggle (☰) that reveals a drop-down menu with `AnimatePresence`.
- **Links**: About → Projects → Stack → Vision → Contact.

---

### `Hero.jsx` — Landing Section
The first thing visitors see. Key features:
- **Animated floating background orbs** (radial gradients, CSS `@keyframes float`) — one blue (top-left), one violet (bottom-right).
- **Framer Motion fade-up** on initial page load (`opacity: 0 → 1`, `y: 30 → 0`).
- **Headline**: Large responsive `h1` with gradient text (`SURYA S`), sub-headline, and an institutional pill badge (*AI & ML Student at KSRCT*).
- **Two CTAs**: "View Projects" (glowing gradient button) and "Founder Vision" (ghost button with hover effect).
- Uses `clamp()` for fluid responsive font sizes.

---

### `About.jsx` — The Pivot Story
A two-column layout telling the personal narrative of transitioning from student → entrepreneur:
- **Left column**: Text describing Surya's academic background (KSRCT + IIT Patna Applied AI course) and the entrepreneurial pivot toward Edge AI ventures. Includes stat counters: `3+ Years Core ML` and `1st Startup Venture`.
- **Right column**: Abstract visual card with grid lines and a **pulsing glowing orb** (CSS `@keyframes pulse`) representing *The Pivot* moment.
- Wrapped in `AnimatedSection` for scroll-triggered slide-in.

---

### `Projects.jsx` — Technical Showcase
Displays two featured projects in a responsive CSS Grid layout:

| Project | Type | Tech |
|---|---|---|
| **Glaucoma Detection AI** | Primary (highlighted) | Python, TensorFlow, CNN, React |
| **Industrial Edge Computing** | Secondary | Edge Computing, IoT, Deployment |

- **`Card` component** (defined inline): Renders each project with a title, subtitle, description, and tag pills. Primary cards have a blue accent border/glow; secondary cards use the default dark card style.
- **Hover interaction**: Cards lift (`translateY(-5px)`) with a glow shadow on mouse-over.
- **Project Milestones panel**: A timeline view showing three phases of the Glaucoma project, with Framer Motion `whileInView` staggered animations.

---

### `TechStack.jsx` — Technology Arsenal
Displays tools organized into three groups rendered as cards:

| Group | Technologies |
|---|---|
| **Languages** | Python, Java, SQL |
| **AI & Data** | TensorFlow, Pandas, NumPy |
| **Architecture** | React, Edge/CNN |

- Each technology is shown as an icon (from `react-icons`) with its brand color and a glow `drop-shadow`.
- **Hover animation** via `motion.whileHover`: icons scale up (`1.1x`), lift (`y: -8`), and cast a colored box-shadow using the tech's own color.
- A subtle violet radial gradient blob sits behind the section for depth.

---

### `Vision.jsx` — Founder Mindset
A two-column section marking the narrative shift from *Developer* to *Founder*:
- **Left**: A circular Lottie animation placeholder (neural network animation) inside a violet glowing orb container.
- **Right**: Headers, a founder quote, and two hover-interactive text blocks:
  - **Mission** — always highlighted with a violet left-border.
  - **Audience** — border animates from white to blue on hover.
- A gradient line divider (violet-tinted) subtly separates this section from Tech Stack above.

---

### `Contact.jsx` — Get in Touch
Two-column contact layout:
- **Left**: Heading, description text, and three social icon buttons (GitHub, LinkedIn, Email). Each icon button lifts on hover (`y: -4`) and its border highlights to blue.
- **Right**: A styled dark contact form with fields for Name, Email, and Message. Fields highlight with a blue border on focus. Includes a "Send Message" glowing submit button. (`onSubmit` is currently `e.preventDefault()` — ready for backend integration.)

---

### `Footer.jsx` — Site Footer
Minimal centered footer with:
- Logo mark: `SURYA.S` (blue accent dot).
- Dynamic copyright year via `new Date().getFullYear()`.
- Quick navigation links: Home, Projects, Vision.

---

### `AnimatedSection.jsx` — Reusable Animation Wrapper
A utility wrapper component used throughout the app for scroll-triggered reveal animations.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | ReactNode | — | Content to animate |
| `delay` | number | `0` | Animation delay in seconds |
| `direction` | string | `"up"` | Slide-in direction: `up`, `down`, `left`, `right`, `none` |
| `duration` | number | `0.6` | Animation duration in seconds |
| `className` | string | `""` | Optional CSS class |

Uses Framer Motion's `whileInView` with `viewport={{ once: true }}` so animations fire only once as the element enters the viewport.

---

## 🎨 Design System (`index.css`)

All design tokens are defined as **CSS Custom Properties** on `:root`:

```css
/* Colors */
--bg-dark:       #050505    /* Near-black page background */
--bg-card:       #111111    /* Card/surface color */
--border-subtle: rgba(255,255,255,0.08)

--text-primary:  #ffffff
--text-secondary:#a1a1aa    /* Muted zinc-400 gray */

--accent-blue:   #00A6FF    /* Primary action / developer identity */
--accent-violet: #8B5CF6    /* Founder / premium identity */

/* Layout */
--max-width:     1200px
--nav-height:    80px

/* Transitions */
--transition-fast:   0.2s cubic-bezier(0.16, 1, 0.3, 1)
--transition-smooth: 0.4s cubic-bezier(0.16, 1, 0.3, 1)
```

**Utility Classes:**

| Class | Purpose |
|---|---|
| `.glow-btn` | Pill-shaped CTA button with gradient fill + glow on hover |
| `.text-gradient` | White → gray gradient text (heading accent) |
| `.text-gradient-accent` | Blue → violet gradient text |
| `.glass-panel` | Frosted glass card with backdrop-filter |
| `.video-bg-wrapper` | Full-screen fixed video container |
| `.video-bg-overlay` | Dark overlay on top of video |

**Typography**: [Inter](https://fonts.google.com/specimen/Inter) (weights 300–800) loaded from Google Fonts.

---

## 📦 Dependencies

### Runtime
| Package | Version | Purpose |
|---|---|---|
| `react` | ^19 | UI library |
| `react-dom` | ^19 | DOM rendering |
| `framer-motion` | ^12 | Declarative animations |
| `react-icons` | ^5 | Icon library (Fi, Fa, Si, Bs sets) |
| `lottie-react` | ^2 | Lottie JSON animation renderer |

### Dev
| Package | Purpose |
|---|---|
| `vite` | Build tool & dev server |
| `@vitejs/plugin-react` | React Fast Refresh + JSX |
| `eslint` | Code linting |

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## 🚢 Deployment (Vercel)

1. Push to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework Preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

---

## 📌 Notes & Known Placeholders

- **Social links** in `Contact.jsx` use `href="#"` — replace with real GitHub/LinkedIn URLs.
- **Contact form** has no backend. Wire up to a service like [Formspree](https://formspree.io), EmailJS, or a serverless function.
- **Lottie animation** in `Vision.jsx` displays a placeholder box — add a real `neural-network.json` from [LottieFiles](https://lottiefiles.com) to `src/assets/`.
- **`bg-video.mp4`** — replace with a high-quality ambient dark background video for production.

---

*Built by Surya S — AI & ML Student @ KSRCT | Aspiring Technical Founder*

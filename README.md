# GDG On Campus — Modern Community Landing Page
> Built for the 12-Hour Hackathon • Inspired by Google Developer Groups (GDG)

A modern, responsive, high-performance landing page for a GDG-inspired developer community. Designed with Google Dev branding, vibrant Material 3 / Google colors (`#4285F4`, `#EA4335`, `#FBBC04`, `#34A853`), dark/light theme toggle, interactive project filters, event ticket generators, and digital member pass creation.

---

## 🌟 Highlights & Feature Matrix

| Feature | Description | Status |
| :--- | :--- | :---: |
| **Scroll-Driven Horizontal Showcase** | Pinned sticky section where scrolling vertically drives a 4-stage card deck sliding horizontally across the screen with shifting Google ambient glows | ✅ Complete (New) |
| **Navbar & Scroll Progress Bar** | Branded `< / >` geometric logo mark, scroll-linked Google 4-color progress bar, smooth scroll links, Join Community CTA, responsive mobile menu drawer | ✅ Complete |
| **Dark / Light Theme** | Instant switch with smooth transition and `localStorage` persistence | ✅ Complete (Bonus) |
| **Hero Section** | Compelling headline, introduction, primary/secondary CTAs, tech badges ticker, custom code IDE hero graphic | ✅ Complete |
| **Community Stats** | Interactive metric counters (2,500+ Members, 48+ Workshops, 16+ Hackathons, 24+ Shipped Projects) | ✅ Complete (Bonus) |
| **About GDG** | Community introduction, Mission & Vision cards, 4 core membership benefit pillars | ✅ Complete |
| **LegoFest 2026 (Flagship Event)** | Themed with iconic LEGO brick aesthetics, 3D embossed brick countdown timer, $3,500 prize pool, and custom Lego Minifigure swag | ✅ Complete (New) |
| **Upcoming Events & Workshops** | Google Cloud Study Jam, Flutter Forward Hackathon, Android 16 Deep Dive with 16:9 poster visuals | ✅ Complete |
| **Member Projects** | 6 real-world student projects with 16:9 vector thumbnails, tech stack pills, and interactive Detail Modal | ✅ Complete |
| **Interactive Event RSVP** | Real-time RSVP dialog that generates a digital boarding pass ticket with Google Calendar link | ✅ Complete |
| **Digital Member Pass & Real QR Code** | Generates real scannable QR code linking to official GDG portal, sends email notification preview with formal note | ✅ Complete (Upgraded) |
| **Testimonials** | Student & alumni quotes from Google engineers, hackathon winners, and Women Techmakers leads | ✅ Complete (Bonus) |
| **FAQ Accordion** | Expandable/collapsible first-timer questions and answers | ✅ Complete (Bonus) |
| **High-Impact CTA** | Instant newsletter subscription with celebratory confetti and direct Discord / GitHub buttons | ✅ Complete |
| **Contact & Office Hours** | Demo contact details (email, room location, office hours) and interactive message form | ✅ Complete |
| **Footer & Disclaimer** | Quick links, Google Dev documentation resources, official GDG independence disclaimer, back-to-top | ✅ Complete |

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS (configured with custom Google Developer colors and dark mode classes)
- **Icons:** Lucide React
- **Confetti Animation:** Canvas Confetti
- **Typography:** Google Sans, Inter, JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Running the Project Locally
```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run Vite development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### Previewing the Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
d:\gdg/
├── public/
│   └── assets/
│       ├── brand/       # GDG logo vector marks
│       ├── hero/        # Hero IDE code graphic illustration
│       ├── projects/    # 16:9 aspect ratio project illustrations
│       └── events/      # 16:9 aspect ratio conference poster visuals
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Header, mobile drawer, theme toggle
│   │   ├── Hero.jsx         # Hero banner, CTAs, tech badges
│   │   ├── StatsSection.jsx # Animated community metrics
│   │   ├── About.jsx        # Mission, vision, 4 member benefits
│   │   ├── Projects.jsx     # Filterable project showcase & modal
│   │   ├── Events.jsx       # Event posters, schedule & RSVP
│   │   ├── Testimonials.jsx # Community stories & alumni quotes
│   │   ├── FAQ.jsx          # Accordion questions & answers
│   │   ├── CTA.jsx          # Call to action & confetti newsletter
│   │   ├── Contact.jsx      # Demo contact details & message form
│   │   ├── Footer.jsx       # Links, resources, GDG disclaimer
│   │   ├── JoinModal.jsx    # Member pass & QR badge generator
│   │   └── EventModal.jsx   # Ticket pass & Google Calendar RSVP
│   ├── data/
│   │   └── communityData.js # Rich structured data for all sections
│   ├── App.jsx              # Main app orchestrator
│   ├── index.css            # Tailwind directives & Google gradients
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML5 template with Google fonts
├── package.json             # Scripts & dependencies
├── tailwind.config.js       # Google Dev color system & dark mode
└── vite.config.js           # Vite configuration
```

---

## ⚖️ Disclaimer
Google Developer Groups (GDG) On Campus is an independent developer organization. Activities, opinions, and projects showcased here should in no way be linked to Google, the corporation.

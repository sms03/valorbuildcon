# Valor Buildcon Web Experience

Modern marketing site for Valor Buildcon LLP showcasing RCC work, RMC plant capabilities, highlight projects, testimonials, and contact workflows. Built with a focus on bold typography, looping hero video, animated sections, and reusable shadcn-ui components tailored for construction services.

## 🧱 Tech Stack
- React 18 + TypeScript
- Vite 5 (dev server & bundler)
- Tailwind CSS 3 with shadcn-ui component library
- React Router 6 (multi-page navigation)
- GSAP for scroll-triggered motion
- Lucide-react icon set
- React Hook Form + Zod for form handling/validation

## 📁 Project Structure
```
├── public/                # Static assets (logos, video)
├── src/
│   ├── assets/            # Hero photography, misc media
│   ├── components/
│   │   ├── layout/        # Header, Footer, Layout shell
│   │   ├── home/          # Home page sections (Hero, Services, etc.)
│   │   └── ui/            # shadcn-ui wrappers (Button, Card, etc.)
│   ├── hooks/             # Custom hooks (GSAP animation, mobile detection, toast)
│   ├── pages/             # Route-level pages (Home, About, Projects, RCC, RMC)
│   ├── lib/               # Utility helpers (e.g., `cn`)
│   └── App.tsx            # Router + layout wiring
└── vite.config.ts         # Vite + TS path aliases
```

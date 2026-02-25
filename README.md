# siv19.dev — Personal Portfolio

> Personal portfolio website for **Sivaganesh Balaganesh** — MS CS @ Purdue, ex-Visa Senior SWE.

🔗 **Live:** [siv19.dev](https://siv19.dev)

---

## ✨ Features

- **Hero** — Typewriter title animation + interactive terminal emulator
- **About** — Education, experience summary, IEEE publications, and areas of expertise
- **Work Experience** — Timeline cards with achievements and tech badges (Visa, MIT, Citicorp, Bauble)
- **Projects** — 12 project cards with GitHub/demo links, highlights, and tech stack tags
- **Tech Stack** — 6-category skill grid with proficiency indicators (Strong / Comfortable / Familiar)
- **Contact** — Email, location, and social links (LinkedIn, GitHub, IEEE)
- **Navigation** — Sticky header with mobile hamburger menu and smooth scroll
- **Scroll-to-top** button, section reveal animations (Framer Motion), and resume download

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS Variables (oklch) |
| **UI Components** | shadcn/ui (New York), Radix UI primitives |
| **Animations** | Framer Motion, custom CSS keyframes |
| **Font** | Geist Sans & Mono |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |
| **Package Manager** | pnpm |

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/sivab193/personal-website.git
cd personal-website

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Theme tokens & animations
│   ├── layout.tsx           # Root layout (fonts, analytics, metadata)
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── hero-section.tsx     # Hero with typewriter + terminal
│   ├── about-section.tsx    # Education, experience, publications
│   ├── experience-section.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx   # 2×3 skill category grid
│   ├── contact-section.tsx
│   ├── navigation.tsx       # Sticky nav + mobile menu
│   ├── scroll-to-top.tsx
│   ├── section-wrapper.tsx  # Framer Motion scroll-reveal wrapper
│   ├── terminal-animation.tsx
│   └── ui/                  # shadcn/ui primitives (badge, button, card)
├── lib/
│   └── utils.ts             # cn() utility
├── public/
│   ├── favicon.svg
│   └── resume.pdf
└── styles/                  # (unused, see app/globals.css)
```

## 📜 License

MIT

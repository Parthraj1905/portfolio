# Portfolio — DS/ML Engineer

A dark, minimal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Deploy:** Vercel

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Design tokens, base styles, fonts
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Landing hero with typing animation
│   │   ├── About.tsx       # About + terminal card
│   │   ├── Projects.tsx    # Project cards
│   │   ├── Skills.tsx      # Skills with animated bars
│   │   ├── Blog.tsx        # Learning in public / blog posts
│   │   └── Contact.tsx     # Contact + social links
│   └── ui/
│       ├── Navbar.tsx      # Sticky nav with mobile menu
│       └── Footer.tsx      # Footer with links
├── data/
│   ├── projects.ts         # All project content — edit here
│   └── skills.ts           # Skills & proficiency levels — edit here
└── public/                 # Static assets (images, resume PDF, etc.)
```

---

## Customization Guide

### Your Name & Info
- `app/layout.tsx` — Update page title and meta description
- `components/ui/Navbar.tsx` — Update the logo initials (`YN`)
- `components/sections/Hero.tsx` — Update name, description, and typing roles
- `components/sections/About.tsx` — Update bio text and the terminal card
- `components/sections/Contact.tsx` — Update email and social links
- `components/ui/Footer.tsx` — Update name and social links

### Projects
Edit `data/projects.ts` — add a new object to the array:
```ts
{
  id: "my-project",
  title: "My First ML Project",
  description: "Short description shown on the card.",
  longDescription: "Longer description for detail pages later.",
  tags: ["Python", "Pandas", "Scikit-learn"],
  status: "completed",          // "completed" | "in-progress" | "planned"
  githubUrl: "https://github.com/you/repo",
  notebookUrl: "https://nbviewer.org/...",
  highlights: [
    "Cleaned and processed 50k rows of data",
    "Trained XGBoost model with 91% accuracy",
    "Deployed as a Streamlit app",
  ],
}
```

### Skills
Edit `data/skills.ts` — add or remove skills, set level:
```ts
{ name: "PyTorch", level: "learning" }      // 35% bar, gray
{ name: "Pandas", level: "comfortable" }    // 65% bar, light indigo
{ name: "Python", level: "proficient" }     // 90% bar, full indigo
```

### Blog Posts
Edit `components/sections/Blog.tsx` — replace the `placeholderPosts` array with real posts once you start writing.

---

## Deployment on Vercel

### Option A — Vercel CLI (recommended)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live at `yourname.vercel.app`.

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done

Vercel auto-deploys every time you push to `main`.

---

## Adding Your Resume
Drop a `resume.pdf` in the `/public` folder, then link it anywhere:
```tsx
<a href="/resume.pdf" target="_blank">Download Resume</a>
```

---

## Roadmap (What to Build Next)
- [ ] Add real projects to `data/projects.ts`
- [ ] Write first blog post
- [ ] Add resume PDF to `/public`
- [ ] Set up custom domain
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Add individual project detail pages (`/projects/[id]`)
- [ ] Integrate GitHub API for live contribution stats

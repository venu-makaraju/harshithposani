# harshithposani

Modern AI/ML Engineer portfolio built with React: dark/light theme, smooth scroll, glassmorphism UI, responsive layout, and GitHub Pages–ready build.

## Features

- **Dark + Light theme** with persistent preference
- **Smooth scroll** and section-based navigation
- **Responsive** mobile and desktop layout with a slide-out menu on small screens
- **Glassmorphism** and gradient accents
- **Sections:** Home, About, Experience, Projects, Skills, AMC Pathway, Contact
- **Reusable components** (Navbar, Section, ThemeToggle, SocialLinks, LazyImage)
- **Framer Motion** for animations
- **React Icons** (GitHub, LinkedIn, and others)
- **Lazy-loaded images** for performance
- **GitHub Pages** deployment support

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in the `dist` folder.

## Deploy to GitHub Pages

### 1. Configure for your repo

Replace `yourusername` and the repo name in these two places:

- **`package.json`** — `homepage`:
  ```json
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/harshithposani/"
  ```

- **`vite.config.js`** — `base` (must match repo name; trailing slash required):
  ```js
  base: process.env.NODE_ENV === 'production' ? '/harshithposani/' : '/',
  ```
  If your repo is named something else, use that (e.g. `'/my-portfolio/'`).

### 2. Build scripts

| Script | What it does |
|--------|----------------|
| `npm run build` | Production build into `dist/`. Postbuild copies `index.html` → `dist/404.html` so GitHub Pages serves the app for unknown paths (SPA fallback). |
| `npm run deploy` | Runs `predeploy` (build) then pushes `dist/` to the `gh-pages` branch. |

### 3. Generate a production build

```bash
npm install
npm run build
```

Output is in `dist/`. To test locally with the same base path as GitHub Pages:

```bash
npm run preview
```

Then open the URL shown (e.g. `http://localhost:4173/harshithposani/`).

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This will (1) run `npm run build` and postbuild (creating `404.html`), then (2) push the contents of `dist/` to the `gh-pages` branch.

### 5. Turn on GitHub Pages

1. Open your repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **gh-pages**, folder **/ (root)**.
4. Save. The site will be at `https://YOUR_GITHUB_USERNAME.github.io/harshithposani/`.

### Routing on GitHub Pages

- The app is a single-page app with no client-side router; navigation uses in-page sections (`#home`, `#about`, etc.).
- **`base`** in `vite.config.js` is set to your repo path so all asset URLs (JS, CSS) work on GitHub Pages.
- **`dist/404.html`** is a copy of `index.html`. When someone visits a path that doesn’t exist (e.g. `/harshithposani/some-path`), GitHub Pages serves `404.html`, which loads the same app so the site still works.

## Performance & SEO

- **Meta tags:** `index.html` includes title, description, Open Graph, and Twitter Card meta. Replace `https://yourusername.github.io/harshithposani/` with your live URL in canonical, `og:url`, and `og:image`.
- **Sitemap / robots:** `public/sitemap.xml` and `public/robots.txt` are copied to `dist/`. Update the domain in both to your GitHub Pages URL.
- **Lazy loading:** Below-the-fold sections (Projects, Skills, AMC Pathway) are code-split; project images use `LazyImage` with `loading="lazy"` and `decoding="async"`.
- **Accessibility:** Skip-to-main link, `main` id for focus target, `:focus-visible` styles, `prefers-reduced-motion` support, and ARIA where needed. Aim for Lighthouse Accessibility > 90.

## Customize

- **Social links:** Edit URLs in `src/components/SocialLinks.jsx`, `Footer.jsx`, and the Contact section.
- **Content:** Update copy in `src/sections/*.jsx` (About, Experience, Projects, Skills, AMC Pathway, Contact, Hero).
- **Contact email/phone:** `src/sections/Contact.jsx`.
- **Canonical / OG URL:** `index.html`, `public/sitemap.xml`, `public/robots.txt`.

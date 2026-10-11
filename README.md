# Karan.dev portfolio

React + Vite + Tailwind CSS portfolio for Karan Kumar.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/ (client build + prerendered HTML)
npm run preview    # serve the production build
```

## Project structure

```
public/            resume.pdf, favicon.svg
src/
  data.js          all content: profile, skills, projects, experience
  index.css        design tokens, glass effect, animations (+ Tailwind)
  App.jsx          page layout; Contact is lazy-loaded
  components/      Navbar, Hero, About, Skills, Projects/ProjectCard,
                   Upcoming, Experience, Contact, Footer, Icon, ...
```

To change text, links, skill levels or projects, edit `src/data.js`.

## Contact form

Messages are sent with Formspark (`@formspark/use-formspark`). The form id is
`profile.formsparkId` in `src/data.js`. If delivery fails, the form offers
"Open in email app" and "Copy message" as a fallback. After deploying, send
yourself one test message and add your domain in the Formspark dashboard if asked.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New > Project and import it.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist`.

## Performance notes

- `npm run build` renders the page to static HTML (`scripts/prerender.mjs`, using
  `src/entry-server.jsx`), so the hero text appears before JavaScript loads. The browser
  then hydrates it (`src/main.jsx`).
- The built stylesheet is inlined into `index.html` (`inlineCss` in `vite.config.js`).
- Google Fonts load without blocking first paint. `Inter Fallback` and
  `Plus Jakarta Sans Fallback` in `src/index.css` match the web fonts' metrics so the
  swap does not move text.
- Images are WebP with explicit width and height, lazy-loaded.
- Keep rendering code free of browser-only APIs (`window`, `document`) outside effects
  and handlers, because the same components run during the build.

# Aqsa Khan — Cinematic Portfolio

A React + Vite portfolio built around a single piece of footage (an icosahedron
with a molten core) as a continuous visual environment, rather than a static
hero background. The video is one persistent, fixed-position layer that
morphs — position, scale, shape, brightness — as you scroll and navigate,
choreographed with GSAP ScrollTrigger and Lenis for smooth scroll.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

## How the video system works

- `src/components/VideoStage.jsx` — the one `<video>` element, mounted once
  in `App.jsx` outside of `<Routes>`, so it never remounts on navigation.
- `src/lib/videoDirector.js` — the single channel every page uses to move it.
  A "scene" is a plain object (`scale`, `borderRadius`, `opacity`, `filter`,
  `xOffset`/`yOffset` from center, `vignette`). `settleScene()` tweens to a
  scene once (used on page mount — the route-transition moment). `scene()` is
  a small helper that bakes in the centering math so offsets stay readable.
- `src/lib/videoScroll.js` — `scrubBetween()` builds a scroll-scrubbed
  crossfade between two scenes, tied to a section entering/leaving the
  viewport. Used for the in-page transitions (e.g. hero → orbital hub on Home).
- Each page defines its own resting scene and, where it makes sense, one or
  two scroll transitions — never more, so the motion stays intentional rather
  than decorative. Home has the most choreography (hero → hub → quiet →
  strong again for the CTA); About/Projects/Contact are mostly one resting
  scene each.

The two interactive centerpieces:
1. **The video itself** — continuous, scroll-aware, present on every page.
2. **The orbital showcase** (`src/components/OrbitalShowcase.jsx`) — 6
   featured projects on a 3D ring in CSS (`perspective` + `rotateY` +
   `translateZ`), with the video literally becoming the glowing hub they
   orbit around. Drag to spin (with momentum), hover for a subtle parallax
   tilt, keyboard-focusable (focusing a card rotates it to the front).

Page transitions use a curtain wipe (`src/components/Curtain.jsx`) — content
swaps while the screen is fully covered, so the video's jump to its next
scene is never visible mid-motion.

`prefers-reduced-motion` is respected throughout: scroll-scrubbed video
transitions, the mask reveal, card tilt, and orbital auto-rotation all fall
back to static/instant states.

## Content

All copy, project data, links, skills, and certificates come directly from
your `siteData.js` and `project.js` — transcribed into
`src/data/siteData.js` (now an ES module) with nothing invented or removed.
Two small additions, both metadata rather than content:

- `category` (`Full-Stack` / `AI` / `UI/UX`) on each project, added so the
  Projects page filters you asked for have something to filter by. I
  inferred these from each project's existing tech stack and description —
  worth a skim in `src/data/siteData.js` in case you'd tag anything
  differently (a few, like PixelPulse Media and the automation scripts, were
  judgment calls).
- `featured: true` on 6 projects for the orbital showcase on Home (Diana's
  Jewelry, AI Todo, PixelPulse Media, the AI Designing Suite, the UI/UX
  Design System, and ClassLink) — picked for the mix of Full-Stack/AI/UI-UX
  and the strongest case-study content. Easy to swap in `siteData.js`.

**About page:** your uploaded data has no education/interests/fun-facts
fields, so About currently covers Story (bio), Skills (categorized), and
Certifications — all real, all from your data. I didn't add an "Education"
section since specifics like your university weren't in the uploaded
content; happy to add it if you want it in there.

**Images:** `siteData.js` references local paths like `/images/ai-todo.png`
that weren't part of this upload, plus a few external `trae.ai` placeholder-
generator URLs. Every image spot has a graceful fallback (a styled monogram
tile) rather than a broken-image icon, so the site looks intentional either
way. Drop your real screenshots into `public/images/` matching the paths in
`siteData.js` and they'll pick up automatically — no code changes needed.

## Deploying

This is a client-side SPA (React Router). Most hosts need a rewrite rule so
deep links like `/projects` or `/project/2` don't 404:
- **Vercel**: works out of the box.
- **Netlify**: add a `public/_redirects` file containing `/* /index.html 200`.
- **Railway/other static hosts**: check for an SPA fallback / rewrite-all-to-index.html setting.

## Fonts

Syne (display), Instrument Sans (body), and JetBrains Mono (labels/data) are
bundled locally via `@fontsource` — no external font requests at runtime.

## Structure

```
src/
  components/   VideoStage, OrbitalShowcase, ProjectCard, Nav, Curtain, Footer
  pages/        Home, About, Projects, ProjectDetail, Contact, NotFound
  data/         siteData.js (your real content)
  lib/          videoDirector.js, videoScroll.js (the choreography engine)
  hooks/        useSmoothScroll, useReveal, useTilt, usePrefersReducedMotion
public/
  media/        hero-loop.mp4 (compressed), hero-poster.jpg
```

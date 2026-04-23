# Design Spec: Port temporal.html → Next.js (Philoneural)

**Date:** 2026-04-20  
**Approach:** Faithful rewrite (Enfoque A) — pixel-perfect match to `temporal.html`

---

## Goal

Rewrite the Next.js components in `philoneural/src/` so the running app is visually and functionally identical to `temporal.html`. Every section, animation, CSS class, and piece of content must match.

---

## Files to modify

| File | Change |
|---|---|
| `src/app/globals.css` | Add all CSS classes from `temporal.html`: `.card`, `.card-img`, `.card-info`, `.card-bar`, `.card-tag`, `.card-arrow`, `.field`, `.field-line`, `.field-glow`, `.form-btn`, `.form-card`, `.srv`, `.srv-n`, `.srv-icon`, `.lbl`, `.r`, `.d1`–`.d4`, `.c`, `.step`, `.step-n`, `.phi-quote`, `.phi-attr`, `.phi-pillars`, `.pillar`, `.pillar-icon`, `.phi-bg-text`, `.phi-section-n`, `.stat-n`, `.stat-l`, `.about-grid`, `.process-grid`, `.process-visual`, `.process-content`, `.steps`, `.contact-grid`, `.contact-p`, `.socials`, `.footer-inner`, `.footer-logo`, `.footer-copy`, `.footer-links`, `.gallery-header`, `.gallery-label`, `.carousel`, `.ticker-track`, `.ticker-item` |
| `src/components/Nav.tsx` | Nav items: Nosotros→`#about`, Proyectos→`#gallery`, Filosofía→`#philosophy`, Servicios→`#services`. Add `.nav-burger` button. |
| `src/components/Hero.tsx` | Layout: art panel LEFT (`.hero-art` with `<NeuralSvg>`), text panel RIGHT (`.hero-text`). Chip with pulsing dot. h1: "Where Precision\nMeets Art." Hero-sub: "with the precision of a brushstroke". Buttons: `btn-cel` (Explore The Gallery) + `btn-ghost` (Connect). Scroll hint: right-bottom vertical. |
| `src/components/NeuralSvg.tsx` | Preserve SVG exactly from `temporal.html` lines 829–893. Animate `.n-edge` paths with strokeDashoffset on mount. Pulse `.n-node` opacity with rAF. Parallax on mousemove. Scroll translateY. |
| `src/components/Gallery.tsx` | Replace GSAP horizontal scroll with drag carousel: `overflow-x: auto`, `cursor: grab`, mousedown/mousemove/mouseup + touch events. Cards: `.card` with `.card-img` (SVG art) + `.card-info` overlay. 4 projects: Aether Engine, Oculus Node, Neural Loom, Signal Graph. Gallery header with `.lbl` "01 / Proyectos". |
| `src/components/Philosophy.tsx` | Add `.phi-bg-text` "Intelligence" (absolute). Structure: `.phi-section-n` "02 / The Manifesto", `.phi-quote`, `.phi-attr`, `.phi-pillars` (3 pillars with SVG icons). Pillars: Fluid Syntax, Absolute Precision, Neural Harmony. Background: `var(--bg)`. |
| `src/components/About.tsx` | Grid: left col = h2 "Built on the art of deliberate architecture" + `.stats` (40+ Projects, 8+ Years, 100% Custom). Right col = paragraphs + `<blockquote>`. Label: `.lbl` "Nosotros". Animate `[data-count]` on scroll. |
| `src/components/Process.tsx` | Two-column: SVG process wheel LEFT + steps RIGHT. Steps: 01 Understand first, 02 Design the architecture, 03 Build with intention, 04 Iterate with data. Animate steps with `.on` class via IntersectionObserver. Background: `var(--bg2)`. |
| `src/components/CodeStrip.tsx` | Match exactly: 5 lines with `.ln`, `.kw`, `.fn`, `.st`, `.cm`, `.tx` spans. Slide-in GSAP from left on scroll. |
| `src/components/Services.tsx` | 6 services in `.srv-grid` (3 cols): Software a medida, Sistemas de IA, Arquitectura de sistemas, Diseño de producto, APIs e integraciones, Escalabilidad. Each with SVG icon, `.srv-n`, `.srv::before` top-line hover. Background: `var(--bg2)`. |
| `src/components/Contact.tsx` | Grid: left = `.lbl` "03 / Initiate Connection", h2 "Enter The Network", `.contact-p`, socials (LinkedIn/GitHub/Email). Right = `.form-card` with `.field` inputs (field-line/field-glow), `.form-btn` "Initiate Sequence". Background: `var(--bg)`. |
| `src/components/Footer.tsx` | `.footer-inner`: logo "PHILONEURAL" (italic), copyright "© 2025 Philoneural. Precision meets art.", links: Manifesto/Privacy/Terms/GitHub. Background: `rgba(4,4,4,1)`. |
| `src/lib/neuralSvgData.ts` | Update PROJECTS array with 4 projects matching `temporal.html` cards (SVG art, title, tag). |

---

## Animation map (GSAP + vanilla JS)

| Script | Location |
|---|---|
| Scroll progress bar | `Providers.tsx` (already correct) |
| Nav scroll class | `Nav.tsx` (already correct) |
| Custom cursor | `Providers.tsx` (already correct) |
| Canvas ink particles | `BgCanvas.tsx` (verify matches temporal.html) |
| Neural SVG edge draw + node pulse | `NeuralSvg.tsx` |
| Hero parallax on mousemove | `NeuralSvg.tsx` or `Hero.tsx` |
| Hero GSAP entrance | `Hero.tsx` (already mostly correct) |
| Scroll reveals `.r` → `.on` | `Providers.tsx` — add `IntersectionObserver` for `.r` class |
| Gallery card GSAP entrance | `Gallery.tsx` |
| Drag carousel | `Gallery.tsx` |
| Counter animation `[data-count]` | `About.tsx` |
| Process steps stagger `.on` | `Process.tsx` |
| Philosophy pillars GSAP | `Philosophy.tsx` |
| Services hover glow GSAP | `Services.tsx` |
| Code strip slide-in GSAP | `CodeStrip.tsx` |
| Process circle draw GSAP | `Process.tsx` |
| Neural SVG scroll parallax | `Hero.tsx` |
| Form submit feedback | `Contact.tsx` |
| Footer links stagger GSAP | `Footer.tsx` |

---

## CSS strategy

All CSS classes from `temporal.html`'s `<style>` block that are not already in `globals.css` are added verbatim. Components use those class names. Inline styles are only used where values are dynamic (e.g., card index-based colors).

---

## Out of scope

- Routing / multi-page
- Backend form submission
- i18n (Spanish strings are part of the design)
- `package.json` dependencies (all needed libs already installed)

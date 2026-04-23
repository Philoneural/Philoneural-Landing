# Philoneural — Ink Art Effects & Logo Integration

**Date:** 2026-04-22
**Status:** Approved

---

## Overview

Add gestural ink brush stroke effects across section backgrounds and integrate the real Philoneural logos (logotipo_nb + logo) into the nav, hero, and footer. Everything stays within the existing white-based B&W palette.

---

## Design Decisions

### Ink Art Style — Trazos de Pincel

Gestural diagonal brush strokes that cross hero and section dividers, plus micro ink drip circles. Characteristics:

- Main strokes: thick (`stroke-width` 10–16px equivalent), low opacity (4–6%), `stroke-linecap: round`
- Secondary strokes: thinner, slightly lower opacity, offset a few px below main
- Ink drips: 3–6 small circles near the end of each main stroke, 5–7% opacity
- Section dividers: single thinner horizontal brushstroke at the top of alternating sections, with 2–3 micro drips
- All ink is `#111110` (near-black) matching the `--cel` token

### Logo Placement — Nav, Hero, Footer

- **Nav:** `logotipo_nb.png` replaces the current `<a className="nav-logo">Philo<em>neural</em></a>` text. Height: `28px`, `mix-blend-mode: multiply` to eliminate the white PNG background.
- **Hero right panel:** `logo.png` replaces the current `<NeuralSvg />` component as the hero art. Same size/positioning. `mix-blend-mode: multiply`. The mouse-move parallax (GSAP targeting `#heroArt` container) is preserved unchanged. The scroll parallax selector `#neuralSvg` needs updating to `#heroArt img`. The SVG node pulse animation from `NeuralSvg.tsx` is removed — the logo is a static image; `NeuralSvg.tsx` and its animation code are deleted.
- **Footer:** `logotipo_nb.png` replaces the `<span className="footer-logo">PHILONEURAL</span>` text. Height: `26px`, `mix-blend-mode: multiply`.

---

## Component Changes

### Nav.tsx

- Replace `<a className="nav-logo">` text content with `<img src="/logotipo_nb.png" alt="Philoneural" />`
- Add `style={{ mixBlendMode: 'multiply', height: '28px', width: 'auto', display: 'block' }}`

### Hero.tsx

- Replace `<NeuralSvg />` inside `.hero-art` with `<img src="/logo.png" id="herologo" />`
- Preserve the `id="heroArt"` container — GSAP mouse parallax targets the container, not the child
- Update scroll parallax selector from `document.getElementById('neuralSvg')` to `document.getElementById('herologo')`
- Apply `style={{ mixBlendMode: 'multiply', width: '82%', maxWidth: '520px' }}`

### Footer.tsx

- Replace `<span className="footer-logo">PHILONEURAL</span>` with `<img src="/logotipo_nb.png" alt="Philoneural" />`
- Add `style={{ mixBlendMode: 'multiply', height: '26px', width: 'auto' }}`

### New component: InkBrush.tsx

A reusable server component that renders an `<svg>` absolutely positioned over its parent section with `pointer-events: none`. Props:

- `variant`: `'hero' | 'divider' | 'footer'`
  - `hero` — two thick diagonal strokes top-right + secondary + 5 drip circles
  - `divider` — single horizontal stroke top of section + 2–3 drip circles
  - `footer` — single horizontal stroke + 2 drip circles

Each variant's SVG paths are hardcoded (no runtime computation). The component is purely declarative, zero JS.

### globals.css

Add:

```css
.ink-brush {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
```

### Sections that get InkBrush

- `<Hero />` — `variant="hero"` inside `.hero-art`
- `<Philosophy />` — `variant="divider"` at section top
- `<About />` — `variant="divider"` at section top
- `<Services />` — `variant="divider"` at section top
- `<Contact />` — `variant="divider"` at section top
- `<Footer />` — `variant="footer"` at section top

---

## Visual Specs (SVG path values)

### hero variant — `viewBox="0 0 800 400"`

```text
stroke 1 (main):  d="M 390 -10 Q 500 22 570 5 Q 660 -14 780 16"  width=16   opacity=.052
stroke 2:         d="M 410  16 Q 520 50 600 30 Q 695  8 790 40"  width=10   opacity=.038
stroke 3 (thin):  d="M 430  36 Q 540 66 628 46 Q 720 26 800 58"  width=5.5  opacity=.028
drips: cx 542,568,526,600,624 — r 5,3,3.5,2.5,2 — opacity .068→.05
```

### divider variant — `viewBox="0 0 800 60"`

```text
stroke: d="M -10 10 Q 100 2 200 8 Q 300 14 420 4 Q 540 -4 660 8 Q 740 16 810 6"  width=4.5  opacity=.055
drips: cx 422,440,408 — r 2.5,1.5,2 — opacity .065,.055,.05
```

### footer variant — `viewBox="0 0 800 80"`

```text
stroke: d="M -10 6 Q 140 -4 280 4 Q 420 12 560 2 Q 680 -6 810 5"  width=5  opacity=.055
drips: cx 282,298 — r 2.2,1.3 — opacity .07,.06
```

---

## Constraints & Notes

- `mix-blend-mode: multiply` on PNG logos eliminates the white background natively in CSS. No SVG conversion needed.
- `NeuralSvg.tsx` is deleted after migration — it has no other consumers.
- All ink SVGs use `preserveAspectRatio="xMidYMid slice"` so they fill the container regardless of section height.
- No new dependencies required.
- Parent sections already have `position: relative` via their existing CSS classes — verify before adding `InkBrush`.

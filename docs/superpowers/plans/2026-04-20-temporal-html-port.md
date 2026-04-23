# Temporal HTML Port — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite all Next.js components in `philoneural/src/` to be pixel-perfect matches of `temporal.html`.

**Architecture:** Each component adopts the exact CSS classes, HTML structure, content, and animations from `temporal.html`. CSS classes are added to `globals.css`. Components use named classes instead of inline styles where `temporal.html` uses them.

**Tech Stack:** Next.js 14+, TypeScript, GSAP 3, Lenis, Tailwind v4 (utility-only)

---

## Section order (matches temporal.html)
Hero → Ticker → Gallery → Philosophy → About → Process → CodeStrip → Services → Contact → Footer

**Current page.tsx differs** — must reorder: move Process before CodeStrip, CodeStrip before Services.

---

## Task 1: Update globals.css — add temporal.html CSS classes

**Files:** Modify `src/app/globals.css`

- [ ] Add all missing class definitions from temporal.html's `<style>` block:
  `.c`, `.lbl`, `.r`, `.d1-.d4`, `.on`, `.gallery-header`, `.gallery-label`, `.carousel`, `.card`, `.card-img`, `.card-info`, `.card-bar`, `.card-tag`, `.card-arrow`, `.phi-section-n`, `.phi-quote`, `.phi-attr`, `.phi-bg-text`, `.phi-pillars`, `.pillar`, `.pillar-icon`, `.about-grid`, `.stat-n`, `.stat-l`, `.process-grid`, `.process-visual`, `.process-content`, `.steps`, `.step`, `.step-n`, `.code-strip`, `.code-lines`, `.code-line`, `.ln`, `.kw`, `.fn`, `.st`, `.cm`, `.tx`, `.srv-grid`, `.srv`, `.srv-n`, `.srv-icon`, `.contact-grid`, `.contact-p`, `.socials`, `.form-card`, `.field`, `.field-line`, `.field-glow`, `.form-btn`, `.form-btn-text`, `.form-btn-icon`, `.footer-inner`, `.footer-logo`, `.footer-copy`, `.footer-links`, `.ticker-track`, `.ticker-item`, `.btn-cel`, `.btn-ghost`, `.hero-chip`, `.hero-art`, `.hero-text`, `.hero-sub`, `.hero-desc`, `.hero-actions`, `.hero-scroll-hint`, `.scroll-line`, `.nav-burger`
- [ ] Verify existing classes are not duplicated
- [ ] `git add -A && git commit -m "style: add temporal.html CSS classes to globals.css"`

---

## Task 2: Update page.tsx — fix section order

**Files:** Modify `src/app/page.tsx`

- [ ] Reorder to match temporal.html: Hero → Ticker → Gallery → Philosophy → About → **Process** → CodeStrip → **Services** → Contact → Footer
- [ ] `git commit -m "fix: reorder sections to match temporal.html"`

---

## Task 3: Rewrite Nav.tsx

**Files:** Modify `src/components/Nav.tsx`

- [ ] Nav items: `[{Nosotros, #about}, {Proyectos, #gallery}, {Filosofía, #philosophy}, {Servicios, #services}]`
- [ ] Add `.nav-burger` button with 3 `<span>` children
- [ ] Keep existing scroll behavior and hover effects
- [ ] `git commit -m "feat: update Nav to match temporal.html"`

---

## Task 4: Rewrite Hero.tsx

**Files:** Modify `src/components/Hero.tsx`

- [ ] Layout: `grid-template-columns: 1fr 1fr` — art panel LEFT (`.hero-art`), text panel RIGHT (`.hero-text`)
- [ ] Chip: `.hero-chip` with pulsing dot (`@keyframes pulse`) + "Software Studio"
- [ ] h1: "Where Precision\n**Meets** *Art.*" (`.hl` on "Meets", `<em>` on "Art.")
- [ ] `.hero-sub`: "with the precision of a brushstroke"
- [ ] `.hero-desc`: existing paragraph text
- [ ] Buttons: `.btn-cel` "Explore The Gallery →" + `.btn-ghost` "Connect →"
- [ ] Scroll hint: `.hero-scroll-hint` positioned bottom-right (absolute), vertical "Scroll" text + `.scroll-line`
- [ ] GSAP entrance: animate `#heroChip`, `#heroH1`, `#heroSub`, `#heroDesc`, `#heroActions`, `#heroScroll`
- [ ] MouseMove parallax on `.hero-art`
- [ ] Scroll parallax on NeuralSvg
- [ ] `git commit -m "feat: rewrite Hero to match temporal.html layout"`

---

## Task 5: Rewrite Gallery.tsx — drag carousel

**Files:** Modify `src/components/Gallery.tsx`

- [ ] Replace GSAP pinned scroll with `overflow-x: auto` drag carousel (`.carousel`)
- [ ] Mouse drag: `mousedown`/`mousemove`/`mouseup`/`mouseleave` events
- [ ] Touch support: `touchstart`/`touchmove` events
- [ ] Gallery header: `.gallery-header` with `.lbl` "01 / Proyectos", h2 "The *Gallery*", `.gallery-label` "Drag to explore →"
- [ ] 4 cards matching temporal.html:
  - **Aether Engine** (SVG: network nodes) / "Distributed Neural Processing"
  - **Oculus Node** (SVG: wave signal) / "Vision & Pattern Recognition API"
  - **Neural Loom** (SVG: concentric rings) / "Quantum State Management"
  - **Signal Graph** (SVG: bar chart) / "Real-time Analytics Platform"
- [ ] Each card: `.card` > `.card-img` (SVG + `.card-arrow` "↗") + `.card-info` (`.card-bar`)
- [ ] GSAP entrance on scroll for each `.card`
- [ ] Background: `var(--bg2)`
- [ ] `git commit -m "feat: rewrite Gallery as drag carousel matching temporal.html"`

---

## Task 6: Rewrite Philosophy.tsx

**Files:** Modify `src/components/Philosophy.tsx`

- [ ] Add `.phi-bg-text` "Intelligence" (absolute positioned, huge italic text)
- [ ] `.phi-section-n r`: "02 / The Manifesto"
- [ ] `.phi-quote r d1`: the exact quote from temporal.html with `.hl` span
- [ ] `.phi-attr r d2`: "— Philoneural, design principles"
- [ ] `.phi-pillars r d2` with 3 pillars (SVG icons):
  - **Fluid Syntax** (curved path SVG icon)
  - **Absolute Precision** (square/grid SVG icon)
  - **Neural Harmony** (circle nodes SVG icon)
- [ ] GSAP scroll reveals for `.phi-quote` and `.pillar`
- [ ] Background: `var(--bg)`
- [ ] `git commit -m "feat: rewrite Philosophy to match temporal.html"`

---

## Task 7: Rewrite About.tsx

**Files:** Modify `src/components/About.tsx`

- [ ] `.lbl r`: "Nosotros"
- [ ] `.about-grid` two columns:
  - **Left**: h2 "Built on the art\nof *deliberate*\narchitecture" + `.stats` (3 cols: 40+/8+/100%)
  - **Right**: 2 paragraphs + `<blockquote>` (from temporal.html)
- [ ] `[data-count]` attributes on stat numbers + IntersectionObserver counter animation
- [ ] `.r` classes on elements for scroll reveal
- [ ] Background: `var(--bg)`
- [ ] `git commit -m "feat: rewrite About to match temporal.html"`

---

## Task 8: Rewrite Process.tsx — vertical grid

**Files:** Modify `src/components/Process.tsx`

- [ ] **Remove** GSAP horizontal pinned scroll
- [ ] `.process-grid` two columns: SVG wheel LEFT, steps RIGHT
- [ ] SVG process wheel: exact from temporal.html lines 1210–1242 (concentric circles, arcs, nodes, UNDERSTAND/DESIGN/BUILD/ITERATE labels)
- [ ] h2: "From problem\nto *reasoned*\nsolution"
- [ ] 4 steps with `.step` / `data-step` / `.step-n` / `.step-n`:
  - 01 Understand first, 02 Design the architecture, 03 Build with intention, 04 Iterate with data
- [ ] Steps animate with `.on` class via IntersectionObserver (staggered)
- [ ] GSAP circle draw animation on scroll
- [ ] Background: `var(--bg2)`
- [ ] `git commit -m "feat: rewrite Process as vertical grid matching temporal.html"`

---

## Task 9: Rewrite CodeStrip.tsx

**Files:** Modify `src/components/CodeStrip.tsx`

- [ ] `.code-strip` with fade edges (`::before`/`::after` pseudo via CSS)
- [ ] 5 code lines exactly from temporal.html (buildSystem function)
- [ ] Each line: `.code-line` > `.ln` + spans with `.kw`, `.fn`, `.st`, `.cm`, `.tx`
- [ ] GSAP slide-in from left on scroll
- [ ] Background: `var(--bg3)`
- [ ] `git commit -m "feat: rewrite CodeStrip to match temporal.html"`

---

## Task 10: Rewrite Services.tsx — 3-col grid

**Files:** Modify `src/components/Services.tsx`, `src/lib/neuralSvgData.ts`

- [ ] **Remove** GSAP horizontal pinned scroll
- [ ] `.lbl r`: "Servicios"
- [ ] h2: "What we\n*build* together"
- [ ] `.srv-grid` 3-column grid with 6 services (from temporal.html):
  - 01 Software a medida, 02 Sistemas de IA, 03 Arquitectura de sistemas
  - 04 Diseño de producto, 05 APIs e integraciones, 06 Escalabilidad
- [ ] Each `.srv`: `.srv-n`, SVG icon (`.srv-icon`), h3, p
- [ ] Hover: `::before` top line scales in (CSS), background lightens
- [ ] GSAP hover `boxShadow` on mouseenter/mouseleave
- [ ] Background: `var(--bg2)`
- [ ] Update SERVICES in `neuralSvgData.ts` with temporal.html content
- [ ] `git commit -m "feat: rewrite Services as 3-col grid matching temporal.html"`

---

## Task 11: Rewrite Contact.tsx

**Files:** Modify `src/components/Contact.tsx`

- [ ] `.contact-grid` two columns:
  - **Left**: `.lbl` "03 / Initiate Connection", h2 "Enter The\n*Network.*", `.contact-p`, `.socials` (LinkedIn/GitHub/Email SVGs)
  - **Right**: `.form-card` with `.field` inputs
- [ ] 4 fields: "Identification String" (name), "Return Protocol (Email)", "Project Classification", "Transmission Payload" (textarea)
- [ ] Each field: `input/textarea` + `label` + `.field-line` + `.field-glow`
- [ ] `.form-btn` "Initiate Sequence →" with `::before` fill + `::after` shimmer line
- [ ] Form submit: change button text to "Sequence Initiated ✓"
- [ ] `.contact-glow` radial gradient background element
- [ ] Background: `var(--bg)`
- [ ] `git commit -m "feat: rewrite Contact to match temporal.html"`

---

## Task 12: Rewrite Footer.tsx

**Files:** Modify `src/components/Footer.tsx`

- [ ] `.footer-inner` flex row between: logo "PHILONEURAL" (italic) | copyright "© 2025 Philoneural. Precision meets art." | footer-links (Manifesto/Privacy/Terms/GitHub)
- [ ] `.footer-logo`, `.footer-copy`, `.footer-links a` CSS classes
- [ ] GSAP stagger on `.footer-links a`
- [ ] Background: `rgba(4,4,4,1)`, border-top `rgba(255,255,255,.04)`
- [ ] `git commit -m "feat: rewrite Footer to match temporal.html"`

---

## Task 13: Update Ticker.tsx

**Files:** Modify `src/components/Ticker.tsx`

- [ ] Items: "Fluid Syntax", "Absolute Precision", "Neural Harmony", "Ink & Architecture", "Systems That Think", "Zero Lines Wasted" (duplicated)
- [ ] `.ticker-track` with `@keyframes marquee` (translateX 0 → -50%)
- [ ] `.ticker-item` with `::after` content `'·'`
- [ ] Background: `var(--bg2)`, border top/bottom cel color
- [ ] `git commit -m "feat: update Ticker to match temporal.html"`

---

## Task 14: Update Providers.tsx — scroll reveals

**Files:** Modify `src/components/Providers.tsx`

- [ ] Add `IntersectionObserver` for `.r` elements: adds `.on` class when `top 88%` visible, respects `.d1`/`.d2`/`.d3` delays
- [ ] `git commit -m "feat: add scroll reveal observer for .r elements"`

---

## Task 15: Verify NeuralSvg.tsx matches temporal.html

**Files:** Modify `src/components/NeuralSvg.tsx`

- [ ] SVG viewBox `0 0 560 740`, exact nodes/edges from temporal.html lines 829–893
- [ ] Edge draw animation: `strokeDashoffset` staggered on mount
- [ ] Node pulse: `rAF` opacity sin wave
- [ ] `git commit -m "fix: align NeuralSvg with temporal.html"`

---

## Self-Review Notes

- Section order: page.tsx must be updated (Task 2) before visual testing
- Process and Services are now vertical grids — no `h-scroll-section` class needed
- `.r` + `.on` animation system requires Task 14 (Providers) to work across all components
- `.c` class (max-width 1180px, padding 0 52px) is the container used by About, Philosophy, Process, Services, Contact, Footer

# Contributing to Cola Motion

Thanks for wanting to help. Cola Motion is a small, single-page 3D experience, so focused patches and
clear bug reports go a long way.

## Ways to contribute

- **Code** — improve the can model, condensation, particles or scroll choreography.
- **Bugs** — report rendering glitches with browser, GPU, OS and reproduction steps.
- **Design** — suggest palette, typography or section layout refinements.
- **Docs** — fix typos or clarify the motion model in the README.
- **Performance** — profile the scene on low-end devices and propose reductions.

If you are planning a large change, open an issue first so we can agree on the approach before you
spend time on it.

## Development setup

```bash
git clone https://github.com/Hugoagfarizky/cola-motion.git
cd cola-motion
npm install
npm run dev
```

Requirements: Node.js 22+ (24 recommended) and npm 10+.

## Before you open a pull request

Run the production build to catch import and asset-path problems:

```bash
npm run build
npm run preview
```

There is no automated test suite yet, so also check the page manually:

- the loader disappears and the intro plays once
- the can moves through all five sections on desktop and mobile
- the flavour lineup switches label, background and page colour
- **Crack one open** lifts the tab and fires the bubble burst
- the counters reach 3, 330 and 200
- no console errors and no horizontal overflow at 390 px
- reduced motion still shows every section

## Project structure

- `index.html` — sections, navigation and copy.
- `src/main.js` — entry point that wires the scene, scroll, pop button and intro.
- `src/three/` — renderer, procedural can, label and condensation textures, ice and bubbles.
- `src/animations/` — GSAP intro and scroll timelines.
- `src/style.css` — visual system and responsive rules.
- `public/` — static files copied as-is. Currently only the favicon.

## Asset rules

- Keep the scene procedural. Do not add external models, textures or image sprites without discussing
  it first; the project is intentionally self-contained.
- Reference `public/` assets through `import.meta.env.BASE_URL`, never with a hard-coded leading
  slash. The site is served from `/cola-motion/` on GitHub Pages.
- Do not commit credentials, analytics IDs or tracking scripts.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add lime flavour
fix: keep the can inside the viewport on short screens
docs: explain the scroll blend model
perf: reduce bubble count on mobile
chore: bump three.js
```

Keep the subject in the imperative mood and under 72 characters. One logical change per commit.

## Branches

Branch from `main` and use a short descriptive name:

```text
feat/lime-flavour
fix/mobile-overflow
docs/motion-model
```

## Pull requests

A good PR is small, focused and easy to review. Include:

- what changed and why
- the linked issue (`Closes #123`)
- how you tested it, including browser and GPU
- screenshots or a recording for visual changes

Draft PRs are welcome for early feedback.

## Accessibility and performance

- Respect `prefers-reduced-motion`; heavy motion must degrade gracefully.
- Keep text readable over the 3D canvas and preserve visible keyboard focus.
- Test on a mid-range device or with CPU throttling before adding more geometry or particles.

## Questions

Open a discussion or an issue with the `question` label. There is no such thing as a silly question
about a scene graph.

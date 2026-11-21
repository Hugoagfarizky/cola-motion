# 🥤 Cola Motion — Taste the Feeling

A motion-driven 3D landing page concept built around a **procedurally generated cola can**. The page
pairs a scroll-choreographed Three.js scene with GSAP timelines: the can travels, spins and changes
livery as you move through the sections, while bubbles, ice and condensation react to the story.

> This is a personal motion design concept. It is **not affiliated with, endorsed by, or sponsored by
> The Coca-Cola Company.** All product names and marks belong to their respective owners.

**Live demo:** <https://hugoagfarizky.github.io/cola-motion/>

---

## ✨ Features

- **Procedural 3D can** — the can, label, condensation and ice are generated in code. No GLB, texture
  files or external models are downloaded.
- **Scroll-choreographed poses** — each section has its own can position, rotation and scale, with a
  separate pose set for mobile.
- **Pinned flavour lineup** — Original, Zero Sugar, Light and Cherry scroll horizontally while the can
  label texture and the page background change in sync.
- **Crack one open interaction** — the tab lifts, bubbles burst from the opening and the can recoils.
- **Animated statistics** — counters for 3°C, 330 ml and 200 countries trigger on scroll.
- **Story timeline** — parallax years and staggered reveals for the 1886 → today milestones.
- **Dynamic colour system** — every section declares its own background colour and the nav switches to
  dark text over the light story section.
- **Reduced motion support** — `prefers-reduced-motion` disables the intro and scrubbing effects.
- **Responsive** — tuned separately for desktop and screens below 760 px.

---

## 🛠️ Tech stack

| Layer | Technology |
| :--- | :--- |
| Bundler | Vite 5 |
| 3D engine | Three.js r170 (WebGL, PBR materials, PMREM environment) |
| Animation | GSAP 3 + ScrollTrigger |
| Textures | `CanvasTexture` and `DataTexture` generated at runtime |
| Typography | Google Fonts (Anton, Inter, Pacifico) |

No backend, database, API key, analytics or third-party runtime dependency beyond the font CDN.

---

## 🚀 Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The app is served from `/cola-motion/` on GitHub Pages, so `vite.config.js` sets the matching
`base`. If you deploy elsewhere, update `base` or remove it.

---

## 📁 Project structure

```text
cola-motion/
├── index.html              # Sections, navigation and copy
├── vite.config.js          # Base path for GitHub Pages
├── public/
│   └── favicon.svg         # Fizz icon
├── src/
│   ├── main.js             # Entry point: scene, scroll, pop button, intro
│   ├── style.css           # Visual system, layout and responsive rules
│   ├── animations/
│   │   ├── intro.js        # Loader + opening sequence
│   │   └── scroll.js       # Poses, flavour switching, reveals, counters
│   └── three/
│       ├── scene.js        # Renderer, camera, lights, environment
│       ├── can.js          # Procedural can, tab and flavour switching
│       ├── labelTexture.js # Canvas-drawn label per flavour
│       ├── wetTexture.js   # Condensation maps baked to data textures
│       ├── ice.js          # Ice cubes
│       └── bubbles.js      # Bubble particles
└── README.md
```

---

## ⚙️ How the motion works

- **One scroll model.** `src/animations/scroll.js` defines keyframe transitions for every 3D value.
  Each frame reads the progress of those ScrollTriggers and blends the values, so transitions run in
  scroll order instead of competing tweens.
- **Pose sets.** Desktop and mobile poses are separate objects, chosen at runtime from the viewport
  width. The can position is expressed as a fraction of half the viewport, so it stays proportional.
- **Flavour switching.** The horizontal track maps its progress to one of four flavours. Switching a
  flavour rebuilds the label texture and cross-fades the background colour.
- **Smoothing.** Values are damped with a frame-rate independent factor. Reduced motion snaps them
  instead of easing.

---

## 🧪 Checks

There is no automated test suite. Before shipping, verify:

- the loader disappears and the intro plays once
- the can moves through all five sections on desktop and mobile
- the flavour lineup changes label, colour and background
- **Crack one open** lifts the tab and fires the bubble burst
- the counter values reach 3, 330 and 200
- no console errors and no horizontal overflow at 390 px
- reduced motion still shows every section

---

## 📄 Disclaimer

This project is a design and engineering exercise. It is not an official Coca-Cola product, website
or campaign, and it is not affiliated with The Coca-Cola Company. Do not use it commercially or
present it as an official brand asset.

---

## 📜 License

[MIT](LICENSE) © 2026 Hugo Agfarizky

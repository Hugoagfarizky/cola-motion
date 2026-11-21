import gsap from 'gsap';
import { createScene } from './three/scene.js';
import { playIntro } from './animations/intro.js';
import { initScroll } from './animations/scroll.js';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function waitForFonts() {
  if (!document.fonts) return;
  const load = Promise.all([
    document.fonts.load('170px Pacifico'),
    document.fonts.load('56px Anton'),
    document.fonts.load('600 30px Inter'),
  ]);
  // Never block the page for long if fonts are slow.
  await Promise.race([load, new Promise((r) => setTimeout(r, 2500))]);
}

function initPopButton(world) {
  const btn = document.getElementById('popBtn');
  const label = btn.querySelector('span');
  let opened = false;

  btn.addEventListener('click', () => {
    const tl = gsap.timeline();
    if (!opened) {
      opened = true;
      tl.to(world.can.tab.rotation, { x: 1.15, duration: 0.35, ease: 'back.out(3)' }, 0)
        .to(world.can.opening.material, { opacity: 1, duration: 0.15 }, 0.12)
        .to(world.can.tab.rotation, { x: 0.15, duration: 0.6, ease: 'power3.inOut' }, 0.55);
      label.textContent = 'Cheers!';
    }

    tl.call(() => world.burst.fire(world.openingWorldPosition()), null, 0.15);
    tl.to(world.intro, { y: 0.6, duration: 0.22, ease: 'power2.out' }, 0.1).to(
      world.intro,
      { y: 0, duration: 1, ease: 'bounce.out' },
    );
    gsap.fromTo(world.bubbles.state, { speed: 7 }, { speed: 1, duration: 2.4, ease: 'power2.out' });
  });
}

async function init() {
  document.body.classList.add('is-loading');
  await waitForFonts();

  const world = createScene(document.getElementById('webgl'), { reducedMotion });
  world.start();

  initScroll(world, { reducedMotion });
  initPopButton(world);

  document.querySelector('.loader').classList.add('is-done');
  document.body.classList.remove('is-loading');

  // Dev-only helper for screenshots: ?shot=<section-id> skips the intro and jumps there.
  const shot = import.meta.env.DEV && new URLSearchParams(location.search).get('shot');
  if (shot) {
    playIntro(world, { reducedMotion: true });
    gsap.set('.loader', { display: 'none' });
    const el = document.getElementById(shot);
    const off = Number(new URLSearchParams(location.search).get('off') || 0);
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + window.innerHeight * off);
    return;
  }

  playIntro(world, { reducedMotion });
}

init();

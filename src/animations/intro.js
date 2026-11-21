import gsap from 'gsap';

function splitChars(el) {
  const text = el.textContent;
  el.textContent = '';
  for (const ch of text) {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch === ' ' ? ' ' : ch;
    span.setAttribute('aria-hidden', 'true');
    el.appendChild(span);
  }
}

export function playIntro(world, { reducedMotion }) {
  document.querySelectorAll('[data-split]').forEach(splitChars);

  if (reducedMotion) return gsap.timeline();

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  // Can drops in from above while spinning, then settles.
  gsap.set(world.intro, { y: 9, spin: -Math.PI * 3, scale: 0.6 });
  tl.to(world.intro, { y: 0, duration: 1.8, ease: 'elastic.out(1, 0.55)' }, 0)
    .to(world.intro, { spin: 0, duration: 2.2, ease: 'power4.out' }, 0)
    .to(world.intro, { scale: 1, duration: 1.6, ease: 'back.out(1.6)' }, 0.1)
    .fromTo(world.intro, { ice: 0 }, { ice: 1, duration: 1.6, ease: 'back.out(1.4)' }, 0.7);

  tl.from(
    '.hero__line .char',
    { yPercent: 110, rotate: 8, duration: 1.2, stagger: 0.04 },
    0.25,
  );
  tl.from('.nav, .hero__meta', { opacity: 0, y: -16, duration: 1, stagger: 0.1 }, 0.9);

  return tl;
}

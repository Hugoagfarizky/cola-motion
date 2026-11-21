import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Can poses per section. x / y are fractions of half the viewport (−1 … 1).
const POSES = {
  desktop: {
    hero: { x: 0, y: 0, rotY: 0, rotZ: 0, scale: 1 },
    cold: { x: -0.42, y: -0.02, rotY: Math.PI, rotZ: -0.22, scale: 0.95 },
    flavors: { x: 0.42, y: 0, rotY: Math.PI * 2, rotZ: 0.12, scale: 1 },
    story: { x: 0.58, y: -0.05, rotY: Math.PI * 3, rotZ: 0.35, scale: 0.8 },
    share: { x: 0.42, y: 0, rotY: Math.PI * 4, rotZ: -0.08, scale: 1.1 },
  },
  mobile: {
    hero: { x: 0, y: -0.2, rotY: 0, rotZ: 0, scale: 1 },
    cold: { x: 0, y: 0.4, rotY: Math.PI, rotZ: -0.2, scale: 0.8 },
    flavors: { x: 0, y: 0.38, rotY: Math.PI * 2, rotZ: 0.1, scale: 0.85 },
    story: { x: 0.62, y: 0.66, rotY: Math.PI * 3, rotZ: 0.35, scale: 0.42 },
    share: { x: 0, y: 0.42, rotY: Math.PI * 4, rotZ: -0.08, scale: 0.85 },
  },
};

const FLAVOR_ORDER = ['original', 'zero', 'diet', 'cherry'];

function setBg(color) {
  gsap.to(document.body, { backgroundColor: color, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
}

export function initScroll(world, { reducedMotion }) {
  const { canState, bubbles, wet, ice, can } = world;
  const scrub = reducedMotion ? true : 1.2;

  // ---------- Hero headline drifts away ----------
  gsap.to('.hero__title', {
    yPercent: -25,
    opacity: 0.15,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  // ---------- Flavors: pinned horizontal scroll ----------
  // Created before the 3D keyframes so their trigger positions include the pin spacer.
  const track = document.querySelector('.flavors__track');
  const distance = () => track.scrollWidth - window.innerWidth;
  const panels = gsap.utils.toArray('.flavor');
  let activeIndex = 0;

  const applyFlavor = (i) => {
    activeIndex = i;
    can.setFlavor(FLAVOR_ORDER[i]);
    setBg(panels[i].dataset.bg);
    if (!reducedMotion) {
      gsap.fromTo(world.intro, { scale: 0.88 }, { scale: 1, duration: 0.9, ease: 'elastic.out(1, 0.5)', overwrite: true });
    }
  };

  gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: '#flavors',
      start: 'top top',
      end: () => '+=' + distance(),
      pin: true,
      scrub,
      invalidateOnRefresh: true,
      // Only react while the lineup is on screen, so a fast scroll past it
      // can't override the next section's background or label.
      onToggle: (self) => {
        if (self.isActive) applyFlavor(Math.round(self.progress * (panels.length - 1)));
      },
      onUpdate: (self) => {
        const i = Math.round(self.progress * (panels.length - 1));
        if (self.isActive && i !== activeIndex) applyFlavor(i);
      },
      onLeaveBack: () => can.setFlavor('original'),
    },
  });

  // Panels' text slides in as they arrive
  panels.forEach((panel, i) => {
    if (i === 0 || reducedMotion) return;
    gsap.from(panel.querySelectorAll('.eyebrow, .flavor__name, .lead'), {
      y: 80,
      opacity: 0,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#flavors',
        start: () => `top+=${distance() * ((i - 0.6) / (panels.length - 1))} top`,
        end: () => `top+=${distance() * ((i - 0.1) / (panels.length - 1))} top`,
        scrub,
        invalidateOnRefresh: true,
      },
    });
  });

  // Back to the classic label once the lineup is over.
  ScrollTrigger.create({
    trigger: '#story',
    start: 'top 60%',
    end: 'bottom bottom',
    onToggle: (self) => {
      if (self.isActive) {
        can.setFlavor('original');
        setBg(document.getElementById('story').dataset.bg);
      }
    },
    onLeaveBack: () => can.setFlavor(FLAVOR_ORDER[activeIndex]),
  });

  // (Created after the pin so positions include the pin spacer.)
  // ---------- Background colour per section ----------
  document.querySelectorAll('section[data-bg]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => self.isActive && setBg(section.dataset.bg),
    });
  });

  // Nav switches to dark text over the light Story section.
  ScrollTrigger.create({
    trigger: '#story',
    start: 'top 40px',
    end: 'bottom 40px',
    toggleClass: { targets: '.nav', className: 'is-dark' },
  });

  // ---------- 3D keyframes ----------
  // Every 3D value is derived from scroll each frame instead of competing tweens:
  // transitions run in scroll order, each blending from where the previous one ended.
  const isMobile = () => window.innerWidth <= 760;
  const pose = (name) => (isMobile() ? POSES.mobile : POSES.desktop)[name];
  const base = () => ({ ...pose('hero'), spin: 0, wet: 1, ice: 1, bubbles: 0.7 });

  const transitions = [
    { trigger: '#cold', start: 'top bottom', end: 'top 20%', to: () => pose('cold') },
    { trigger: '#cold', start: 'top 80%', end: 'top 20%', to: () => ({ wet: 1.6 }) },
    { trigger: '#flavors', start: 'top 70%', end: 'top 10%', to: () => ({ ice: 0 }) },
    { trigger: '#flavors', start: 'top bottom', end: 'top top', to: () => pose('flavors') },
    { trigger: '#flavors', start: 'top 60%', end: 'top top', to: () => ({ wet: 1 }) },
    {
      trigger: '#flavors',
      start: 'top top',
      end: () => '+=' + distance(),
      linear: true,
      to: () => ({ spin: Math.PI * 2 * (panels.length - 1) }),
    },
    { trigger: '#story', start: 'top bottom', end: 'top 25%', to: () => pose('story') },
    { trigger: '#story', start: 'top 70%', end: 'top 30%', to: () => ({ bubbles: 0 }) },
    { trigger: '#share', start: 'top bottom', end: 'top 15%', to: () => pose('share') },
    { trigger: '#share', start: 'top 70%', end: 'top 15%', to: () => ({ ice: 1, bubbles: 0.7 }) },
  ];

  const triggers = transitions.map((tr) =>
    ScrollTrigger.create({ trigger: tr.trigger, start: tr.start, end: tr.end, invalidateOnRefresh: true }),
  );

  const smoothstep = (t) => t * t * (3 - 2 * t);
  const target = {};
  function computeTarget() {
    const ends = base();
    Object.assign(target, ends);
    transitions.forEach((tr, i) => {
      const to = tr.to();
      const raw = triggers[i].progress;
      const p = tr.linear ? raw : smoothstep(raw);
      for (const k in to) {
        if (raw > 0) target[k] = ends[k] + (to[k] - ends[k]) * p;
        ends[k] = to[k];
      }
    });
  }

  const smooth = { ice: 1 };
  let first = true;
  gsap.ticker.add((time, deltaMs) => {
    computeTarget();
    // Frame-rate independent damping; snaps on the first frame and for reduced motion.
    const k = first || reducedMotion ? 1 : 1 - Math.pow(0.9, (deltaMs / 16.67) || 1);
    first = false;
    for (const key of ['x', 'y', 'rotY', 'rotZ', 'scale', 'spin']) {
      canState[key] += (target[key] - canState[key]) * k;
    }
    wet.amount += (target.wet - wet.amount) * k;
    smooth.ice += (target.ice - smooth.ice) * k;
    ice.state.show = smooth.ice * world.intro.ice;
    bubbles.material.opacity += (target.bubbles - bubbles.material.opacity) * k;
  });

  if (reducedMotion) {
    document.querySelectorAll('[data-count]').forEach((el) => (el.textContent = el.dataset.count));
    return;
  }

  // ---------- Text reveals ----------
  gsap.set('.reveal', { opacity: 0, y: 50 });
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out' }),
  });

  // ---------- Stat counters ----------
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => (el.textContent = Math.round(obj.v)),
        }),
    });
  });

  // ---------- Timeline ----------
  gsap.utils.toArray('.timeline__item').forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: item, start: 'top 85%', once: true },
    });
    gsap.fromTo(
      item.querySelector('.timeline__year'),
      { yPercent: 40 },
      {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

import * as THREE from 'three';
import { createCan } from './can.js';
import { createBubbles, createBurst } from './bubbles.js';
import { createIce, createShadow } from './ice.js';

/**
 * A virtual product-photography studio: tall softbox strips give the can
 * those crisp vertical highlights you see in drinks advertising.
 */
function createStudioEnvironment(renderer) {
  const env = new THREE.Scene();
  env.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x0d0d10, side: THREE.BackSide }),
    ),
  );

  const softbox = (w, h, intensity, color, pos, lookAt = [0, 0, 0]) => {
    const m = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    m.color.multiplyScalar(intensity); // HDR values > 1 survive into the PMREM
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
    mesh.position.set(...pos);
    mesh.lookAt(...lookAt);
    env.add(mesh);
  };

  softbox(1.6, 14, 9, 0xffffff, [-6, 0, 3]); // key strip, left
  softbox(1.0, 14, 6, 0xfff4ec, [6, 0, 2.5]); // rim strip, right
  softbox(10, 4, 2.5, 0xffffff, [0, 9, 1]); // overhead
  softbox(8, 8, 0.7, 0xff3b30, [0, -1, -9]); // warm red bounce from behind
  softbox(14, 6, 0.6, 0xbfe6ff, [0, -2, 10]); // cool front fill

  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.02).texture;
  pmrem.dispose();
  return tex;
}

export function createScene(canvas, { reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.environment = createStudioEnvironment(renderer);

  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 12);

  // Extra lights for a crisp rim highlight on the aluminium.
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(4, 6, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffe0e0, 2.2);
  rim.position.set(-6, 2, -4);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.15));

  // Rig: scroll position → idle float/mouse tilt → continuous spin → can.
  const can = createCan(renderer);
  const scrollRig = new THREE.Group();
  const floatRig = new THREE.Group();
  const spinRig = new THREE.Group();
  spinRig.add(can.group);
  floatRig.add(spinRig);
  scrollRig.add(floatRig);
  scene.add(scrollRig);

  const bubbles = createBubbles(reducedMotion ? 0 : 260);
  scene.add(bubbles.points);
  const burst = createBurst();
  scene.add(burst.points);

  // Ice + shadow follow the can's position/scale but not its tilt or spin.
  const effectsRig = new THREE.Group();
  scene.add(effectsRig);
  const ice = createIce(can.wetMaps.normal);
  effectsRig.add(ice.group);
  const shadow = createShadow();
  shadow.position.set(0, -2.3, -0.5);
  effectsRig.add(shadow);

  // 0 = dry, 1 = fresh from the fridge, >1 = dripping (Ice Cold section).
  const wet = { amount: 1 };

  // Values driven by GSAP. x/y are fractions of half the visible viewport.
  const canState = { x: 0, y: 0, rotY: 0, rotZ: 0, scale: 1, spin: 0 };
  const intro = { y: 0, spin: 0, scale: 1, ice: 1 };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  function viewSize() {
    const h = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    return { w: h * camera.aspect, h };
  }

  // Base scale keeps the can a comfortable size on narrow screens.
  function baseScale() {
    const { w } = viewSize();
    return Math.min(1.25, w / 5.2);
  }

  window.addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  });

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();
  let autoSpin = 0;

  function tick() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    const { w, h } = viewSize();

    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;

    scrollRig.position.set((canState.x * w) / 2, (canState.y * h) / 2 + intro.y, 0);
    scrollRig.rotation.set(0, canState.rotY, canState.rotZ);
    scrollRig.scale.setScalar(canState.scale * intro.scale * baseScale());
    effectsRig.position.copy(scrollRig.position);
    effectsRig.scale.copy(scrollRig.scale);

    if (!reducedMotion) {
      autoSpin += dt * 0.35;
      floatRig.position.y = Math.sin(t * 1.2) * 0.12;
      floatRig.rotation.x = pointer.y * 0.25 + Math.sin(t * 0.8) * 0.04;
      floatRig.rotation.z = -pointer.x * 0.18;
    }
    spinRig.rotation.y = autoSpin + canState.spin + intro.spin + pointer.x * 0.4;

    // Shadow tightens as the can dips toward it and fades as it rises.
    const lift = floatRig.position.y + intro.y * 0.5;
    shadow.scale.set(1 - lift * 0.5, 1 - lift * 0.5, 1);
    shadow.material.opacity = THREE.MathUtils.clamp(0.9 - lift * 1.5, 0, 0.9) * ice.state.show;

    can.setWetness(wet.amount);
    can.update(reducedMotion ? 0 : dt);
    ice.update(reducedMotion ? 0 : dt, t, pointer);

    bubbles.update(dt, t);
    burst.update(dt);

    renderer.render(scene, camera);
  }

  function start() {
    clock.getDelta();
    renderer.setAnimationLoop(tick);
  }
  function stop() {
    renderer.setAnimationLoop(null);
  }
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  // World position of the can opening, used to aim the fizz burst.
  function openingWorldPosition() {
    const v = new THREE.Vector3();
    can.opening.getWorldPosition(v);
    return v;
  }

  return { renderer, scene, camera, can, bubbles, burst, ice, wet, canState, intro, start, openingWorldPosition };
}
